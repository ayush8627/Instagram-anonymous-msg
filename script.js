const sendButton = document.getElementById('sendButton');
const messageInput = document.getElementById('messageInput');

sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message) {
    alert(`Message sent: ${message}`);
    messageInput.value = ''; // Clear the input
  } else {
    alert('Please enter a message!');
  }
});
