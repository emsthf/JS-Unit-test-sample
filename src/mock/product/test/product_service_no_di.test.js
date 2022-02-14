const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");
jest.mock("../product_client");

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "🥛", available: true },
    { item: "🍌", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems, // ProductClient 클래스 mock에 있는 fetchItems에 위에서 만든 fetchItems를 연결
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1); // 테스트 결과 1개의 아이템만 담겨야 하므로 길이가 1이어야 함
    expect(items).toEqual([{ item: "🥛", available: true }]); // 테스트 결과 아이템이 조건에 맞는 아이템이여야 함
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1); // <= 여기 테스트 함수가 수행이 될 때 또 한번 더 호출이 된다
  });
});
