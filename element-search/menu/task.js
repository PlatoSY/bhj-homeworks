const menuLinks = document.querySelectorAll('.menu__link');
// console.log(menuLink);
const menuItem = document.querySelectorAll('.menu__item');
// console.log(menuItem);

let links = Array.from(menuLinks);
console.log(link);
function menuToggle() {
  links.forEach(
    (i) =>
      (i.onclick = function () {
        let closestMenu = i.closest('.menu__item');
        // console.log(closestMenu);
        if (closestMenu.classList('menu_sub')) {
          closestMenu.classList.toggle('menu_active');
        }
      })
  );
}
menuToggle();
// for (let i = 0; i < menuLinks.length; i++) {
//   let menuLink = menuLinks[i];
//   console.log(menuLink);
// }
