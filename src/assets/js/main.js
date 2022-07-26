
/*=============== STYLE SWITCHER ===============*/
const styleSwitcherToggle = document.querySelector(".style__switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style__switcher").classList.toggle("open");
})