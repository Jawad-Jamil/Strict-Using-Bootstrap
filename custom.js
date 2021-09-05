let bar = document.querySelector("i.fas.fa-align-left")
let menus_wrapper = document.querySelector(".menus_wrapper")

bar.addEventListener("click", () => {
    menus_wrapper.classList.toggle("lefting")
})