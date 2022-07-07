{
  /**
   * Type Assertions 😡
   * 타입확인, 강요할떄 사용 (100% 타입을 장담할때만 사용한다.)
   */

  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  console.log((result as string).length);

  const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1)); // 😡

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!;
  numbers.push(2); // 값이 있다고 확신할때 !

  const button = document.querySelector("class")!;
}
