let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let triangle = document.querySelector(".triangle");
let user = document.querySelector(".user");
let machine = document.querySelector(".machine");
let random = Math.floor(Math.random() * 3);
let winModal = document.querySelector(".win-modal");
let winner = document.querySelector(".winner");
let play = document.querySelector(".play");
let ruleModal = document.querySelector(".rule-modal");
let ruleimg = document.querySelector(".rule-img");
let scoreval = document.getElementById("score");
let ruleBtn = document.querySelector(".btn-rule");
let close = document.querySelector(".close");

let score = JSON.parse(localStorage.getItem("sc"));

if (score) {
  scoreval.innerText = score;
}

let count = 0;

con.forEach((element, index) => {
  element.addEventListener("click", () => {
    user.style.opacity = "1";
    triangle.style.display = "none";
    con.forEach((item) => {
      item.style.display = "none";
    });

    element.style.display = "block";
    element.classList.add("show");
    setTimeout(() => {
      machine.style.opacity = "1";
      setTimeout(() => {
        computer[random].style.display = "block";
        computer[random].classList.add("right");
      }, 1000);
    }, 500);

    setTimeout(() => {
      if (index == random) {
        winModal.style.display = "grid";
        winner.innerText = "Match Draw";
      } else if (
        (index == 0 && random == 2) ||
        (index == 1 && random == 0) ||
        (index == 2 && random == 1)
      ) {
        winModal.style.display = "grid";
        winner.innerText = "You Win";
        count = score;
        count++;
        scoreval.innerText = count;
        localStorage.setItem("sc", JSON.stringify(count));
      } else {
        winModal.style.display = "grid";
        winner.innerText = "You lose";
      }
    }, 1500);
  });
});

play.addEventListener("click", () => {
  window.location.reload();
});

ruleBtn.addEventListener("click", () => {
  ruleModal.style.display = "flex";
  setTimeout(() => {
    ruleimg.style.transform = "translateY(0)";
  }, 400);
});

close.addEventListener("click", () => {
  ruleimg.style.transform = "translateY(-200%)";
  setTimeout(() => {
    ruleModal.style.display = "none";
  }, 300);
});
