{
  /**
   * Type Assertions ðĄ
   * íėíėļ, ę°ėí ë ėŽėĐ (100% íėė ėĨëīí ëë§ ėŽėĐíëĪ.)
   */

  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();
  console.log((result as string).length);

  const wrong: any = 5;
  // console.log((wrong as Array<number>).push(1)); // ðĄ

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!;
  numbers.push(2); // ę°ėī ėëĪęģ  íė í ë !

  const button = document.querySelector("class")!;
}
