import { fetchProduct } from './fetchProduct'; 
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

let mock: MockAdapter;
const API_PRODUCT_URL = "https://my-json-server.typicode.com/benirvingplt/products/products"
beforeEach(() => {
  mock = new MockAdapter(axios);
});

afterEach(() => {
  mock.restore();
});

describe('fetchProduct async thunk', () => {
  it('should return the fetched data', async () => {
    const mockData = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];
    mock.onGet(API_PRODUCT_URL)
      .reply(200, mockData);
    const thunk = fetchProduct(); 
    const result = await thunk(jest.fn(), jest.fn(), undefined);
    expect(result.payload).toEqual(mockData); 
  });

  it('should throw an error if the request fails', async () => {
    mock.onGet(API_PRODUCT_URL)
      .reply(500);
    const thunk = fetchProduct();
    const result = await thunk(jest.fn(), jest.fn(), undefined);
    await expect(result.meta.requestStatus).toEqual('rejected');
  });
});