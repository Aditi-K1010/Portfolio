document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', async (event) => {
        // Prevent the default form submission behavior (which causes the redirect)
        event.preventDefault();

        const formData = new FormData(form);
        
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Submission was successful
                alert('Message sent successfully! 😊');
                form.reset(); // Clear the form fields
            } else {
                // Submission failed
                const data = await response.json();
                if (data.errors) {
                    alert('Oops! There was a problem. ' + data.errors.map(err => err.message).join(', '));
                } else {
                    alert('Oops! There was a problem. 😞');
                }
            }
        } catch (error) {
            // Network or other unexpected error
            alert('An unexpected error occurred. Please try again later.');
            console.error('Error:', error);
        }
    });
});