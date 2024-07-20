window.addEventListener('scroll', function() {
var header = document.querySelector('header');
if (window.scrollY > 450) {
    header.classList.add('hidden');
} else {
    header.classList.remove('hidden');
}
});