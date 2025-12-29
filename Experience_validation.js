function isValidExperience(exp, dobValue) {
    const age = calculateAge(dobValue);
    return exp >= 0 && exp <= (age - 10);
}

document.getElementById("experience").addEventListener("blur", function() {
    const value = this.value;
    const dobValue = document.getElementById("dob").value;
    const messageId = "experience_result";
    let msgElem = document.getElementById(messageId);
    if (!msgElem) {
        msgElem = document.createElement("p");
        msgElem.id = messageId;
        this.parentNode.appendChild(msgElem);
    }

    if (!isValidExperience(value, dobValue)) {
        msgElem.textContent = "Experience cannot be negative or greater than (age - 10).";
    } else {
        msgElem.textContent = "Experience is valid.";
    }
});

