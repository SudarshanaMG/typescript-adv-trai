const ws = new WebSocket(`ws://${location.host}`);

const messagesDiv = document.getElementById('messages');
const input = document.getElementById('messageInput');

ws.onmessage = (event) => {
  const message = document.createElement('div');
  message.textContent = event.data;
  messagesDiv.appendChild(message);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
};

function sendMessage() {
  const text = input.value.trim();
  if (text !== '') {
    ws.send(text);
    input.value = '';
  }
}

input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
