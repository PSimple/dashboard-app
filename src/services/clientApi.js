import axios from 'axios';

export default {
  async get(url, params = {}) {
    // eslint-disable-next-line no-useless-catch
    try {
      const {
        data,
      } = await axios.get(url, params);
      return data;
    } catch (error) {
      throw error;
    }
  },
};
