import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0}) {
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
    const slider = this._slider;
    const valueElem = slider.querySelector('.slider__value');
    const thumbElem = slider.querySelector('.slider__thumb');
    const progressElem = slider.querySelector('.slider__progress');
    const stepsElem = slider.querySelector('.slider__steps');
    const segmentAmount = this._steps - 1;

    // switch off the default browser Drag’n’Drop
    slider.ondragstart = function() {
      return false;
    };

    slider.addEventListener('pointerup', managePointerUp);

    // init slider move per click on the thumb
    thumbElem.onpointerdown = function() {
      // add class: slider_dragging
      slider.classList.add('slider_dragging');     
      // listen to slider move
      document.addEventListener('pointermove', onPointerMove);
    }

    // stop listening to slider move per slider mouse up
    document.onpointerup = function(event) {
      if (slider.classList.contains('slider_dragging')) {
        document.removeEventListener('pointermove', onPointerMove);    
        managePointerUp(event);
        // remove class: slider_dragging
        slider.classList.remove('slider_dragging'); 
      } 
    }
    
    ////////////////////////// Functions //////////////////////////
    function managePointerUp(event) {
        manageValueChange(event);
        resetThumbAndProgress(`${segmentPercentage * value}%`);
        resetActiveStep(value); 
    }

    function manageValueChange(event) {
      // check change of value
      if (value != getNewValue(event)) {
        value = getNewValue(event); // reset 
        slider.dispatchEvent(new CustomEvent("slider-change", {
          detail: value,
          bubbles: true
        }));  
      }
      // display new value
      valueElem.innerHTML = value;
    }

    function getNewValue(event) {
      let deltaX = getDeltaX(event);
      return Math.round(deltaX/(slider.getBoundingClientRect().width / segmentAmount));
    }

    // coordinate of the event relative to the slider
    function getDeltaX(event) {
      let deltaX = event.pageX - slider.getBoundingClientRect().left;
      if (deltaX < 0) {
        return 0;
      } else if (deltaX > slider.getBoundingClientRect().width) {
          return slider.getBoundingClientRect().width;
      } else {
          return event.pageX - slider.getBoundingClientRect().left;
      }
    }

    function resetThumbAndProgress(shiftX) {
      thumbElem.style.left = shiftX;
      progressElem.style.width =  shiftX;
    }
    
    function resetActiveStep() {
      let stepActive = slider.querySelector('.slider__step-active');
      stepActive.className = '';
      stepsElem.getElementsByTagName("span")[value].className = 'slider__step-active';
    }

    function onPointerMove(event) {
      manageValueChange(event);
      let deltaX = getDeltaX(event);
      resetThumbAndProgress(deltaX/slider.getBoundingClientRect().width*100 + '%');
      resetActiveStep(value);
    }

  }
}
