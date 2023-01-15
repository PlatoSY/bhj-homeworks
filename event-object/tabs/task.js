let tabs = Array.from(document.getElementsByClassName('tab'));
let tabContent = Array.from(document.getElementsByClassName('tab__content'));

function toggleTab(event) {
  let target = event.target;
  document.querySelectorAll('.tab').forEach((element) => {
    element.classList.remove('tab_active');
  });
  document.querySelectorAll('.tab__content').forEach((element) => {
    element.classList.remove('tab__content_active');
  });

  target.classList.add('tab_active');

  let index = tabs.indexOf(document.querySelector('.tab_active'));
  tabContent[index].classList.add('tab__content_active');
}

tabs.forEach((element) => {
  element.addEventListener('click', toggleTab);
});
