{
  // Javascript 😡
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // Typescript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Javascript
  // function jsFetchNum(id) {
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Typescript
  function fetchNum(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JAVASCRIPT => Typescript
  // Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName("HW", "LEE");
  printName("HW");
  printName("HW", undefined);

  // Default Paramter
  function printMessage(message: string = "default mesage") {
    console.log(message);
  }

  printMessage();

  // Rest Parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
}
