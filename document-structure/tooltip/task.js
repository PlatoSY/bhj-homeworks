const hasToolTips = Array.from(document.getElementsByClassName('has-tooltip'));

let toolTip = document.createElement('div');
toolTip.className = 'tooltip';

hasToolTips.forEach((element) => {
  element.addEventListener('click', (link) => {
    link.preventDefault();
    console.log(link);
    toolTip.classList.add('tooltip_active');
    toolTip.innerText = element.title;
    // let rect = element.getBoundingClientRect();
    // console.log(rect);
    element.insertAdjacentElement('afterend', toolTip);
  });
});
