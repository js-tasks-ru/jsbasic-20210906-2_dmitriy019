import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {

    //this.categories = categories;
    this._container = this.createRibbonMenuElem();
    this.initRibbonMenu();
  }

  get elem() {
    return this._container;
  }

  createRibbonMenuElem() {
    let textHTML = 
    `<div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
      <nav class="ribbon__inner">
        <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
        <a href="#" class="ribbon__item" data-id="salads">Salads</a>
        <a href="#" class="ribbon__item" data-id="soups">Soups</a>
        <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
        <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
        <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
        <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
        <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
        <a href="#" class="ribbon__item" data-id="on-the-side ribbon__item_active">On the side</a>
      </nav>
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>`;
    return createElement(textHTML);
  }

  initRibbonMenu() {
    let leftArrow = this._container.querySelector(".ribbon__arrow_left");
    let rightArrow = this._container.querySelector(".ribbon__arrow_right");
    let ribbonInner = this._container.querySelector(".ribbon__inner");

    rightArrow.addEventListener("click", function() {
      ribbonInner.scrollBy(350, 0);
    });
  
    leftArrow.addEventListener("click", function() {
      ribbonInner.scrollBy(-350, 0);
    });

    ribbonInner.addEventListener("scroll", function() {
      displayArrows();
    });

    attachRibbonSelectEvents();

    function displayArrows() {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;
      if (scrollLeft == 0) {
        leftArrow.classList.remove('ribbon__arrow_visible');
        rightArrow.classList.add('ribbon__arrow_visible');
      } else if (scrollRight < 1) {
        leftArrow.classList.add('ribbon__arrow_visible');
        rightArrow.classList.remove('ribbon__arrow_visible');
      } else {
        leftArrow.classList.add('ribbon__arrow_visible');
        rightArrow.classList.add('ribbon__arrow_visible');
      }
    };

    function attachRibbonSelectEvents() {
      // prevent default
      ribbonInner.onclick = function() {       
        return false; 
      };
      
      let ribbonItems = ribbonInner.querySelectorAll(".ribbon__item");

      for (let item of ribbonItems) {
        item.onclick = () => {
          // first deselect all
          for (let item2 of ribbonItems) {
            item2.classList.remove('ribbon__item_active');
          }
          // select the current
          item.classList.add('ribbon__item_active');
          item.dispatchEvent(new CustomEvent("ribbon-select", {
                              detail: item.dataset.id,
                              bubbles: true
                            }));
        } 
      }
    };

    this.categories = categories;
  }
}
