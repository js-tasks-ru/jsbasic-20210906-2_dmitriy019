import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};
    this._gridElem = this.createProductGridElem();
    let prodGritInnerElem = (this._gridElem).querySelector('.products-grid__inner');
    for (let item of products) {
      prodGritInnerElem.append((new ProductCard(item)).elem);
    }
  }

  get elem() {
    return this._gridElem; 
  }

  createProductGridElem() {
    let textHTML = 
    `<div class="products-grid">
      <div class="products-grid__inner">
        <!--КАРТОЧКИ ТОВАРОВ-->
      </div>
    </div>`;
    let gridElem = createElement(textHTML);
    return gridElem;
  }

  updateFilter() {
    
  }
}

let filters = {
  noNuts: true, // true/false
  vegeterianOnly: false, // true/false
  maxSpiciness: 3, // числа от 0 до 4
  category: 'soups' // уникальный идентификатор категории товара
};
