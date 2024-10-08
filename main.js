window.onload = function() {
    const images = document.querySelectorAll('.animated-image');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('show');
        }, index * 500); 
    });

  
    const totalDelay = (images.length * 500) + 1000;  

    setTimeout(() => {
        window.location.href = "p2.html";
    }, totalDelay);
};
