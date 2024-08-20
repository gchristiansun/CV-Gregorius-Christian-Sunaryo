window.addEventListener('scroll', function() {
var header = document.querySelector('header');
if (window.scrollY > 0) {
    header.classList.add('hidden');
} else {
    header.classList.remove('hidden');
}
});

window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 400) {
        nav.classList.add('hidden-nav');
    } else {
        nav.classList.remove('hidden-nav')
    }
    });


document.addEventListener('DOMContentLoaded', (event) => {
    const typingElement = document.getElementById('typing');
    const constantElement = document.getElementById('constant');
    const constant2Element = document.getElementById('constant2');
    const cover = document.getElementById('cover');
    const image = document.getElementById('image')
    const textArray = ["Welcome to my website!", "I'm Gregorius Christian Sunaryo"];
    let arrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[arrayIndex].length) {
            typingElement.textContent += textArray[arrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            arrayIndex = (arrayIndex + 1) % textArray.length;
            setTimeout(type, 1000);
        }
    }
    
    function layoutChange() {
        if (window.innerWidth < 550) {
            constantElement.style.display = 'none';
            constant2Element.style.display = 'none';
            image.style.display = 'none'
            type();
            } 
        else {
            typingElement.style.display = 'none';
            cover.style.display = 'none';
            image.style.display = 'block'
            }
        }

    layoutChange()

    let initialOrientation = window.orientation;

    window.addEventListener('orientationchange', function() {
        let currentOrientation = window.orientation;
        
        if (currentOrientation !== initialOrientation) {
            layoutChange();
            location.reload();
            initialOrientation = currentOrientation;
        }
    });
    
})


