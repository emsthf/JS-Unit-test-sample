class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false; // 첫 상태는 로그인이 안되어 있으니 isLogedIn이 false인 상태
  }

  login(id, password) {
    if (!this.isLogedIn) {
      // isLogedIn이 false면 = 로그인이 안된 상태라면
      return this.userClient // userClient를 이용해서
        .login(id, password) // login 함수를 돌린다
        .then((data) => (this.isLogedIn = true)); // 로그인이 성공했다면 isLogedIn을 true로 바꿀 것
    }
    // 그래서 로그인을 두 번 이상 호출하게 되면 두번째 부터는 로그인이 되었기 때문에 userClient에게 더이상 로그인 요청을 하지 않는 로직
  }
}

module.exports = UserService;
