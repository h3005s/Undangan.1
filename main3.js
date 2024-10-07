document.addEventListener("DOMContentLoaded", function() {
    const akad = document.getElementById("akad");
    const resepsi = document.getElementById("resepsi");

    
    resepsi.addEventListener("animationend", function() {
        setTimeout(function() {
            akad.style.animation = "menghilangKeKanan 1s forwards"; 
            resepsi.style.animation = "menghilangKeKiri 1s forwards"; 

            
            setTimeout(function() {
                window.location.href = "p4.html";
            }, 1000); 
        }, 3000); 
    });
});
