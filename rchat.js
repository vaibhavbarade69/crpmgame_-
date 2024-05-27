function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();

    if (message !== "") {
        var chatBox = document.getElementById("chat-box");
        var messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);

        // Clear input after sending message
        messageInput.value = "";

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
