const mascot = document.getElementById('mascot');
const speech = document.getElementById('speech');

const phrases = [
  "Hi! I'm alive!",
  "Feed me!! 🍙",
  "Wanna prove something?",
  "Ploof!",
  "I'm sleepy... 😪",
  "Let's be friends!",
];

mascot.addEventListener('click', () => {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  speech.textContent = phrase;

  // 目をキラキラにして1秒後に戻す
  mascot.src = "mascot_sparkle.png";
  setTimeout(() => {
    mascot.src = "mascot_default.png";
  }, 1000);
});
