let blocks = Array.from(document.getElementsByClassName('reveal'));
console.log(blocks);

window.addEventListener('scroll', function () {
  for (const block of blocks) {
    const { top, bottom } = block.getBoundingClientRect();

    if (top < this.window.innerHeight) {
      block.classList.add('reveal_active');
    }
    if (bottom < 0 || top > this.window.innerHeight) {
      block.classList.remove('reveal_active');
    }
  }
});
