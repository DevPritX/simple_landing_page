const menuBtn = document.querySelector(".menubtn")

const responsiveMenu = document.querySelector(".responsive-menu")

const body = document.querySelector("body")

menuBtn.addEventListener("click", () =>{
    responsiveMenu.classList.toggle("show-menu")
    body.classList.toggle("no-scroll")
})

