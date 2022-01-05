export default () => ({
  page: 1,
  items: [],
  itemsMax: null,
  itemsPerPage: 8,
  isLoading: false,
  init() {
    this.getItem();

    window.addEventListener('scroll', () => {
      this.onScroll();
    });
  },
  onScroll() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight && this.items.length < this.itemsMax) {
      this.page += 1;
      this.isLoading = true;
      this.getItem();
    }
  },
  getItem() {
    fetch(`https://api.javascripttutorial.net/v1/quotes/?page=${this.page}&limit=${this.itemsPerPage}`)
      .then((response) => response.json())
      .then((data) => {
        this.itemsMax = data.total;
        this.items.push(...data.data);
        this.isLoading = false;
      });
  },
});
