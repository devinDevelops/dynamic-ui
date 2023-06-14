export default class ImgSlider {
  constructor(...imgs) {
    this.imgs = [...imgs];
    [this.displayImg] = imgs; // grabs the first index of imgs and assigns it to displayImg
  }

  setDisplayImg(index) {
    this.displayImg = this.imgs[index];
    return this.displayImg;
  }

  moveSliderRight() {
    // if at the last img in imgs, continue from the beginning of imgs
    if (this.displayImg == this.imgs.at(-1)) return this.setDisplayImg(0);

    const indexOfRightImg = this.imgs.indexOf(this.displayImg) + 1;
    return this.setDisplayImg(indexOfRightImg);
  }

  moveSliderLeft() {
    // if at the first img in imgs, continue from the end of imgs
    if (this.displayImg == this.imgs.at(0))
      return this.setDisplayImg(this.imgs.indexOf(this.imgs.at(-1)));

    const indexOfLefttImg = this.imgs.indexOf(this.displayImg) - 1;
    return this.setDisplayImg(indexOfLefttImg);
  }
}
