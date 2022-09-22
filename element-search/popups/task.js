const closeButtons = document.querySelectorAll('.modal__close');
const modalMain = document.getElementById('modal_main');
const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success');

let arrClose = Array.from(closeButtons);
function modalClose() {
  arrClose.forEach(
    (i) =>
      (i.onclick = function () {
        modalMain.classList.remove('modal_active');
        let modalActive = this.closest('.modal');
        modalActive.classList.remove('modal_active');
      })
  );
}
modalClose();

showSuccess.onclick = function () {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
};
