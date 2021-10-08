import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this._container = this.createHTML(product);
    this.createAddEvent(product);
    this.attachAddEvent();
  }

  get elem() {
    return this._container;
  }

  createHTML(product) {
    let textHTML = '<div class="card">' +
      '<div class="card__top">' + 
      `<img src="/assets/images/products/${product.image}" class="card__image" alt="product">` + 
      '<span class="card__price">' + "€" + `${(product.price).toFixed(2)}</span>` + 
      `</div><div class="card__body"><div class="card__title">${product.name}</div>` + 
      '<button type="button" class="card__button">' + 
      `<img src="/assets/images/icons/plus-icon.svg" alt="icon"></button></div>`
      '</div>';
    let container = createElement(textHTML);
    return container;
  }

  createAddEvent(product) {
    this.event = new CustomEvent("product-add", {
      detail: product.id,
      bubbles: true
    });
  }

  attachAddEvent() {
    let btn = this._container.querySelector(".card__button");
    let event = this.event;
    let container = this._container;
    btn.onclick = () => container.dispatchEvent(event);
  }
}