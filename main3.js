document.addEventListener("DOMContentLoaded", function() {
    const akad = document.getElementById("akad");
    const resepsi = document.getElementById("resepsi");

    // Ketika animasi gambar muncul selesai
    resepsi.addEventListener("animationend", function() {
        setTimeout(function() {
            akad.style.animation = "menghilangKeKanan 1s forwards"; // Akad menghilang ke kanan
            resepsi.style.animation = "menghilangKeKiri 1s forwards"; // Resepsi menghilang ke kiri

            // Setelah animasi menghilang selesai, pindah ke halaman p4.html
            setTimeout(function() {
                window.location.href = "p4.html";
            }, 1000); // Beri waktu 1 detik untuk animasi menghilang
        }, 3000); // Beri jeda 1 detik setelah kedua gambar muncul
    });
});