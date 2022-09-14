let clickCount = document.getElementById('clicker__counter');
let cookieImg = document.getElementById('cookie');
function countrise() {
  let countRise = clickCount.textContent++;
  if (cookieImg.width === 200) {
    cookieImg.width = 220;
  } else {
    cookieImg.width = 200;
  }
}
cookieImg.onclick = countrise;
