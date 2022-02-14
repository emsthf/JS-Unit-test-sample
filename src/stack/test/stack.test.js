const Stack = require("../stack.js"); // 아직은 없지만 stack이라는 모듈을 가져 올 것

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    // 매 테스트를 돌리기 전에
    stack = new Stack(); // 새로운 stack을 생성해 줄 것
  });

  it("is create empty", () => {
    expect(stack.size()).toBe(0); // 처음 만들어진 stack의 사이즈는 0
  });

  it("allow to push item", () => {
    stack.push("🍌"); // stack에 바나나를 추가
    expect(stack.size()).toBe(1); // 빈 stack에 바나나를 하나 넣었으니 사이즈가 1
  });

  describe("", () => {
    it("throws an error if stack is empty", () => {
      // stack이 비어있을 때 pop 테스트
      expect(() => {
        stack.pop();
      }).toThrow("Stactk is empty"); // stack이 비어있다고 error를 던질 것
    });

    it("return th last pushed item and remove it from the stack", () => {
      stack.push("🍌"); // stack에 먼저 바나나를 넣고
      stack.push("🍎"); // stack에 사과를 넣는다

      expect(stack.pop()).toBe("🍎"); // pop()을 하면 나중에 넣은 사과가 나오고
      expect(stack.size()).toBe(1); // stack에는 바나나만 남아서 사이즈가 1이 된다
    });
  });

  describe("peek", () => {
    it("throws an error if stack is empty", () => {
      // stack이 비어있을 때 peek 테스트
      expect(() => {
        stack.peek(); // peek()이 호출되면
      }).toThrow("Stactk is empty"); // stack이 비어있다고 error를 던질 것
    });

    it("returns the last pushed item but keeps it in the stack", () => {
      // peek은 stack에는 그대로 유지하면서 어떤게 있는지 확인
      stack.push("🍌"); // stack에 먼저 바나나를 넣고
      stack.push("🍎"); // stack에 사과를 넣는다

      expect(stack.pop()).toBe("🍎"); // pop()을 하면 나중에 넣은 사과가 나오고
      expect(stack.size()).toBe(2); // stack에는 사과도 그대로 남아서 사이즈가 2이 된다
    });
  });
});
