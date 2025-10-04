document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedback = document.getElementById('form-feedback');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        let isValid = true;
        const messages = [];
        if (username.lenght < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must be valid.');
        }
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        if (isValid) {
            feedback.Div.textContent = 'Registration successful!';
            feedback.Div.style.color = '#28a745';
            form.reset();
        }
        else {
            const errorHtml = messages.join('<br>');
            feedback.Div.innerHTML = ' 🛑**Errors:**<br>' + errorHtml;
            feedback.Div.style.color = '#dc3545';
        }
    })

});
