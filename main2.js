document.addEventListener("DOMContentLoaded", function() {
    const p1 = document.querySelector(".p1");
    const p2 = document.querySelector(".p2");
    const p3 = document.querySelector(".p3");
    const gambar = document.querySelectorAll(".gambar");

    // Fungsi untuk mengatur animasi gambar
    p3.addEventListener("animationend", function() {
        gambar[0].style.display = "block"; // Tampilkan gambar Puti
        gambar[0].style.animation = "munculDariKanan 0.5s forwards"; // Mulai animasi gambar Puti

        gambar[0].addEventListener("animationend", function() {
            gambar[1].style.display = "block"; // Tampilkan gambar Cincin
            gambar[1].style.animation = "membesar 0.5s forwards"; // Mulai animasi gambar Cincin
            
            gambar[1].addEventListener("animationend", function() {
                gambar[2].style.display = "block"; // Tampilkan gambar Fauzan
                gambar[2].style.animation = "munculDariKiri 0.5s forwards"; // Mulai animasi gambar Fauzan

                // Setelah animasi Fauzan selesai, tunggu 1 detik, lalu pindah halaman
                gambar[2].addEventListener("animationend", function() {
                    setTimeout(function() {
                        window.location.href = "p3.html"; // Pindah ke halaman p3.html
                    }, 1000); // Tunggu 1 detik
                });
            });
        });
    });
});