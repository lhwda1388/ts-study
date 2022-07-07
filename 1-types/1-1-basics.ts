{
  /**
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array..
   */
  // number
  const num: number = 1;

  // string
  const str: string = "string";

  // boolean
  const bool: boolean = false;

  // undefined : 값이 있는지 없는지 결정 X
  let age: number | undefined;
  age = undefined;

  function func(): number | undefined {
    return undefined;
  }

  // null : 값이 비어있음
  let person: null; // 😡
  let person2: null | string;
  person2 = "person";

  // unknown 알수없는 상태 😡
  let notSure: unknown = 0;
  notSure = "hi";

  // any 😡
  let anything: any = 0;
  anything = "helo";

  // void
  function print(): void {
    console.log("hello");
  }
  let unuse: void = undefined; // 😡

  // never 아무것도 리턴하지 않는다
  function throwError(msg: string): never {
    // msg -> server(log)
    throw new Error(msg);
    // while (true) {}
  }
  let naverV: never; // 😡

  // object
  // 구체적인 타입 명시해서 쓰는게 좋음
  let obj: object; // 😡
  function someObj(params: object) {}
  someObj({});
  someObj([]);
}
