function makeItGood(pass) {
    var result = "";
    for (let x of pass) {
        if (x >= 'A' && x <= 'Z') result += x;
    }
    for (let x of pass) {
        if (x >= 'a' && x <= 'z') result += x;
    }
    for (let x of pass) {
        if (x >= '0' && x <= '9') result += x;
    }
    for (let x of pass) {
        if (!(x >= 'A' && x <= 'Z') && !(x >= 'a' && x <= 'z') && !(x >= '0' && x <= '9')) result += x;
    }
    return result;
}
function generatePassword() {
    var length = 12;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_+<>,.?";
    var password = "";
    for (var i = 0; i < length; i++) {
        var charIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(charIndex);
    }
    let display = document.getElementById("passwordDisplay");
    let head = document.getElementById("head");
    password = makeItGood(password);
    display.textContent = password;
    head.textContent = "Your Password can be..!"
}
