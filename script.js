const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
    "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1",
    "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",",
    "|", ":", ";", "<", ">", ".", "?", "/"];

let pwdElOne = document.getElementById("pwd-one")
let pwdElTwo = document.getElementById("pwd-two")


function generatePassword() {
    pwdElOne.textContent = " "
    pwdElTwo.textContent = " "
    for (let i = 0; i < 16; i++) {
        pwdElOne.textContent += characters[Math.floor(Math.random() * characters.length)]
        pwdElTwo.textContent += characters[Math.floor(Math.random() * characters.length)]
    }
}