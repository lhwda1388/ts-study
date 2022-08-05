{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  // 명세서
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level - 오브젝트마다 생성 X
    private coffeeBeans: number = 0; // instance(Object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

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
    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      super(coffeeBeans);
    }
    private steamMilk() {
      console.log("steam milk...");
    }

    protected extract(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(coffeeBeans: number) {
      super(coffeeBeans);
    }
    protected extract(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);

      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, "12313"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("-------------");
    console.log(machine.makeCoffee(2));
  });
}
