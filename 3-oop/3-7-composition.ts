{
  // 상속의 문제점
  // 상속의 깊이가 길어질수록 관계가 복잡성을 가지게 된다.

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  // 명세서
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level - 오브젝트마다 생성 X

    constructor(
      private coffeeBeans: number = 0,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {}

    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("must be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log("clean maker");
    }
    // 정보 은닉을 통한 추상화
    private grindBeans(shots: number): void {
      console.log(`grinding benas for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    // 정보 은닉을 통한 추상화
    private preheat(): void {
      console.log(`heating...`);
    }

    // 정보 은닉을 통한 추상화
    private extract(shots: number): CoffeeCup {
      console.log(`pulling... ${shots}`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  // class CaffeLatteMachine extends CoffeeMachine {
  //   constructor(
  //     coffeeBeans: number,
  //     public readonly serialNumber: string,
  //     private milkFrother: MilkFrother
  //   ) {
  //     super(coffeeBeans);
  //   }

  //   // overrinding
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.milkFrother.makeMilk(coffee);
  //   }
  // }

  // class SweetCoffeeMaker extends CoffeeMachine {
  //   constructor(coffeeBeans: number, private sugarMixer: SugarProvider) {
  //     super(coffeeBeans);
  //   }

  //   // overrinding
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.sugarMixer.addSugar(coffee);
  //   }
  // }

  // Class 간에 상호작용을 직접적으로 하지 않고 intface로 중간다리를 만들어줘서 decoupling해준다.

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거품기
  class CheapMilSteamer implements MilkFrother {
    private steamMilk() {
      console.log("steam milk...");
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("steam fancy milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk() {
      console.log("steam cold milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return {
        ...cup,
        hasMilk: false,
      };
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from candy");
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return {
        ...cup,
        hasSugar: false,
      };
    }
  }

  // 외부에서 주입해서(DI) 조합(composition)
  // 문제점 CheapMilSteamer, CandySugarMixer 강하게 커플링 되어있음 -> interface로 치환하여 디커플링함
  // 클래스와 클래스간에 관계를 맺는것은 좋지 않음
  // class SweetCaffeLatteMachine extends CoffeeMachine {
  //   constructor(
  //     beans: number,
  //     private milk: MilkFrother,
  //     private sugar: SugarProvider
  //   ) {
  //     super(beans);
  //   }
  //   makeCoffee(shots: number) {
  //     const coffee = super.makeCoffee(shots);
  //     return this.milk.makeMilk(this.sugar.addSugar(coffee));
  //   }
  // }

  // Milk
  const cheapMilkMaker = new CheapMilSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // const sweetCandytMachine = new SweetCoffeeMaker(12, candySugar);
  // const sweetMachine = new SweetCoffeeMaker(12, Sugar);

  // const latteMachine = new CaffeLatteMachine(12, "SS", cheapMilkMaker);
  // const coldLatteMachine = new CaffeLatteMachine(12, "SS", coldMilkMaker);
  // const sweetLatteMachine = new SweetCaffeLatteMachine(
  //   12,
  //   cheapMilkMaker,
  //   candySugar
  // );

  const noMilkNoSugarMachine = new CoffeeMachine(12, noMilk, noSugar);
  const milkNoSugarMachine = new CoffeeMachine(12, noMilk, sugar);
}
