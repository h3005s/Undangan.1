function typeText(element, text, delay) {
    let index = 0;
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval);
            element.style.opacity = 1;
            if (element.id === 'p2') {
                showImages();
            }
        }
    }, delay);
}

function showImages() {
    document.getElementById('image1').style.opacity = 1;
    document.getElementById('image1').style.transform = 'translateX(0)'; 

    setTimeout(() => {
        document.getElementById('image2').style.opacity = 1;
        document.getElementById('image2').style.transform = 'scale(1)';  
    }, 500);

    setTimeout(() => {
        document.getElementById('image3').style.opacity = 1;
        document.getElementById('image3').style.transform = 'translateX(0)'; 
    }, 1000);

    // Tambahkan kode ini untuk pindah ke halaman p3.html
    setTimeout(() => {
        window.location.href = 'p3.html';
    }, 2000);  // Sesuaikan waktu sesuai kebutuhan
}

window.onload = () => {
    typeText(document.getElementById('p1'), 'Maha suci Allah SWT yang telah menciptakan makhluk-nya berpasang-pasangan', 0);
    setTimeout(() => {
        typeText(document.getElementById('p2'), 'Yaa Allah, Perkenankanlah kami menikahkan putra-putri kami.', 10);
    }, 1000); 
};