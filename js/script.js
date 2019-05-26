var link = document.querySelector(".address__btn");
var feedback = document.querySelector(".feedback-popup");
var overlay = document.querySelector(".feedback-overlay");
var close = feedback.querySelector(".feedback-popup__close");
var form = feedback.querySelector("form");
var name = feedback.querySelector("[name=login]");
var email = feedback.querySelector("[name=email]");
var slideOne = document.querySelector(".promo__radio--one");
var slideTwo = document.querySelector(".promo__radio--two");
var slideThree = document.querySelector(".promo__radio--three");

slideTwo.addEventListener("click", function () {
    document.body.classList.add("slide-two");
    document.body.classList.remove("slide-three");

});

slideThree.addEventListener("click", function () {
    document.body.classList.remove("slide-two");
    document.body.classList.add("slide-three");
});

slideOne.addEventListener("click", function () {
    document.body.classList.remove("slide-two");
    document.body.classList.remove("slide-three");
});

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.remove("visually-hidden"); 
    feedback.classList.add("feedback-animation");
    overlay.classList.remove("visually-hidden");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("visually-hidden");
    feedback.classList.remove("feedback-animation");
    feedback.classList.remove("feedback-error");
    overlay.classList.add("visually-hidden");
});

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
        evt.preventDefault();
        feedback.classList.add("feedback-error");
    } 
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (feedback.classList.contains("visually-hidden") === false) {
            feedback.classList.add("visually-hidden");
            feedback.classList.remove("feedback-animation");
            feedback.classList.remove("feedback-error");
            overlay.classList.add("visually-hidden");
        }
    }
});
