// Select the toggle button and the navbar links
const toggleButton = document.querySelector('.toggle-button'); // Button to toggle the navbar
const navbarLinks = document.querySelector('.navbar ul'); // Navbar links

// Toggle the menu on click
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Hide menu when clicking outside or on a menu link
document.addEventListener("click", (e) => {
    if (!navbarLinks.contains(e.target) && !toggleButton.contains(e.target)) {
        navbarLinks.classList.remove("active");
    }
});

navbarLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        navbarLinks.classList.remove("active");
    }
});

// Form validation
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    // Retrieve input values
    const fname = document.getElementById("fname").value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('number').value.trim();
    const message = document.getElementById('message').value.trim();
    const btn = document.getElementById('btn');

    // Error message elements
    const fnameerror = document.getElementById('fnameerror');
    const emailerror = document.getElementById('emailerror');
    const numbererror = document.getElementById('numbererror');
    const messageerror = document.getElementById('messageerror');

    // Clear previous error messages
    fnameerror.innerHTML = "";
    emailerror.innerHTML = "";
    numbererror.innerHTML = "";
    messageerror.innerHTML = "";

    // Validation checks
    let isValid = true;

    // Validate the first name
    if (fname === "" || fname.length > 20 || fname.length < 3 || fname.includes("@")) {
        fnameerror.innerHTML = "Enter a valid name.";
        isValid = false;
    }

    // Validate the email
    if (email === "" || email.length > 50 || email.length < 11 || !email.includes('@')) {
        emailerror.innerHTML = "Enter a valid email.";
        isValid = false;
    }

    // Validate the phone number
    if (phone === "" || phone.length < 10 || phone.length > 11 || isNaN(phone)) {
        numbererror.innerHTML = "Enter a valid phone number.";
        isValid = false;
    }

    // Validate the message
    if (message === "" || message.length > 200 || message.length < 10) {
        messageerror.innerHTML = "Enter a valid message.";
        isValid = false;
    }

    // If all validations pass, update button text
    if (isValid) {
        btn.innerHTML = "Form submitted";
    }
});