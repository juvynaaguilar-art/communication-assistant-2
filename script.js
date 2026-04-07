const chatBox = document.getElementById('chat-box');

// This object pulls directly from your Knowledge Library data
const knowledgeLibrary = {
    barriers: ["Conflicting Instructional Cues", "Frequent Interruptions", "Vague Language"], // [cite: 8, 11, 81]
    tools: ["Shared Digital Organizers", "Visual Schedules", "Chunked Information Templates"], // [cite: 17, 19, 20]
    protocols: ["5-Minute Bookend", "SBI Model", "Spatial Directions", "3:1 Ratio"] // [cite: 52, 91, 16, 121]
};

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

    // 1. Check for 'Conflicting Instructional Cues' (Staff speaking at once)
    if (lowerText.includes("both speaking") || lowerText.includes("at the same time")) {
        response = "Coach: I've flagged 'Conflicting Instructional Cues'. For a student, this adult misalignment acts as a 'threat' to the brain. Try using a '5-Minute Bookend' to clarify roles before the day becomes hectic[cite: 52, 53].";
    } 
    
    // 2. Check for 'Vague Language' or 'Blur Words' 
    else if (lowerText.includes("get him ready") || lowerText.includes("be professional") || lowerText.includes("be proactive")) {
        response = "Coach: That contains 'Vague Language' or 'Blur Words'[cite: 12, 112]. To minimize 'threats and distractions' [cite: 5], please rephrase using 'Spatial Directions' or objective data points[cite: 16, 113].";
    }

    // 3. Check for SBI (Situation-Behavior-Impact) alignment
    else if (lowerText.includes("i feel") && !lowerText.includes("because")) {
        response = "Coach: Let's use the SBI Model[cite: 91]. You've shared the Impact, but can you describe the objective Behavior you physically saw or heard? [cite: 96, 99]";
    }

    // 4. Recommendation for teams 'Out of Sync'
    else if (lowerText.includes("out of sync") || lowerText.includes("not on the same page")) {
        response = "Coach: When teams are out of sync, I recommend using a Shared Digital Organizer, Visual Schedule, or Chunked Information Template. Which tool would help you synchronize today?";
    }

    // 5. Default Encouragement based on Synchronized Partnership
    else {
        response = "Coach: High-quality adult relationships are the single most important predictor of classroom success[cite: 66]. How can we shift toward a synchronized partnership rather than a hierarchy? [cite: 75]";
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