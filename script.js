const chatBox = document.getElementById('chat-box');

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    if (!message) return;

    appendMessage('User', message);
    processResponse(message);
    input.value = '';
}

function processResponse(text) {
    let response = "";
    const lowerText = text.toLowerCase();

    // LO1: Barrier Analysis [cite: 8, 11, 79]
    if (lowerText.includes("both speaking") || lowerText.includes("at the same time")) {
        response = "Coach: I've flagged a 'Conflicting Instructional Cue.' When two adults speak at once, it creates a barrier for the student[cite: 11, 80]. Try using a '5-Minute Bookend' to align roles[cite: 52].";
    } 
    // LO2: Vague Language & Blur Words [cite: 12, 112]
    else if (lowerText.includes("get him ready") || lowerText.includes("be professional")) {
        response = "Coach: That contains 'Vague Language' or 'Blur Words'[cite: 12, 112]. Can you rephrase that using 'Spatial Directions' or objective data points? [cite: 16, 113]";
    }
    // LO2: SBI Feedback Check [cite: 91]
    else if (lowerText.includes("i feel") && !lowerText.includes("because")) {
        response = "Coach: Let's use the SBI Model. You've shared the Impact, but what was the specific Situation and Behavior you observed? [cite: 93, 96]";
    }
    else {
        response = "Coach: I hear you. How can we shift this from a 'boss/assistant' mindset to a synchronized partnership? [cite: 49]";
    }

    setTimeout(() => appendMessage('Coach', response), 500);
}

function appendMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = sender.toLowerCase();
    msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}