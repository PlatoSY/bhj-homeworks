let elementTimer = document.getElementById('timer');
let timerCounter = setInterval(counter, 1000);
function counter() {
  elementTimer.textContent--;
  if (elementTimer.textContent <= 0) {
    clearInterval(timerCounter);
    alert('Вы победили в конкурсе!');
  }
}
// let timerNumber = Number(elementTimer.textContent);
// let date = new Date();
// let h = date.getHours();
// let m = date.getMinutes();
// let s = date.getSeconds();
// let dateString = h + ':' + m + ':' + s;
// elementTimer.textContent = dateString;

// let timerCounter = setInterval(counter, 1000);
// function counter() {
//   s--;
//   if (s == 0) {
//     clearInterval(timerCounter);
//     alert('Вы победили в конкурсе!');
//   }
// }
// let h = '00';
// let m = '00';
// let s = elementTimer.textContent;
// elementTimer.textContent = `${h}:${m}:${s}`;
// let countDown = new Date();
// elementTimer.textContent = countDown;
