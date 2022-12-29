const ABOUT_MORE = document.querySelector('.about__info--more');
const ABOUT_BUTTON = document.querySelector('.about__button');
const ABOUT_MOBILE = document.querySelector('.about__info--mobile');

function showMoreText() {
  ABOUT_MORE.style.display = 'none';
  ABOUT_BUTTON.style.display = 'flex';
  ABOUT_BUTTON.addEventListener('click', () => {
    ABOUT_MORE.style.display = 'none';
    const isOpened = ABOUT_MORE.classList.contains('is-open');
    ABOUT_MORE.classList.remove('is-open');
    ABOUT_MOBILE.classList.remove('is-open');
    ABOUT_BUTTON.textContent = 'Подробнее';

    if (!isOpened) {
      ABOUT_MORE.style.display = 'block';
      ABOUT_MORE.classList.add('is-open');
      ABOUT_MOBILE.classList.add('is-open');
      ABOUT_BUTTON.textContent = 'Свернуть';
    }
  });
}

export {showMoreText};
