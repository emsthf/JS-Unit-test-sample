class Stack {
  constructor() {
    // 생성자로 stack이 초기화 될 때
    this.array = []; // 이렇게 텅 빈 배열을 만들어 줄 것
  }

  size() {
    // size라는 이 함수 안에서는
    return this.array.length; // 배열의 길이를 리턴하면 된다
  }

  push(item) {
    // item을 받아서
    this.array.push(item); // 배열에 넣어주면 된다
  }

  pop() {
    // pop이라는 함수는
    if (this.array.length === 0) {
      // 배열의 길이가 0일 때
      throw new Error("Stactk is empty"); // 이러한 에러를 던진다
    }
    return this.array.pop(); // 배열의 길이가 0이 아니라면 최종 아이템을 제거
  }

  peek() {
    // peek이라는 함수는
    if (this.array.length === 0) {
      // 배열의 길이가 0일 때
      throw new Error("Stactk is empty"); // 이러한 에러를 던진다
    }
    return this.array[this.size() - 1]; // 배열의 사이즈에 -1을 해서 배열의 제일 마지막 인덱스 확인
  }
}

module.exports = Stack;
