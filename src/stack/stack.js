class Stack {
  constructor() {
    // 생성자로 stack이 초기화 될 때
    this.size = 0; // 배열을 사용하지 않고 사이즈를 수동적으로 가지고 있을 것
    this.head = null; // 다음 아이템을 가리킬 수 있는 오브젝트. 스택이 처음 만들어 졌을 때는 다음 정보가 없기 때문에 null
  }

  size() {
    // size라는 이 함수 안에서는
    return this._size; // 사이즈를 리턴하면 된다
  }

  push(item) {
    // item을 받아서
    const node = { item, next: this.head }; // node라는 아이템을 만들어서 item을 전달하고 다음에 오는 아이템을 head를 이용해 가리킬 수 있다
    this.head = node; // 새로운 node를 만들어서 head가 새로 만들어진 node를 가리킨다
    this._size++; // 사이즈도 하나 증가시켜 준다
  }

  pop() {
    // pop이라는 함수는
    if (this.head === null) {
      // head가 아무런 아이템도 가리키지 않는다면(=아무 아이템도 없다면)
      throw new Error("Stactk is empty"); // 이러한 에러를 던진다
    }
    const node = this.head; // pop하고자 하는 아이템은 head가 가리키고 있는 아이템
    this.head = node.next; // 그래서 this.head는 그 다음 것을 가리켜야 한다
    this._size--; // 사이즈를 하나 줄여준다
    return node.item; // node의 아이템을 리턴
  }

  peek() {
    // peek이라는 함수는
    if (this.head === null) {
      // head가 null을 가리키면
      throw new Error("Stactk is empty"); // 이러한 에러를 던진다
    }
    return this.head.item; // 값만 보여주면 되므로 현재 head가 가리키고 있는 아이템을 리턴하면 된다
  }
}

module.exports = Stack;
