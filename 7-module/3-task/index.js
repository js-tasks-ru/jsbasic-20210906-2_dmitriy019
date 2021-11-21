import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this._steps = steps;
    this._value = value;
    this._segmentPercentage = 100/(steps - 1);
    this._slider = this.createSliderlElem();
    this.initSlider(this._value, this._segmentPercentage);
  }

  get elem() {
    return this._slider;
  }

  createSliderlElem() {
    let textSpans = '';
    for (let i=0; i < this._steps; i++) {      
      textSpans = textSpans + (i != this._value ? "<span></span>" : "<span class='slider__step-active'></span>");
    }
    
    let textHTML = 
      `<div class="slider">
        <div class="slider__thumb" style="left: ${this._segmentPercentage * this._value}%;">
          <span class="slider__value">${this._value}</span>
        </div>
    
        <div class="slider__progress" style="width: ${this._segmentPercentage * this._value}%;"></div>
    
        <div class="slider__steps">
          ${textSpans}
        </div>
      </div>`;
    let container = createElement(textHTML);
    return container;
  }

  initSlider(value, segmentPercentage) {
    let slider = this._slider;
    let valueElem = slider.querySelector('.slider__value');
    let thumbElem = slider.querySelector('.slider__thumb');
    let progressElem = slider.querySelector('.slider__progress');
    let stepsElem = slider.querySelector('.slider__steps');
    let segmentAmount = this._steps - 1;

    slider.addEventListener('click', function (clickEvent) {
      let stepActive = slider.querySelector('.slider__step-active');
      stepActive.className = '';
      value = value + deltaX(clickEvent);
      valueElem.innerHTML = value;
      thumbElem.style.left = `${segmentPercentage * value}%`;
      progressElem.style.width = `${segmentPercentage * value}%`;
      stepsElem.getElementsByTagName("span")[value].className = 'slider__step-active';
      slider.dispatchEvent(new CustomEvent("slider-change", {
                                                              detail: value,
                                                              bubbles: true
                                                            }));
    });

    function deltaX(event) {
      let deltaXpx = event.clientX - thumbElem.getBoundingClientRect().left;
      let segmentPixel = slider.getBoundingClientRect().width / segmentAmount;
      return Math.round(deltaXpx/segmentPixel);
    }
  }
}




