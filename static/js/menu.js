const burger = document.querySelector(".burger");
const menu = document.querySelector(".top__menu");

burger.onclick = function() {
	burger.classList.toggle("closed");
	menu.classList.toggle("opened");
};
