function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    const chatBox = document.getElementById("chat-box");

    const userMessage = document.createElement("p");
    userMessage.className = "user-message";
    userMessage.innerText = userInput;
    chatBox.appendChild(userMessage);

    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        const botResponse = getPortfolioBotResponse(userInput);
        const botMessage = document.createElement("p");
        botMessage.className = "bot-message";
        botMessage.innerText = botResponse;
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

// Portfolio-specific responses
function getPortfolioBotResponse(input) {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes("name") || lowerInput.includes("who")) {
        return "I'm Karthik Raja, a Computer Science student with a passion for innovation!";
    } else if (lowerInput.includes("skills")) {
        return "I am skilled in C++, Python, Web Development, Machine Learning, and more.";
    } else if (lowerInput.includes("hi")) {
	return "Hello! How can I assist you today?";
    } else if (lowerInput.includes("hello")) {
	return "Hi there! What can I help you with?";
    } else if (lowerInput.includes("how are you")) {
	return "I'm just a bot, but I'm doing great! How about you?";
    } else if (lowerInput.includes("projects")) {
        return "My latest projects include a dynamic traffic regulation system using IoT and a gamified ocean literacy approach.";
    } else if (lowerInput.includes("contact")) {
        return "You can contact me via the contact form on the site or reach out to me at my email: karthikrajaanand12@gmail.com.";
    } else if (lowerInput.includes("education") || lowerInput.includes("study")) {
        return "I am currently pursuing my Computer Science and Engineering degree at Anna University, Madras Institute of Technology.";
    } else if (lowerInput.includes("experience")) {
        return "I have hands-on experience with projects like the Smart India Hackathon and Chanakya Fellowship.";
    } else if (lowerInput.includes("bye")) {
        return "Goodbye! Feel free to explore my portfolio further!";
    }

    return "I'm not sure how to answer that, but feel free to explore my portfolio!";
}
