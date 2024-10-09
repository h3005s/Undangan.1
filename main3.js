window.onload = function() {
    const img1 = document.querySelector('.img1');
    const img2 = document.querySelector('.img2');
    const img3 = document.querySelector('.img3');

    // Animasi muncul
    setTimeout(() => {
        img1.style.transform = 'scale(1)';
        img2.style.transform = 'translateX(0)';
        img3.style.transform = 'translateX(0)';
        img1.style.opacity = '1';
        img2.style.opacity = '1';
        img3.style.opacity = '1';
    }, 100);

    // Animasi menghilang setelah 1 detik
    setTimeout(() => {
        img1.style.transform = 'scale(0)';
        img2.style.transform = 'translateX(-100%)';
        img3.style.transform = 'translateX(100%)';
        img1.style.opacity = '0';
        img2.style.opacity = '0';
        img3.style.opacity = '0';
    }, 2000);

    // Pindah ke halaman p4.html
    setTimeout(() => {
        window.location.href = 'p4.html';
    }, 4000);
};
