const textBlocks = Array.from(document.getElementsByClassName('rotator__case'));

function textChange() {
  const blockActive = document.querySelector('.rotator__case_active');
  const blockNext = blockActive.nextElementSibling;

  console.log(blockActive);
  console.log(blockNext);

  let activeClassIndex = textBlocks.findIndex((item) =>
    item.classList.contains('rotator__case_active')
  );

  console.log(activeClassIndex);

  blockActive.classList.remove('rotator__case_active');

  if (activeClassIndex === textBlocks.length - 1) {
    textBlocks[0].classList.add('rotator__case_active');
  } else {
    blockNext.classList.add('rotator__case_active');
  }
}

setInterval(textChange, 1000);
