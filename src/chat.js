const socket = io();

function sendMessage() {
    const message = document.getElementById('message').value;
    socket.emit('chat message', message);
    document.getElementById('message').value = '';
}

socket.on('chat message', (msg) => {
    const li = document.createElement('li');
    li.textContent = msg;
    document.getElementById('messages').appendChild(li);
});