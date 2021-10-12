import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
  //  this.slides = slides;
    this._container = this.createCarouselElem();
    let carouselInnerElement = (this._container).querySelector('.carousel__inner');

    for (let item of slides) {
      carouselInnerElement.append((new ProductSlide(item)).elem);
    }
    this.initCarousel();
  }

  get elem() {
    return this._container;
  }

  createCarouselElem() {
    let textHTML = 
      '<div class="carousel">' +
      '<div class="carousel__arrow carousel__arrow_right">' +
      '<img src="/assets/images/icons/angle-icon.svg" alt="icon"></div>' + 
      '<div class="carousel__arrow carousel__arrow_left">' +
      '<img src="/assets/images/icons/angle-left-icon.svg" alt="icon"></div>' +     
      '<div class="carousel__inner"></div></div>';
    let container = createElement(textHTML);
    return container;
  }

  initCarousel() {
    let carouselInnerElement = (this._container).querySelector('.carousel__inner');
    let rightArrow = this._container.querySelector(".carousel__arrow_right");
    let leftArrow = this._container.querySelector(".carousel__arrow_left");
    let caroselLength = carouselInnerElement.querySelectorAll('.carousel__slide').length;
    let trFactor = 0;
  
    displayArrows();
  
    rightArrow.addEventListener("click", function() {
      let offSet = carouselInnerElement.offsetWidth;
      trFactor < caroselLength - 1 ? trFactor++ : trFactor;
      carouselInnerElement.style.transform = 'translateX(-' + trFactor*offSet + 'px)';
      displayArrows()
    });
  
    leftArrow.addEventListener("click", function() {
      let offSet = carouselInnerElement.offsetWidth;
      if (trFactor > 0) {
        trFactor--;
        carouselInnerElement.style.transform = 'translateX(-' + trFactor*offSet + 'px)';
        displayArrows();
      }  
    });
  
    function displayArrows() {
      if (trFactor == 0) {
        leftArrow.style.display = 'none';
        rightArrow.style.display = '';
      } else if (trFactor == (caroselLength - 1)) {
        leftArrow.style.display = '';
        rightArrow.style.display = 'none';      
      } else {
        leftArrow.style.display = '';
        rightArrow.style.display = '';
      }
    };
  }

}

class ProductSlide {
  constructor(slideObj) {
    this._slideElem = this.createSlideElem(slideObj);
    this.createPlusEvent(slideObj);
    this.attachPlusEvent();
  }

  get elem() {
    return this._slideElem;
  }

  createSlideElem(slideObj) {
    let textHTML = 
      `<div class="carousel__slide" data-id="${slideObj.id}">` +
      `<img src="/assets/images/carousel/${slideObj.image}" class="carousel__img" alt="slide">` +
      `<div class="carousel__caption">` +
      `<span class="carousel__price">€${(slideObj.price).toFixed(2)}</span>` +
      `<div class="carousel__title">${slideObj.name}</div>` +
      `<button type="button" class="carousel__button">` +
      `<img src="/assets/images/icons/plus-icon.svg" alt="icon">` +
      `</button></div></div>`;
    let slideElem = createElement(textHTML);
    return slideElem;
  }

  createPlusEvent(slideObj) {
    this.event = new CustomEvent("product-add", {
      detail: slideObj.id,
      bubbles: true
    });
  }

  attachPlusEvent() {
    let btn = this._slideElem.querySelector(".carousel__button");
    let event = this.event;
    let slideElem = this._slideElem;
    btn.onclick = () => slideElem.dispatchEvent(event);
  }
}
