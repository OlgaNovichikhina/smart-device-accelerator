const ANCHOR = document.querySelector('a[href="#form"]');
const FORM = document.querySelector('#form');

function scrollPage() {
  ANCHOR.addEventListener('click', function (evt) {
    evt.preventDefault();
    FORM.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

export {scrollPage};
