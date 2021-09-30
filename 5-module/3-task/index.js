function initCarousel() {
  let rightArrow = document.querySelector(".carousel__arrow_right");
  let leftArrow = document.querySelector(".carousel__arrow_left");
  let tapeInner = document.querySelector(".carousel__inner"); 
  let offSet = tapeInner.offsetWidth;
  let tapeLength = document.querySelectorAll('.carousel__slide').length;
  let trFactor = 0;

  displayArrows();

  rightArrow.addEventListener("click", function() {
    trFactor < tapeLength - 1 ? trFactor++ : trFactor;
    tapeInner.style.transform = 'translateX(-' + trFactor*offSet + 'px)';
    displayArrows()
  });

  leftArrow.addEventListener("click", function() {
    if (trFactor > 0) {
      trFactor--;
      tapeInner.style.transform = 'translateX(-' + trFactor*offSet + 'px)';
      displayArrows();
    }  
  });

  function displayArrows() {
    if (trFactor == 0) {
      leftArrow.style.display = 'none';
      rightArrow.style.display = '';
    } else if (trFactor == (tapeLength - 1)) {
      leftArrow.style.display = '';
      rightArrow.style.display = 'none';      
    } else {
      leftArrow.style.display = '';
      rightArrow.style.display = '';
    }
  };
}
