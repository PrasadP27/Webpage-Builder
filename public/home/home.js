window.addEventListener("scroll", function () {
    var navbar = document.querySelector("header");
    navbar.classList.toggle("change", window.scrollY > 0);
});