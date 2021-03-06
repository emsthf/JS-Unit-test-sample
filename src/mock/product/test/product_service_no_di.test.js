const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");
jest.mock("../product_client");

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "๐ฅ", available: true },
    { item: "๐", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems, // ProductClient ํด๋์ค mock์ ์๋ fetchItems์ ์์์ ๋ง๋  fetchItems๋ฅผ ์ฐ๊ฒฐ
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
    expect(items.length).toBe(1); // ํ์คํธ ๊ฒฐ๊ณผ 1๊ฐ์ ์์ดํ๋ง ๋ด๊ฒจ์ผ ํ๋ฏ๋ก ๊ธธ์ด๊ฐ 1์ด์ด์ผ ํจ
    expect(items).toEqual([{ item: "๐ฅ", available: true }]); // ํ์คํธ ๊ฒฐ๊ณผ ์์ดํ์ด ์กฐ๊ฑด์ ๋ง๋ ์์ดํ์ด์ฌ์ผ ํจ
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1); // <= ์ฌ๊ธฐ ํ์คํธ ํจ์๊ฐ ์ํ์ด ๋  ๋ ๋ ํ๋ฒ ๋ ํธ์ถ์ด ๋๋ค
  });
});
