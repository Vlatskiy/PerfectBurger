//mainmenu
const openMenu = document.querySelector(".open__menu");
const menuButton = document.querySelector(".header__menu");
const closeIcon = document.querySelector(".close-icon");

menuButton.addEventListener("click", function(){
    openMenu.style.display = "flex";
})
closeIcon.addEventListener("click", function(){
    openMenu.style.display = "none";
})
