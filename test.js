document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');

    // Mendapatkan jumlah like dari Local Storage
    let count = localStorage.getItem('likeCount') || 0;
    likeCount.textContent = `${count} Likes`;

    likeButton.addEventListener('click', () => {
        count++;
        likeCount.textContent = `${count} Likes`;

        // Menyimpan jumlah like ke Local Storage
        localStorage.setItem('likeCount', count);
    });
});
