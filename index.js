// ==========================================
// 1. Change Background Color
// ==========================================
function changeBackgroundColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// ==========================================
// 2. Reset Background Color
// ==========================================
function resetBackgroundColor() {
    // FIX: Clear the style instead of setting it to white
    document.body.style.backgroundColor = "";
}

// ==========================================
// 3. Display Key Press
// ==========================================
function displayKeyPress(event) {
    const display = document.getElementById('keyPressDisplay');
    if (display) {
        // Use event.key directly
        const key = event ? event.key : '';
        display.textContent = `Key pressed: ${key}`;
    }
}

// ==========================================
// 4. Display User Input
// ==========================================
function displayUserInput() {
    const input = document.getElementById('textInput');
    const display = document.getElementById('textInputDisplay');
    
    if (input && display) {
        display.textContent = `You typed: ${input.value}`;
    }
}

// ==========================================
// 5. Add Message on Enter (YOUR CUSTOM FEATURE)
// ==========================================
function addMessage(event) {
    const input = document.getElementById('textInput');
    let messageContainer = document.getElementById('messageContainer');
    
    // Create container if it doesn't exist
    if (!messageContainer) {
        messageContainer = document.createElement('div');
        messageContainer.id = 'messageContainer';
        messageContainer.style.marginTop = '20px'; // Style to appear "down"
        document.body.appendChild(messageContainer);
    }

    // Check if key is Enter and input is not empty
    if (event.key === 'Enter' && input && input.value.trim() !== "") {
        const newMessage = document.createElement('p');
        newMessage.textContent = `Saved Message: ${input.value}`;
        
        // Append to the container
        messageContainer.appendChild(newMessage);

        // Clear input
        input.value = '';
        const display = document.getElementById('textInputDisplay');
        if(display) display.textContent = "You typed: ";
    }
}

// ==========================================
// 6. Setup Event Listeners
// ==========================================
function setupEventListeners() {
    const changeColorBtn = document.getElementById('changeColorButton');
    const resetColorBtn = document.getElementById('resetColorButton');
    const textInput = document.getElementById('textInput');

    // 1. Click Event
    if (changeColorBtn) {
        changeColorBtn.removeEventListener('click', changeBackgroundColor);
        changeColorBtn.addEventListener('click', changeBackgroundColor);
    }

    // 2. Double Click Event
    if (resetColorBtn) {
        resetColorBtn.removeEventListener('dblclick', resetBackgroundColor);
        resetColorBtn.addEventListener('dblclick', resetBackgroundColor);
    }

    // 3. Keydown Event (Document)
    document.removeEventListener('keydown', displayKeyPress);
    document.addEventListener('keydown', displayKeyPress);

    // 4. Input & Custom Message Events
    if (textInput) {
        textInput.removeEventListener('input', displayUserInput);
        textInput.addEventListener('input', displayUserInput);

        // Your custom listener
        textInput.removeEventListener('keydown', addMessage);
        textInput.addEventListener('keydown', addMessage);
    }
}

// Initialize listeners
setupEventListeners();

// ==========================================
// Export for Testing
// ==========================================
if (typeof module !== 'undefined') {
    module.exports = {
        changeBackgroundColor,
        resetBackgroundColor,
        displayKeyPress,
        displayUserInput,
        setupEventListeners
    };
}
