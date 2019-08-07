import axios from 'axios';
import clientApi from '../src/services/clientApi';

jest.mock('axios');


describe('clientApi test suite', () => {
  test('clientApi get method should call axios get', () => {
    clientApi.get('');
    expect(axios.get).toBeCalled();
  });
});
