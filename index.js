document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.text');
    const texts = ["Frontend Developer", "Web Developer", "Designer"];
    let index = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let currentText = texts[index];
    
    function type() {
        textElement.innerHTML = "";
        let displayText = isDeleting ? currentText.substring(0, letterIndex) : currentText.substring(0, letterIndex + 1);
        displayText.split("").forEach((char, i) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.setProperty('--index', i);
            textElement.appendChild(span);
        });

        if (!isDeleting && letterIndex < currentText.length) {
            letterIndex++;
        } else if (isDeleting && letterIndex > 0) {
            letterIndex--;
        }

        if (letterIndex === currentText.length) {
            isDeleting = true;
        } else if (letterIndex === 0 && isDeleting) {
            isDeleting = false;
            index = (index + 1) % texts.length;
            currentText = texts[index];
        }

        setTimeout(type, isDeleting ? 100 :150); 
    }

    type();
});