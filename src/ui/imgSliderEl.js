import arrowIMG from '../icons/arrow.png';
import selectedDotIMG from '../icons/selected.png';
import unselectedDotIMG from '../icons/unselected.png';

function rmSelectedDot() {
  const priorSelectedDot = document.querySelector('.dot.selected');
  priorSelectedDot.classList.remove('selected');
  priorSelectedDot.src = unselectedDotIMG;
  priorSelectedDot.alt = 'Unselected dot';
}

function setSelectedDot(newSelectedDot) {
  newSelectedDot.classList.add('selected');
  newSelectedDot.src = selectedDotIMG;
  newSelectedDot.alt = 'Selected dot';
}

export function leftArrowHandler(imgSlider, dotContEl) {
  const newDisplayImg = imgSlider.moveSliderLeft();
  const priorSelectedDot = document.querySelector('.dot.selected');
  let priorSelectedDotIndex = priorSelectedDot.getAttribute('data-dot-index');
  let newSelectedDot = document.querySelector(
    `[data-dot-index="${--priorSelectedDotIndex}"]`
  );
  const dotContElFistChild = dotContEl.children[0].children[0];
  const dotContElLastChild =
    dotContEl.children[dotContEl.children.length - 1].children[0];

  // if at the left-most dot, make the last dot the selected dot
  if (dotContElFistChild === priorSelectedDot)
    newSelectedDot = dotContElLastChild;

  rmSelectedDot();
  setSelectedDot(newSelectedDot);
  updateDisplayImgEl(newDisplayImg);
}

export function rightArrowHandler(imgSlider, dotContEl) {
  const newDisplayImg = imgSlider.moveSliderRight();
  const priorSelectedDot = document.querySelector('.dot.selected');
  let priorSelectedDotIndex = priorSelectedDot.getAttribute('data-dot-index');
  let newSelectedDot = document.querySelector(
    `[data-dot-index="${++priorSelectedDotIndex}"]`
  );
  const dotContElFistChild = dotContEl.children[0].children[0];
  const dotContElLastChild =
    dotContEl.children[dotContEl.children.length - 1].children[0];

  // if at the right-most dot, make the first dot the selected dot
  if (dotContElLastChild === priorSelectedDot)
    newSelectedDot = dotContElFistChild;

  rmSelectedDot();
  setSelectedDot(newSelectedDot);
  updateDisplayImgEl(newDisplayImg);
}

export function dotHandler(newSelectedDot, imgSlider) {
  rmSelectedDot();
  setSelectedDot(newSelectedDot);

  const imgIndex = newSelectedDot.getAttribute('data-dot-index');
  const newDisplayImg = imgSlider.setDisplayImg(imgIndex);
  updateDisplayImgEl(newDisplayImg);
}

export function updateDisplayImgEl(newDisplayImg) {
  document.querySelector('#display-img').src = newDisplayImg;
}

export function createDotBtn(index) {
  const dotEl = document.createElement('button');
  dotEl.classList.add('dot-btn');

  const firstDot = index === 0;

  dotEl.innerHTML = `              
                <img
                  class="${firstDot ? 'selected ' : ''}dot"
                  data-dot-index="${index}"
                  src="${firstDot ? selectedDotIMG : unselectedDotIMG}"
                  alt="${firstDot ? 'Selected' : 'Unselected'} dot" />`;

  return dotEl;
}

export default function createImgSliderEl() {
  const imgSliderEl = document.createElement('div');
  imgSliderEl.id = 'slider-cont';

  imgSliderEl.innerHTML = `
          <div id="img-cont">
            <img id="display-img" alt="Travel photo" />
          </div>
          <div id="slider-ctls">
            <button class="arrow-btn">
              <img
                class="arrow"
                id="left"
                src="${arrowIMG}"
                alt="Left slider arrow" />
            </button>
            <div id="dot-cont">

            </div>
            <button class="arrow-btn">
              <img
                class="arrow"
                id="right"
                src="${arrowIMG}"
                alt="Right slider arrow" />
            </button>
          </div>`;

  return imgSliderEl;
}
