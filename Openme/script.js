const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Happy motmot bilisan mo na mwa mwa";
  gif.src =
    "https://media1.tenor.com/m/44_0YxIBj2EAAAAC/tonton-cute.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Tuloy tayo bebe?";
  gif.src =
    "https://media.tenor.com/-J5oFODhI8wAAAAi/bleh-cat.gif";
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
