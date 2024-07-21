window.addEventListener('scroll', function() {
var header = document.querySelector('header');
if (window.scrollY > 450) {
    header.classList.add('hidden');
} else {
    header.classList.remove('hidden');
}
});


document.addEventListener('DOMContentLoaded', (event) => {
    const typingElement = document.getElementById('typing');
    const constantElement = document.getElementById('constant');
    const constant2Element = document.getElementById('constant2');
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
        if (window.innerWidth < 470) {
            constantElement.style.display = 'none';
            constant2Element.style.display = 'none';
            type();
            } 
        else {
            typingElement.style.display = 'none';
            }
        }

    // window.addEventListener('resize', function() { 
    //     layoutChange();
    //     location.reload(true);
    // })

    layoutChange()

    let initialWidth = window.innerWidth;
    let initialHeight = window.innerHeight;

    window.addEventListener('resize', function() {
        // Periksa perubahan ukuran jendela
        let currentWidth = window.innerWidth;
        let currentHeight = window.innerHeight;
        
        if (Math.abs(currentWidth - initialWidth) > 10 || Math.abs(currentHeight - initialHeight) > 10) {
            // Jika ukuran berubah lebih dari 10 piksel, jalankan fungsi
            layoutChange();
            location.reload();
            
            // Perbarui ukuran awal jendela
            initialWidth = currentWidth;
            initialHeight = currentHeight;
        }
    });
})