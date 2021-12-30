import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.modalTitle = "init value";
    this.modalBody = createElement('<div>init value</div>');
    this.open();
  }

  setTitle(title) {
    this.modalTitle = title;
    let modalTitleElem = document.querySelector('.modal__title');
    modalTitleElem.innerHTML = title; 
  }

  setBody(bodyElem) {
    this.modalBody = bodyElem;
    let modalBodyRef = document.querySelector('.modal__body');
    modalBodyRef.append(bodyElem); 
  }

  close() {
    let container = document.querySelector('.container');
    container.innerHTML = "";

    // remove the class from the body
    document.body.classList.remove('is-modal-open');
  }

  open() {
    document.body.innerHTML = "";

    // set document body class
    document.body.classList.add('is-modal-open');

    // set document body
    let containerHTML = `
      <div class="container">
        <div class="modal">
          <div class="modal__overlay"></div> 
          <div class="modal__inner">
            <div class="modal__header">
              <button type="button" class="modal__close">
                <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
              </button>   
              <h3 class="modal__title">
                ${this.modalTitle}
              </h3>
            </div>  
            <div class="modal__body">

            </div>
          </div>
        </div>      
      </div>`;
    document.body.append(createElement(containerHTML));

    // attach modal body element
    document.querySelector('.modal__body').append(this.modalBody);

    // add event to the close icon
    let modalClose = document.querySelector('.modal__close');
    modalClose.onclick = () => {this.close()};

    // add event listener to the ESC key and delete it after first event
    document.addEventListener('keydown', this.handleKeyDown, {once: true});
  }

  handleKeyDown(event) {
    if (event.code === 'Escape') {
      // remove the class from the body
      document.body.classList.remove('is-modal-open');

      // document.body.innerHTML = "";
      let container = document.querySelector('.container');
      container.innerHTML = "";
    }
  }
}
