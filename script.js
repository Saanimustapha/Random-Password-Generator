const passwordField = document.querySelector(".password_field");
const passwordButton = document.querySelector(".generate_button");
const copyImage = document.querySelector(".copy_icon")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!/><#$^&*()+_-{}[]";

const allChars = upperCase + lowerCase + numbers + symbols;


function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    };

    passwordField.value = password;
};

function copyPassword() {
    const password = passwordField.value;
    if (!password) return;

    navigator.clipboard.writeText(password)
        .then(() => {
            alert("Password copied to clipboard! ✅");
        })
        .catch((err) => {
            console.error("Failed to copy password: ", err);
        });
}


passwordButton.addEventListener("click",(e)=>{
    generatePassword(); 
});

copyImage.addEventListener("click",(e)=>{
    copyPassword();
})




