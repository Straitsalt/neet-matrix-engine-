function sendMessage() {

    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const message = input.value.trim();

    if (message === "") return;

    chatBox.innerHTML += `<p><b>You:</b> ${message}</p>`;

    let reply = "I don't know the answer yet.";

    if (message.toLowerCase().includes("photosynthesis")) {
        reply = "Photosynthesis is the process by which plants use sunlight to make food.";
    }
    else if (message.toLowerCase().includes("newton")) {
        reply = "Newton's First Law states that an object remains at rest or in uniform motion unless acted upon by a net external force.";
    }
    else if (message.toLowerCase().includes("water")) {
        reply = "The chemical formula of water is H₂O.";
    }

    chatBox.innerHTML += `<p><b>AI:</b> ${reply}</p>`;

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}
