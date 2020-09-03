import * as PNotify from '@pnotify/core';

const bthNextRenderRef = document.querySelector('.bth__loda-more');
export default {
  page: 1,
  query: '',
  memory: {},
  API_KEY: '17911503-2ed926ce3a8ce366c6cd807d9',
  getImages(callback) {
    if (this.memory[this.query]) {
      this.memory[this.query] = this.memory[this.query] + 1;
    } else {
      this.memory[this.query] = 1;
    }
    this.page = this.memory[this.query];
    const FETCH_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=3&key=${this.API_KEY}&page=${this.page}&q=${this.query}`;

    fetch(FETCH_URL).then(j => j.json()).then(data => {
      if(data.hits.length === 0){
        PNotify.error({
          title: 'Error',
          text: 'Enter the correct search words',
          hide: true,
          delay: 1500,
          maxOpen: 1,
        });
        return;
      }
      callback(data.hits)
   

      bthNextRenderRef.classList.remove('hiden')
    }).catch(e => console.log(e));
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  resetPage() {
    this.memory[this.query] = 1;
  }

}
