var slideone = document.querySelector(".promo__radio--one");
var slidetwo = document.querySelector(".promo__radio--two");
var slidethree = document.querySelector(".promo__radio--three");

slidetwo.addEventListener("click", function () {
    document.body.classList.add("slide-two");
    document.body.classList.remove("slide-three");

});

slidethree.addEventListener("click", function () {
    document.body.classList.remove("slide-two");
    document.body.classList.add("slide-three");
});

slideone.addEventListener("click", function () {
    document.body.classList.remove("slide-two");
    document.body.classList.remove("slide-three");
});