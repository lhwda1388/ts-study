{
  /**
   * Type Inference(타입투론)
   * 값을보고 타입을 추론함
   * 타입을 되도록이면 정확하게 명시하는게 좋음.
   */
  let text = "hello";
  // text = 1; // 에러남
  function print(message = "") {
    console.log(message);
  }

  print("hello");
  // print(1); // X

  // 리턴 값 추론
  function add2(x: number, y: number) {
    return x + y;
  }

  const result = add2(1, 2);
}
