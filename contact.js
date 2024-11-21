// Function to handle the form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate saving the message (in a real-world case, use AJAX to send it to the server)
    alert('Message submitted successfully!');

    // Reset form
    document.getElementById('contactForm').reset();

    // In a real scenario, the form data would be sent to the server.
    // For now, we simply log the message to simulate data submission.
    console.log(`New message from ${name} (${email}): ${message}`);
}
);

