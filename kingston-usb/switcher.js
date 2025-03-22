const options = document.querySelectorAll(".color-switcher .option");
const kingston = document.getElementById("kingston");

/**
 *  looping through color options
 *    and accesing to styling properties
 *       when is clicked
 */

options.forEach((option) => {
  const color = option.getAttribute("data-color");
  option.style.setProperty("--background-color", color);

  option.addEventListener("click", () => {
    kingston.style.setProperty("--background-color", color);
  });
});
