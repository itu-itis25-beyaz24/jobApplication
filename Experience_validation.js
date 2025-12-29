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

function isValidExperience(exp, dobValue) {
    const age = calculateAge(dobValue);
    return exp >= 0 && exp <= (age - 10);
}

// Blur olayını da ekle (Kendi yazdığın gibi)
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


