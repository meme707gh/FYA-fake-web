const dropdownBtn = document.getElementById("nav-icon");
const dropdownMenu = document.getElementById("dropdown-menu")

dropdownBtn.addEventListener("click", () => {
    dropdownBtn.classList.toggle("open")
    dropdownMenu.classList.toggle("open")
})
