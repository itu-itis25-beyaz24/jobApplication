function isValidSalary(salary) {
    return Number(salary) >= 0;
}

document.getElementById("salaryAmount").addEventListener("blur", function() {
    const value = this.value;
    const messageId = "salary_result";
    let msgElem = document.getElementById(messageId);
    if (!msgElem) {
        msgElem = document.createElement("p");
        msgElem.id = messageId;
        this.parentNode.appendChild(msgElem);
    }

    if (!isValidSalary(value)) {
        msgElem.textContent = "Salary cannot be negative.";
    } else {
        msgElem.textContent = "Salary is valid.";
    }
});
