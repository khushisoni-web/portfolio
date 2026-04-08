const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('navMenu');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
});
