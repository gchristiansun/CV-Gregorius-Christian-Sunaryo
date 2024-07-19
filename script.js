window.addEventListener('scroll', function() {
var box = document.querySelector('header');
if (window.scrollY > 450) {
    box.classList.add('hidden');
} else {
    box.classList.remove('hidden');
}
});