const texts = [
  "Frontend Developer 💻",
  "Python Programmer 🐍",
  "Electronics Enthusiast 🔌",
  "Embedded System Explorer 🔧",
  "Full Stack Learner 🚀"
];

let count = 0;
let index = 0;

function type() {
  const currentText = texts[count];
  const letter = currentText.slice(0, ++index);
  document.getElementById("typewriter").textContent = letter;

  if (letter.length === currentText.length) {
    count = (count + 1) % texts.length;  // Loop through texts
    index = 0;
    setTimeout(type, 1500);              // Wait before typing next
  } else {
    setTimeout(type, 100);               // Typing speed
  }
}

document.addEventListener("DOMContentLoaded", type);

