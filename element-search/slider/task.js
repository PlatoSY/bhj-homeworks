const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const nextArrow = document.querySelector('.slider__arrow_next');
const previousArrow = document.querySelector('.slider__arrow_prev');

console.log(sliderItem);
let sliderIndex = sliderItem.findIndex(activeSlider);

function activeSlider(slider) {
  if (slider.className.includes('slider__item_active')) {
    return slider;
  }
}
console.log(sliderIndex);

function slide(newSlide) {
  sliderItem[sliderIndex].classList.remove('slider__item_active');
  sliderItem[newSlide].classList.add('slider__item_active');
  sliderIndex = newSlide;
}

console.log(nextArrow);
console.log(previousArrow);

nextArrow.onclick = function () {
  let newSlide = sliderIndex + 1;
  if (newSlide >= sliderItem.length) {
    newSlide = 0;
  }
  slide(newSlide);
};

previousArrow.onclick = function () {
  let newSlide = sliderIndex - 1;
  if (newSlide < 0) {
    newSlide = sliderItem.length;
  }
  slide(newSlide);
};
