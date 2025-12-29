function isValidFullName(fullName) {
    if (fullName.length < 6) return false;
    if (/\d/.test(fullName)) return false; // contains digit
    return true;
}

// Early validation on blur
document.getElementById("fullName").addEventListener("blur", function() {
    const value = this.value;
    const messageId = "fullName_result";
    let msgElem = document.getElementById(messageId);
    if (!msgElem) {
        msgElem = document.createElement("p");
        msgElem.id = messageId;
        this.parentNode.appendChild(msgElem);
    }

    if (!isValidFullName(value)) {
        msgElem.textContent = "Full name must be at least 6 characters and contain no digits.";
    } else {
        msgElem.textContent = "Full name looks good.";
    }
});
