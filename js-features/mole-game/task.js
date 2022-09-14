const successCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
// let holePosition = [
//   document.getElementById('hole1'),
//   document.getElementById('hole2'),
//   document.getElementById('hole3'),
//   document.getElementById('hole4'),
//   document.getElementById('hole5'),
//   document.getElementById('hole6'),
//   document.getElementById('hole7'),
//   document.getElementById('hole8'),
//   document.getElementById('hole9'),
// ];
function holePosition(n) {
  document.getElementById(`hole${n}`);
  return;
}

successCounter.textContent = 0;
lostCounter.textContent = 0;

for (let i = 1; i <= 9; i++) {
  let hole = holePosition(i);
  hole.onclick = holeHit;
  function holeHit() {
    if (hole.className.includes('hole_has-mole')) {
      successCounter.textContent = successCounter.textContent++;
    } else {
      lostCounter.textContent = lostCounter.textContent++;
    }
    if (successCounter.textContent == 5) {
      alert('Победа!');
    }
    if (lostCounter.textContent == 10) {
      alert('Поражение');
    }
  }
}
