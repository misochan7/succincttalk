const mascot = document.getElementById('mascot');
const speech = document.getElementById('speech');

const phrases = [
  "Ploof!",
  "Feed me! 🍜",
  "Nyaa~ 💤",
  "I'm watching you...",
  "Wanna prove something?",
  "Give me a nap!"
];

const altImages = ['mascot2.png', 'mascot3.png'];

mascot.addEventListener('click', () => {
  // ランダムセリフ
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  speech.textContent = phrase;

  // ランダム画像選択
  const newImage = altImages[Math.floor(Math.random() * altImages.length)];
  mascot.src = newImage;

  // 1秒後に戻す
  setTimeout(() => {
    mascot.src = 'mascot.png';
  }, 1000);
});
