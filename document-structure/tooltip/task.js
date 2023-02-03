const hasToolTips = Array.from(document.getElementsByClassName('has-tooltip'));

let toolTip = document.createElement('div');
toolTip.className = 'tooltip';

hasToolTips.forEach((element) => {
  element.addEventListener('click', (link) => {
    link.preventDefault();

    function createTooltip() {
      toolTip.classList.add('tooltip_active');
      toolTip.innerText = element.title;
      let { top, left } = element.getBoundingClientRect();
      toolTip.style.left = left + 'px';
      toolTip.style.top = top + 22 + 'px';
      element.insertAdjacentElement('beforeBegin', toolTip);
    }

    if (
      link.target.previousElementSibling.classList.contains('tooltip_active')
    ) {
      toolTip.remove();
    } else {
      createTooltip();
    }
  });
});
