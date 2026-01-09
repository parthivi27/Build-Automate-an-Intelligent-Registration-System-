const submitBtn = document.getElementById("submitBtn");
const form = document.getElementById("regForm");

document.addEventListener("input", validateForm);

function validateForm() {
    let valid = true;

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirm = document.getElementById("confirm");
    const terms = document.getElementById("terms");

    if (fname.value === "") valid = false;
    if (lname.value === "") valid = false;
    if (!email.value.includes("@gmail.com")) valid = false;
    if (phone.value.length < 10) valid = false;
    if (password.value !== confirm.value) valid = false;
    if (!terms.checked) valid = false;

    submitBtn.disabled = !valid;
}

// Password strength
document.getElementById("password").addEventListener("input", () => {
    const val = password.value;
    const strength = document.getElementById("strength");

    if (val.length < 6) strength.innerText = "Weak";
    else if (val.match(/[A-Z]/) && val.match(/[0-9]/)) strength.innerText = "Medium";
    else if (val.match(/[!@#$%^&*]/)) strength.innerText = "Strong";
});

// Dropdown logic
document.getElementById("country").addEventListener("change", () => {
    state.innerHTML = "<option>Maharashtra</option>";
});

state.addEventListener("change", () => {
    city.innerHTML = "<option>Pune</option>";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Registration Successful!\nYour profile has been submitted successfully.");
    form.reset();
});
