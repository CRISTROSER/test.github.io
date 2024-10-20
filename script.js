document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;
    const inputs = this.querySelectorAll('input[required]');
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            alert('Por favor, rellena todos los campos.');
        }
    });
    if (!isValid) {
        event.preventDefault();
    }
});
