// Simulating stored messages (replace this with an actual back-end call to fetch real data)
const contactMessages = [
    { name: 'John Doe', email: 'john@example.com', message: 'Hello, I need help with my account.' },
    { name: '', email: '', message: '' },  // Invalid message (empty fields)
    { name: 'Jane Smith', email: 'jane@example.com', message: 'I have a question about pricing.' },
    { name: 'Mark Johnson', email: '', message: 'Can you provide more details about your services?' },  // Invalid (missing email)
    { name: 'Emily Clark', email: 'emily@example.com', message: 'I am interested in your services.' }
];

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