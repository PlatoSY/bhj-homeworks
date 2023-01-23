const checkboxes = Array.from(document.querySelectorAll('.interest__check'));

let topCheckBoxes = [];

checkboxes.forEach((item) => {
  if (!item.closest('.interests_active')) {
    topCheckBoxes.push(item);
  }
});

topCheckBoxes.forEach((item) => {
  item.addEventListener('change', () => {
    const containerForCheckBoxesGroup = item.closest('.interest');
    const ulContainer = containerForCheckBoxesGroup.querySelector('ul');
    const innerCheckBoxes = Array.from(ulContainer.querySelectorAll('input'));

    innerCheckBoxes.forEach((elem) => {
      if (!elem.checked) {
        elem.checked = true;
      } else {
        elem.checked = false;
      }
    });
  });
});
