document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        validateCode();
    }
});

function validateCode() {
    const correctCode = "BGH1-TASD";
    const userCode = document.getElementById("user-input").value;
    const message = document.getElementById("message");
    
    if (userCode === correctCode) {
        message.style.color = "green";
        message.textContent = " Hesap doğrrulandı!";
    } else {
        message.style.color = "red";
        message.textContent = "Hatalı doğrulama kodu!";
    }
}

