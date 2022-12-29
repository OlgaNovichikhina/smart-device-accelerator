const BUTTON_NAV = document.querySelector('.footer__btn--nav');
const BUTTON_CONTACT = document.querySelector('.footer__btn--contact');
const BLOCK_NAV = document.querySelector('.footer_nav-list-wrapper');
const BLOCK_CONTACT = document.querySelector('.footer__contact-list');
const FOOTER_TITLE_NAV = document.querySelector('.footer__title--nav');
const FOOTER_TITLE_CONTACT = document.querySelector('.footer__title--contact');

const closeBlock = function (block, btn) {
  btn.classList.remove('footer__btn--active');
  block.style.maxHeight = null;
};

const showBlock = function (block, btn) {
  btn.classList.add('footer__btn--active');
  block.style.maxHeight = BLOCK_NAV.scrollHeight + 'px';
};

function showFooterItem() {
  BUTTON_NAV.classList.remove('footer__btn--nav-nojs');
  BUTTON_CONTACT.classList.remove('footer__btn--contact-nojs');
  BLOCK_NAV.classList.remove('footer__nav-list-wrapper--nojs');
  BLOCK_CONTACT.classList.remove('footer__contact-list--nojs');
  if (FOOTER_TITLE_NAV) {
    FOOTER_TITLE_NAV.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (BLOCK_NAV.style.maxHeight) {
        closeBlock(BLOCK_NAV, BUTTON_NAV);
      } else {
        showBlock(BLOCK_NAV, BUTTON_NAV);
        closeBlock(BLOCK_CONTACT, BUTTON_CONTACT);
      }
    });
  }

  if (FOOTER_TITLE_CONTACT) {
    FOOTER_TITLE_CONTACT.addEventListener('click', function (evt) {
      evt.preventDefault();
      if (BLOCK_CONTACT.style.maxHeight) {
        closeBlock(BLOCK_CONTACT, BUTTON_CONTACT);
      } else {
        showBlock(BLOCK_CONTACT, BUTTON_CONTACT);
        closeBlock(BLOCK_NAV, BUTTON_NAV);
      }
    });
  }
}

export {showFooterItem};
