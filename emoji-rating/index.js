const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

starsEl.forEach((star, index) => {
  star.addEventListener("click", () => {
    for (let i = 0; i <= index; i++) {
      starsEl[i].classList.add("active");
    }
    for (let i = index + 1; i < starsEl.length; i++) {
      starsEl[i].classList.remove("active");
    }

    emojisEl.forEach((emoji, emojiIndex) => {
      if (emojiIndex === index) {
        emoji.style.color = colorsArray[index];
      } else {
        emoji.style.color = "inherit";
      }
    });
  });
});
