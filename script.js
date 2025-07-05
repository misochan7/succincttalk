// script.js
const mascot = document.getElementById("mascot");
const speech = document.getElementById("speech");

const faces = ["mascot2.png", "mascot3.png"];
const phrases = [
  "Wanna prove something?",
  "I'm watching you.",
  "Feed me Ploof.",
  "Zzz... just kidding!",
  "0-knowledge, 100% cuteness"
];

let originalSrc = "mascot.png";
let isTalking = false;

mascot.addEventListener("click", () => {
  if (isTalking) return;

  isTalking = true;

  // 表情変更
  const face = faces[Math.floor(Math.random() * faces.length)];
  mascot.src = face;

  // 吹き出し表示
  const text = phrases[Math.floor(Math.random() * phrases.length)];
  speech.textContent = text;

  // 表情は戻さない（次のクリックまで維持）
});

document.body.addEventListener("click", (e) => {
  // mascot以外クリックで元に戻す
  if (e.target !== mascot && isTalking) {
    mascot.src = originalSrc;
    speech.textContent = "Click me!";
    isTalking = false;
  }
});
