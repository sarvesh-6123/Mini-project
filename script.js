function generatePassword() {
    var length = 10;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]:;<>,.?/";
    var password = "";
    for (var i = 0; i < length; i++) {
        var charIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(charIndex);
    }
    document.getElementById("passwordDisplay").textContent = password;
}
