const chatBox = document.getElementById('chat-box');

function appendMessage(role, text) {
    const div = document.createElement('div');
    div.className = `message ${role}`;
    div.innerText = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function processResponse(input) {
    const text = input.toLowerCase();
    let reply = "";

    // Barrier Analysis: Conflicting Instructional Cues [cite: 11, 79]
    if (text.includes("both talking") || text.includes("two staff") || text.includes("at the same time")) {
        reply = "Coach: I've identified 'Conflicting Instructional Cues.' This acts as a 'threat' to a student's brain[cite: 82]. Let's try a '5-Minute Bookend' to align roles before the day gets hectic[cite: 52].";
    }
    // Barrier Analysis: Vague Language/Blur Words [cite: 12, 112]
    else if (text.includes("get ready") || text.includes("be professional") || text.includes("be proactive")) {
        reply = "Coach: That contains 'Vague Language' or 'Blur Words'[cite: 112]. Please rephrase using 'Spatial Directions' or objective data points[cite: 16, 113].";
    }
    // Feedback: SBI Model [cite: 91]
    else if (text.includes("i feel") && !text.includes("because")) {
        reply = "Coach: To make this feedback brain-friendly, use the SBI Model. You shared the Impact; now, what specific Behavior did you physically see? [cite: 96, 99]";
    }
    // Toolkit Recommendation [cite: 19]
    else if (text.includes("out of sync") || text.includes("confused")) {
        reply = "Coach: Since the team is out of sync, I recommend a Shared Digital Organizer or a Visual Schedule[cite: 19, 20]. Which would help you synchronize?";
    }
    // Default: Shift to Partnership [cite: 49]
    else {
        reply = "Coach: Remember, inclusion is about belonging[cite: 27]. How can we shift from a 'boss/assistant' mindset to a synchronized partnership? [cite: 49, 75]";
    }

    setTimeout(() => appendMessage('coach', reply), 600);
}

function sendMessage() {
    const input = document.getElementById('user-input');
    if (input.value.trim() === "") return;
    appendMessage('user', input.value);
    processResponse(input.value);
    input.value = "";
}

// Initial Greeting [cite: 107]
appendMessage('coach', "Hello! Do you have five minutes to talk about our classroom alignment? (The Micro-Yes) [cite: 107, 109]");