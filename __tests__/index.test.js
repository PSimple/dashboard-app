import axios from 'axios';
import fetchData from '../src/services/fetchData';
import widgetsData from '../src/fixtures/widgetsData.json';

jest.mock('axios');

describe('test describe', () => {
  test('test test', () => {
    const resp = { data: widgetsData };
    axios.get.mockResolvedValue(resp);

    return fetchData('../src/fixtures/widgetsData.json').then(data => expect(data).toEqual(widgetsData));
  });
});
