const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
  console.log('WebSocket connected');
});

socket.addEventListener('message', ({ data }) => {
  console.log(`Received: ${data}`);
  document.getElementById('numero').textContent = data;
});

socket.addEventListener('close', () => {
  console.log('WebSocket closed');
});

socket.addEventListener('error', (error) => {
  console.error(error);
});





