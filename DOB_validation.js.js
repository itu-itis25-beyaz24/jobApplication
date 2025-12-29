function calculateAge(dobValue) {
    const dob = new Date(dobValue);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

function isValidDOB(dobValue) {
    const age = calculateAge(dobValue);
    return age > 17 && age < 36;
}

// Early validation on blur
document.getElementById("dob").addEventListener("blur", function() {
    const value = this.value;
    const messageId = "dob_result";
    let msgElem = document.getElementById(messageId);
    if (!msgElem) {
        msgElem = document.createElement("p");
        msgElem.id = messageId;
        this.parentNode.appendChild(msgElem);
    }

    if (!isValidDOB(value)) {
        msgElem.textContent = "Age must be between 18 and 35.";
    } else {
        msgElem.textContent = "DOB is valid.";
    }
});
