// script.js
const textElement = document.getElementById("typewriter");
const textToType = "this is the typing demo"
let textIndex = 0;

function typeText() {
    if (textIndex < textToType.length) {
        textElement.textContent += textToType.charAt(textIndex);
        textIndex++;
        setTimeout(typeText, 50);
    }
}

// Start the typewriter animation when the page loads
window.addEventListener("load", () => {
    typeText();
});
