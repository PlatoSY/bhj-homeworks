const widget = Array.from(document.getElementsByClassName('chat-widget'));
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');

let currentDate = new Date();
let hours = (currentDate.getHours() < 10 ? '0' : '') + currentDate.getHours();
let minutes =
  (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();

widget.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.add('chat-widget_active');
  });
});

input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter' && input.value !== '') {
    const userText = input.value.trim();

    messages.innerHTML += `
		<div class="message message_client">
			<div class="message__time">${hours}:${minutes}</div>
			<div class="message__text">${userText}</div>
		</div>
		`;

    input.value = '';

    setTimeout(() => {
      botAnswer(getRandomAnswers());
    }, 1000);
  }
});

function getRandomAnswers() {
  let botPhrazes = [
    'Остань',
    'Оставьте меня в покое!',
    'У меня выходной!',
    'Время обеда, попробуйте попозже',
    'Задолбали уже',
    'Ммм...',
  ];
  let botRandomIndex = Math.floor(Math.random() * botPhrazes.length);
  const botRandomPhraze = botPhrazes[botRandomIndex];
  return botRandomPhraze;
}

function botAnswer(phraze) {
  messages.innerHTML += `
		<div class="message">
			<div class="message__time">${hours}:${minutes}</div>
			<div class="message__text">${phraze}</div>
		</div>
		`;
}
