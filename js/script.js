var dropdownBtn = document.querySelector(".dropbtn");
var dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", function() {
    dropdownContent.classList.toggle("show");
});

window.addEventListener("click", function(event) {
    if (!event.target.matches(".dropbtn")) {
        var openDropdown = document.querySelector(".dropdown-content.show");
        if (openDropdown) {
            openDropdown.classList.remove("show");
        }
    }
});