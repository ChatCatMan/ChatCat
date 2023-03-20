const socket = io("http://localhost:8080");

const messagesContainer = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const message = messageInput.value;
  socket.emit("message", message);
});

socket.on("message", (message) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messagesContainer.appendChild(messageElement);
});
