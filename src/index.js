import './style.css';

import img1 from './imgs/img1.jpg';
import img2 from './imgs/img2.jpg';
import img3 from './imgs/img3.jpg';

import NavMenu from './nav';
import ImgSlider from './imgSlider';

import createImgSliderEl, {
  createDotBtn,
  updateDisplayImgEl,
  dotHandler,
  leftArrowHandler,
  rightArrowHandler,
} from './ui/imgSliderEl';

import createNavMenuEl from './ui/navMenuEl';

const headerEl = document.querySelector('header');
const mainEl = document.querySelector('main');

const nav = new NavMenu('Home', 'Destinations', 'About Us');
const imgSlider = new ImgSlider(img1, img2, img3);

const navEl = createNavMenuEl(nav);
const imgSliderEl = createImgSliderEl();

window.addEventListener('DOMContentLoaded', () => {
  headerEl.appendChild(navEl);
  mainEl.appendChild(imgSliderEl);

  const dotContEl = document.querySelector('#dot-cont');

  const leftArrowEl = document.querySelector('.arrow#left');
  leftArrowEl.addEventListener('click', () => {
    leftArrowHandler(imgSlider, dotContEl);
  });

  const rightArrowEl = document.querySelector('.arrow#right');
  rightArrowEl.addEventListener('click', () => {
    rightArrowHandler(imgSlider, dotContEl);
  });

  for (let i = 0; i < imgSlider.imgs.length; i++) {
    const dotEl = createDotBtn(i);

    dotEl.addEventListener('click', e => {
      dotHandler(e.target, imgSlider);
    });

    dotContEl.appendChild(dotEl);
  }

  updateDisplayImgEl(imgSlider.displayImg);

  setInterval(() => {
    rightArrowHandler(imgSlider, dotContEl);
  }, 5000);
});
