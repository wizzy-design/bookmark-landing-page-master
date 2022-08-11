// Variables
const dropdown1 = document.querySelectorAll(".dropdown")[0];
const dropdown2 = document.querySelectorAll(".dropdown")[1];
const dropdown3 = document.querySelectorAll(".dropdown")[2];
const dropdown4 = document.querySelectorAll(".dropdown")[3];

// Dropdown arrows
const firstArrow = document.querySelectorAll(".drop-arrow svg")[0];
const secondArrow = document.querySelectorAll(".drop-arrow svg")[1];
const thirdArrow = document.querySelectorAll(".drop-arrow svg")[2];
const fourthArrow = document.querySelectorAll(".drop-arrow svg")[3];

// Answers
const firstAnswer = document.querySelectorAll(".answer")[0];
const secondAnswer = document.querySelectorAll(".answer")[1];
const thirdAnswer = document.querySelectorAll(".answer")[2];
const fourthAnswer = document.querySelectorAll(".answer")[3];

// Navigation bar 
const burger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#nav-links");
const socials = document.querySelector(".nav-socials");

// Contact Us
const email = document.querySelector("#input1");
const contact = document.querySelector("#input2");
const invalid = document.querySelector(".invalid");
const verification = document.querySelector(".verification");

// FAQs arrow actions and displays
firstArrow.addEventListener, dropdown1.addEventListener("click", () => {
    firstAnswer.classList.toggle("answer1");
    firstArrow.classList.toggle("rotate-arrow");
});

secondArrow.addEventListener, dropdown2.addEventListener("click", () => {
    secondAnswer.classList.toggle("answer2");
    secondArrow.classList.toggle("rotate-arrow");
});

thirdArrow.addEventListener, dropdown3.addEventListener("click", () => {
    thirdAnswer.classList.toggle("answer3");
    thirdArrow.classList.toggle("rotate-arrow");
});

fourthArrow.addEventListener, dropdown4.addEventListener("click", () => {
    fourthAnswer.classList.toggle("answer4");
    fourthArrow.classList.toggle("rotate-arrow");
});

// contact.addEventListener("click", () => {
//     let input = email.value;
//     var validRegex =
//       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (input.match(validRegex)) {
//       verification.textContent = "";
//       email.value = "";
//       email.className = "valid-email";
//       verification.className = "verification";
//       return true;
//     } else {
//       email.className = "invalid-email";
//       verification.textContent = "Whoops, make sure it's an email";
//       verification.className = "verification-active";
//       return false;
//     }
// });


