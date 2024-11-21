// Simulating stored messages (this would ideally be fetched from a server or database)
let contactMessages = [];

// Function to check password
function checkPassword() {
    const enteredPassword = document.getElementById('admin-password').value;
    const correctPassword = '7789';  // The correct password (should not be exposed in production)

    if (enteredPassword === correctPassword) {
        // Hide login prompt and show the admin dashboard
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';

        // Display only valid contact form messages
        displayValidMessages();
    } else {
        // Show error message if password is incorrect
        document.getElementById('login-error').style.display = 'block';
    }
}

// Function to display valid contact form messages (those with name, email, and message)
function displayValidMessages() {
    const messageContainer = document.getElementById('contact-messages');
    messageContainer.innerHTML = '';  // Clear previous messages

    // Filter messages to display only valid ones (non-empty fields)
    const validMessages = contactMessages.filter(message => message.name && message.email && message.message);

    validMessages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `
            <h3>${message.name} (${message.email})</h3>
            <p>${message.message}</p>
            <hr />
        `;
        messageContainer.appendChild(messageDiv);
    });
}

// Function to simulate adding a new message (this would be triggered on form submit)
function addNewMessage(name, email, message) {
    // Simulate saving the new message
    contactMessages.push({ name, email, message });

    // Immediately display the new message on the admin page
    if (document.getElementById('admin-dashboard').style.display === 'block') {
        displayValidMessages();
    }
}
