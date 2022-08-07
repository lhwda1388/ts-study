{
  // Java : Exception
  // Javascript: Error

  // const array = new Array(1000000000000000000);

  type Position = { x: number; y: number };

  const position: Position = { x: 0, y: 0 };

  type Direction = "up" | "down" | "left" | "right" | "he";

  function move2(direction: Direction) {
    switch (direction) {
      case "up":
        position.y += 1;
        break;
      case "down":
        position.y -= 1;
        break;
      case "left":
        position.x -= 1;
        break;
      case "right":
        position.x += 1;
        break;

      default:
        //case 에 지정된게 없는 타입이 존재하는경우 컴파일 에러
        // const invalid: never = direction;
        throw new Error(`unknown direction : ${direction}`);
    }
  }

  // Error(Exception) Handling: try -> catch -> finally

  function readFile(fileName: string): string {
    if (fileName === "not exist!") {
      throw new Error(`file not exist! ${fileName}`);
    }

    return "file contents";
  }

  function closeFile(fileName: string) {
    //
  }

  function run() {
    const fileName = "ff";

    // 꼭 에러가 발생하는 부분만 사용
    try {
      console.log(readFile(fileName));
    } catch (error) {
      console.log(`catched!!`);
      return;
    } finally {
      closeFile(fileName);
      console.log(`finally!!`);
    }

    console.log(`!!!`);
  }

  run();
}
