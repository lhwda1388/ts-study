{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected
  class CoffeeMachine {
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

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // const coffeeMachine = new CoffeeMachine(32);
  const coffeeMachine = CoffeeMachine.makeMachine(32);
  console.log(coffeeMachine);
  console.log(coffeeMachine.makeCoffee(2));

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private _age: number;

    get age(): number {
      return this._age;
    }

    set age(age: number) {
      this._age = age;
    }

    // 생성자 인수에 접근제어자 할당하면 자동으로 멤버변수 추가
    constructor(public firstName: string, private lastName: string) {}
  }

  const user = new User("Steve", "Jobs");
  console.log(user.fullName);
  user.firstName = "Henry";
  console.log(user.fullName);
}
