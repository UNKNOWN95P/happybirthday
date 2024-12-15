document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Get the username and password from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Define the correct credentials
    const correctUsername = 'Sanket Loves Pragati'; // Replace with your desired username
    const correctPassword = '22250809'; // Replace with your desired password
  
    // Check if the entered credentials match the correct ones
    if (username === correctUsername && password === correctPassword) {
      // Redirect to index.html
      window.location.href = 'index2.html';
    } else {
      // Show an error message
      document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
  });

  // Toggle the greeting card content
function toggleCard() {
  const cardContent = document.getElementById('cardContent');
  cardContent.classList.toggle('active');
}
 
 // JavaScript to toggle password visibility
const togglePasswordButton = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');

togglePasswordButton.addEventListener('click', () => {
  const type = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = type;

  // Change the button's label/icon based on the state
  togglePasswordButton.textContent = type === 'password' ? '👁️' : '🙈';
});
