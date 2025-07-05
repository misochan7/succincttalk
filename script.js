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
