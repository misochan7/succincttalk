const mascot = document.getElementById("mascot");
const speech = document.getElementById("speech");

const faces = ["mascot2.png", "mascot3.png"];
const phrases = [
  "Prove the world’s software.",
  "Need a zk boost? I got SP1!",
  "Truth, not trust.",
  "Building programmable truth!",
  "Powered by SP1 & PROVE token.",
  "Zero‑knowledge made easy.",
  "Auctioning proofs in real‑time!",
  "Stake PROVE, secure the net!",
  "Rust → SP1 → zk proof!",
  "Proofs by provers, speed by design."
];

let originalSrc = "mascot.png";
let currentFace = "";
let currentPhrase = "";

// キャラクリック → 表情＆セリフ更新
mascot.addEventListener("click", (e) => {
  e.stopPropagation(); // 背景クリックと干渉しないようにする

  // 前回と同じ画像を避ける
  let newFace;
  do {
    newFace = faces[Math.floor(Math.random() * faces.length)];
  } while (newFace === currentFace);
  mascot.src = newFace;
  currentFace = newFace;

  // 前回と同じセリフを避ける
  let newPhrase;
  do {
    newPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  } while (newPhrase === currentPhrase);
  speech.textContent = newPhrase;
  currentPhrase = newPhrase;
});

// 背景クリック → 初期状態に戻す
document.body.addEventListener("click", () => {
  mascot.src = originalSrc;
  speech.textContent = "Click me!";
  currentFace = "";
  currentPhrase = "";
});
