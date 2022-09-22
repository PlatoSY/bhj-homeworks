const menuLinks = document.querySelectorAll('.menu__link');
// console.log(menuLink);
const menuItem = document.querySelectorAll('.menu__item');
// console.log(menuItem);

let links = Array.from(menuLinks);

for (let i = 0; i < links.length; i++) {
  let link = links[i];
  let item = link.closest('.menu__item');
  console.log(link);
  console.log(item);
  let subMenu = item.querySelector('.menu_sub');
  console.log(subMenu);
  link.onclick = function () {
    if (subMenu) {
      subMenu.classList.toggle('menu_active');
      return false;
    }
  };
}
