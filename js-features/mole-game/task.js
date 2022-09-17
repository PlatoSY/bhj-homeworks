const successCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

function holePosition(index) {
  return document.getElementById(`hole${index}`);
}
for (let i = 1; i <= 9; i++) {
  let hole = holePosition(i);
  hole.onclick = holeHit;
  function holeHit() {
    console.log(`${i}`);
    if (hole.classList.contains('hole_has-mole')) {
      successCounter.textContent = +successCounter.textContent + 1;
    } else {
      lostCounter.textContent = +lostCounter.textContent + 1;
    }
    if (successCounter.textContent == 10) {
      alert('Победа!');
      successCounter.textContent = 0;
      lostCounter.textContent = 0;
    }
    if (lostCounter.textContent == 5) {
      alert('Поражение');
      successCounter.textContent = 0;
      lostCounter.textContent = 0;
    }
  }
}
