{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 명세서
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(benas: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level - 오브젝트마다 생성 X
    private coffeeBeans: number = 0; // instance(Object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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
    private extract(shots: number): CoffeeCup {
      console.log(`pulling... ${shots}`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): { shots: number; hasMilk: boolean } {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const coffeeMachine: CoffeeMachine = CoffeeMachine.makeMachine(32);
  coffeeMachine.fillCoffeeBeans(32);
  coffeeMachine.makeCoffee(2);

  // 인터페이스를 통한 추상화
  const coffeeMachine2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  coffeeMachine2.fillCoffeeBeans(32);
  coffeeMachine.makeCoffee(2);
  coffeeMachine.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);

      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      this.machine.fillCoffeeBeans(32);
      this.machine.clean();
      console.log(coffee);
    }
  }

  // 같은 CoffeeMachine을 전달 받았지만 interface에 규약된 내용대로 접근가능하게 추상화 할수 있음
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  amateur.makeCoffee();
  const pro = new ProBarista(maker);
  pro.makeCoffee();
}
