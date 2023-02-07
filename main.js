"use strict";

//select button
//turn button into active state on click
//register which button was selected;
//show thank you card on click, hide main card
//display button selected

const submitBtn = document.querySelector(".submit");
const thankYouCard = document.querySelector(".thank-you-card");
const mainCard = document.querySelector(".main-card");
const rates = document.querySelectorAll(".rating-circle");
const rating = document.getElementById("rating");

// credit to https://www.youtube.com/watch?v=cQnUopEeZgw
rates.forEach((rate) => {
  rate.addEventListener("click", function () {
    rating.innerHTML = rate.innerHTML;
  });
});

submitBtn.addEventListener("click", function () {
  thankYouCard.classList.remove("hidden");
});
