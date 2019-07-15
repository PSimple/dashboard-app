import axios from 'axios';

const setHtmlIntoElement = (elementId, html) => {
  document.getElementById(elementId).innerHTML = html;
};


const fetchData = async (url) => {
  try {
    const {
      data,
    } = await axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};

export { setHtmlIntoElement, fetchData };
