document.addEventListener("DOMContentLoaded", function() {
    const gambar = document.getElementById("gambar");
    const tombol = document.querySelector(".btn");

    gambar.addEventListener("animationend", function() {
        tombol.style.display = "block"; // Munculkan tombol setelah animasi gambar selesai
    });
});