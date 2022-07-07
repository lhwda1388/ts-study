{
  /**
   * Discriminated(차별성) Union
   * Union 타입 사용시 공통적인 속성을 사용하여 구분할수 있도록한다.
   */

  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState2 = SuccessState | FailState;
  function login2(id: string, password: string): LoginState2 {
    return {
      result: "success",
      response: {
        body: "logged in",
      },
    };
  }

  // printLoginState(state)
  // success -> body
  // fail -> ㅜㅜ reason
  function printLoginState2(state: LoginState2) {
    //
    if (state.result === "success") {
      console.log(state?.response.body);
    } else {
      console.log(`ㅜㅜ ${state?.reason}`);
    }
  }
}
