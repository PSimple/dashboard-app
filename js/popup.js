const isHidden = (el) => {
  const style = window.getComputedStyle(el);
  return (style.display === 'none');
};

const overlay = document.querySelector('.popup__overlay');

const togglePopup = (element, visibleClass) => {
  if ((overlay.style.display === 'none' || overlay.style.display === '') && isHidden(document.querySelector(element))) {
    overlay.style.display = 'block';
    overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      document.querySelector(element).classList.remove(visibleClass);
      overlay.removeEventListener('click', () => {});
    });
    document.querySelector(element).classList.add(visibleClass);
  } else {
    overlay.style.display = 'none';
    document.querySelector(element).classList.remove(visibleClass);
    overlay.removeEventListener('click', () => {});
  }
};

const buttonGrid = document.querySelector('.header__button--grid');
const buttonProfile = document.querySelector('.header__profile');

buttonGrid.addEventListener('click', () => {
  buttonGrid.classList.toggle('header__button--active');
  togglePopup('.popup__grid', 'popup--visible');
});

buttonProfile.addEventListener('click', () => {
  buttonProfile.classList.toggle('header__button--active');
  togglePopup('.popup__profile', 'popup--visible');
});
