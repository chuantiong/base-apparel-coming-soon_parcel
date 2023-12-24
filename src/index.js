const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email-input-field");

emailForm.addEventListener("submit", e => {
    e.preventDefault();
    handleEmailInput();
});

const handleEmailInput = () => {
    const emailInputValue = emailInput.value.trim();
    const errorIcon = document.getElementById("error-icon");
    const invalidMessage = document.getElementById("invalid-message");
    const emailInputWrapper = document.getElementById("email-input-wrapper");
    const emailRegex = /^[a-z0-9-_.]+@[a-z]+\.(com|org|cc)$/;

    if (!emailInputValue.match(emailRegex)) {
        errorIcon.classList.remove("hide");
        invalidMessage.classList.remove("hide");
        emailInputWrapper.classList.add("error")
    } else {
        errorIcon.classList.add("hide");
        invalidMessage.classList.add("hide");
        emailInputWrapper.classList.remove("error")
        emailInput.value = ""
    }
}