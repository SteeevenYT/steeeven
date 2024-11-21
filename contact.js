// Function to handle the form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate saving the message (this would normally be sent to a server)
    alert('Message submitted successfully!');

    // Reset form
    document.getElementById('contactForm').reset();

    // Call the addNewMessage function (defined in admin.js) to add the message
    addNewMessage(name, email, message);
});
