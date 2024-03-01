document.addEventListener('DOMContentLoaded', function() {
    console.log('Document loaded');
    // Your JavaScript code goes here

    const form = document.getElementById('emailForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(form);
        const formDataObject = {};
        formData.forEach(function(value, key) {
            formDataObject[key] = value;
        });

        // Log form data (you can perform further actions like sending data to server)
        console.log('Form data:', formDataObject);

        // Clear form fields (optional)
        form.reset();
    });
});

