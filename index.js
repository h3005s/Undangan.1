const PASSWORD = "hs5";

function verifikasiPassword() {
    const inputPassword = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");
    const submitButton = document.getElementById("submitButton");

    if (inputPassword === PASSWORD) {
        window.location.href = "home.html";
    } else {
        errorMessage.style.display = "block";
        submitButton.disabled = true;
    }
}