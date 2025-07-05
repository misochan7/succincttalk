const mascot = document.getElementById("mascot");
const speech = document.getElementById("speech");

const faces = ["mascot2.png", "mascot3.png"];
const phrases = [
  "Wanna prove something?",
  "I'm watching you.",
  "Feed me Ploof.",
  "Zzz... just kidding!",
  "0-knowledge, 100% cuteness",
  "Nyaa~ 💤"
];

let originalSrc = "mascot.png";

// キャラクリック → 表情＆セリフ更新（何度でも）
mascot.addEventListener("click", (e) => {
  e.stopPropagation(); // キャラクリックで body のイベントが走らないようにする
  const face = faces[Math.floor(Math.random() * faces.length)];
  mascot.src = face;

  const text = phrases[Math.floor(Math.random() * phrases.length)];
  speech.textContent = text;
});

// キャラ以外クリック → 元に戻す
document.body.addEventListener("click", (e) => {
  mascot.src = originalSrc;
  speech.textContent = "Click me!";
});
