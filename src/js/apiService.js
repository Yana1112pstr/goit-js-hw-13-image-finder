import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '23625059-9296b74aaab4f5d239dc56ee8';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 12;
  }

  async fetchImg() {
    try {
      let response = await axios.get(
        `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${apiKey}`,
      );
      let data = await response?.data;
      this.incrementPage();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(value) {
    this.searchQuery = value;
  }
}