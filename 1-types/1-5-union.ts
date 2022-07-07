{
  /**
   * Union Types : OR - |
   */

  type Direction = "right" | "left" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("left");
  move("right");
  // move("ab?"); //X

  type TileSize = 8 | 16 | 32;
  // const tile: TileSize = 6; // X
  const tile: TileSize = 8;

  // function: login -> success, fail
  type Success = {
    response: {
      body: string;
    };
  };
  type Fail = {
    reason: string;
  };

  type LoginState = Success | Fail;
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: "logged in",
      },
    };
  }

  // printLoginState(state)
  // success -> body
  // fail -> ㅜㅜ reason
  // Discriminated Union
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(state?.response.body);
    } else {
      console.log(`ㅜㅜ ${state?.reason}`);
    }
  }
}
