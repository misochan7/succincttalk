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

// キャラをクリックで表情とセリフを変更
mascot.addEventListener("click", () => {
  const face = faces[Math.floor(Math.random() * faces.length)];
  mascot.src = face;

  const text = phrases[Math.floor(Math.random() * phrases.length)];
  speech.textContent = text;
});

// キャラ以外のクリックで元に戻す
document.body.addEventListener("click", (e) => {
  if (e.target !== mascot && e.target !== speech) {
    mascot.src = originalSrc;
    speech.textContent = "Click me!";
  }
});
