const UserService = require("../user_service");
const UserClient = require("../user_client"); // 필요한 것을을 import 하고
jest.mock("../user_client"); // user_client 전체를 mock

describe("UserService", () => {
  const login = jest.fn(async () => "success"); // 우선 login이라는 함수를 mocking 하고
  UserClient.mockImplementation(() => {
    // UserClicnt라는 모듈 전체를 mock
    return {
      login, // login 하면 mock 함수와 연결되도록 만들었다
    };
  });
  let userService;

  beforeEach(() => {
    userService = new UserService(new UserClient());
    // 우리는 clearMocks 설정이 켜져 있기 때문에 beforeEach에 따로 mock 초기화는 안해줘도 되므로 생략했음
  });

  it("calls login() on UserClient when tries to login", async () => {
    await userService.login("abc", "abc"); // 로그인을 시도 했을 때, 첫번째 로그인이라면
    expect(login.mock.calls.length).toBe(1); // login이 호출 되는지 확인 해야 한다
  });

  it("should not call login() on UserClient again if already logged in", async () => {
    await userService.login("abc", "abc"); // 로그인을 한 다음에
    await userService.login("abc", "abc"); // 또 다시 로그인을 한다면

    expect(login.mock.calls.length).toBe(1); // 첫 로그인 할 때에만 client는 딱 한번만 호출되어야 겠지
  });
});
