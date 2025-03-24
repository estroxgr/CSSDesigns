const colors = document.querySelectorAll(".color");
const keyboard = document.getElementById("keyboard");

colors.forEach((btn) => {
  btn.onclick = () => {
    let color = btn.dataset.theme;
    keyboard.style.backgroundColor = color;
  };
});
