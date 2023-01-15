const dropdownLinks = Array.from(document.querySelectorAll('.dropdown__link'));
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
const menu = document.getElementsByClassName('dropdown__value')[0];
const dropdownList = document.querySelector('.dropdown__list');

menu.addEventListener('click', menuToggle);
function menuToggle() {
  dropdownList.classList.toggle('dropdown__list_active');
}

function titleChange(i) {
  i.preventDefault();
  let title = i.target;
  menu.textContent = title.textContent;
  dropdownList.classList.remove('dropdown__list_active');
  return false;
}

dropdownItems.forEach((i) => {
  i.addEventListener('click', titleChange);
});
 