// Start with the DOMContentLoaded Event Listener
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Form and Feedback Division Selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // 2. Form Submission Event Listener
    form.addEventListener('submit', function(event) {
        
        // Prevent the default action (page reload/navigation)
        event.preventDefault(); 

        // 3. Input Retrieval and Trimming
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        // Retrieve .value and apply .trim() to clean whitespace
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 4. Initialize Validation Variables
        let isValid = true; 
        const messages = []; // Array to store error messages

        // 5. Validation Checks
        
        // Username Validation (min 3 chars)
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation (basic @ and . check)
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must include both "@" and "." characters.');
        }

        // Password Validation (min 8 chars)
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // 6. Feedback Display Logic
        
        // Make feedbackDiv visible
        feedbackDiv.style.display = 'block';

        if (isValid) {
            // Success Case
            feedbackDiv.textContent = '✅ Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green color for success
            
            // In a real application, you would manually submit the form data to the server here.
            
        } else {
            // Error Case
            
            // Join messages with <br> to put each error on a new line
            const errorHtml = messages.join('<br>');
            
            // Assign the HTML string to innerHTML
            feedbackDiv.innerHTML = '🛑 **Validation Errors:**<br>' + errorHtml;
            
            // Set the text color to red
            feedbackDiv.style.color = '#dc3545'; // Red color for errors
        }
    });
});