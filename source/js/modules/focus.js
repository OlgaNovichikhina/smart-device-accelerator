const BUTTON_OPEN_MODAL = document.querySelector('[data-open-modal]');
const INPUT_NAME = document.querySelector('input[data-modal-name-input]');


function onClickFocusInput() {
  BUTTON_OPEN_MODAL.addEventListener('click', () => {
    setTimeout(() => INPUT_NAME.focus(), 500);
  });
}


export {onClickFocusInput};
