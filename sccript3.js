const roles = [" Frontend Developer "];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById("typing-text");

function typeEffect() {
    const currentRole = roles[index];
    if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex--);
    } else {
    typingText.textContent = currentRole.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 500); // Pause before typing next
    } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
    }
}

typeEffect();
