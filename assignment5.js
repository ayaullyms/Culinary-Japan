// Task 1 Manipulating Attributes STAR STAR STAR
document.querySelectorAll('.rating .star').forEach(star => {
    star.addEventListener('click', function() {
        const rating = this.getAttribute('data-value'); 
        const stars = this.parentElement.querySelectorAll('.star');
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected'); 
            } else {
                star.classList.remove('selected'); 
            }
        });
    });
});

// Task 1 Change Mode
const changeModeBtn = document.getElementById('changeModeBtn');
document.addEventListener("DOMContentLoaded", function() {
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'night') {
        document.body.classList.add('night-theme');
    }
});
if (changeModeBtn) {
    changeModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('night-theme');

        if (document.body.classList.contains('night-theme')) {
            localStorage.setItem('theme', 'night');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
} else {
    console.log("Change mode button not found.");
}


//aut-form
window.onload = function() {
    updateMenuText(); 
    if (localStorage.getItem('username1')) {
        showLogout();
    } else {
        showLogin();
    }

    document.getElementById('authMenuLink').addEventListener('click', function(event) {
        event.preventDefault(); 
        if (localStorage.getItem('username1')) {
            logout();
        } else {
            window.location.href = "authentication.html"; 
        }
    });

    document.getElementById('registerLink').addEventListener('click', function(event) {
        event.preventDefault();
        if (!localStorage.getItem('username1')) {
            window.location.href = "register.html"; 
        }
    });

};

function login() {
    const username = document.getElementById('username1').value;
    const password = document.getElementById('password1').value;

    if (username && password) {
        const storedUser = JSON.parse(localStorage.getItem(username));

        if (storedUser && storedUser.password === password) {
            localStorage.setItem('username1', username);
            showLogout();
            updateMenuText();
        } else {
            alert('Invalid username or password');
        }
    } else {
        alert('Please enter both username and password');
    }
}


function logout() {
    localStorage.removeItem('username1');
    showLogin();
    updateMenuText();
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('logoutContainer').style.display = 'none';
}

function showLogout() {
    const username = localStorage.getItem('username1');
    const userInfo = JSON.parse(localStorage.getItem(username));

    if (userInfo) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('logoutContainer').style.display = 'block';
        document.getElementById('usernameDisplay').textContent = username;
        document.getElementById('emailDisplay').textContent = userInfo.email;
        document.getElementById('phoneDisplay').textContent = userInfo.phone;
    }
}


function updateMenuText() {
    const authMenuLink = document.getElementById('authMenuLink');
    if (localStorage.getItem('username1')) {
        authMenuLink.textContent = 'Logout';
    } else {
        authMenuLink.textContent = 'Login';
    }
}

function register() {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;
    const email = document.getElementById('newEmail').value;
    const phone = document.getElementById('newPhone').value;

    if (username && password && email && phone) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const phoneRegex = /^\+7\s\d{3}\s\d{3}\s\d{4}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number in the format: +7 123 456 7890.');
            return;
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }
        const passwordComplexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{8,}$/;
        if (!passwordComplexityRegex.test(password)) {
            alert('Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character.');
            return;
        }
        if (!localStorage.getItem(username)) {
            localStorage.setItem(username, JSON.stringify({ password, email, phone }));
            alert('Registration successful! You can now log in.');
            window.location.href = 'authentication.html';
        } else {
            alert('Username already exists.');
        }

    } else {
        alert('Please fill in all fields.');
    }
}

// task 3 Responding to Events with Callback
let currentStep = 0;
const formSteps = document.querySelectorAll(".form-step");
function showStep(step) {
    formSteps.forEach((formStep, index) => {
        formStep.style.display = index === step ? "block" : "none";
    });
}
showStep(currentStep);
function validateCurrentStep() {
    const currentFields = formSteps[currentStep].querySelectorAll("input, textarea");
    let isValid = true;
    currentFields.forEach(field => {
        if (field.type === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(field.value)) {
                alert("Please enter a valid email address.");
                isValid = false;
                field.focus();
            }
        } else if (field.type === "text" || field.tagName.toLowerCase() === "textarea") {
            if (field.hasAttribute("required") && !field.value.trim()) {
                alert("Please fill out all required fields.");
                isValid = false;
                field.focus();
            }
        }
    });
    return isValid;
}
document.querySelectorAll(".next-button").forEach(button => {
    button.addEventListener("click", () => {
        if (validateCurrentStep() && currentStep < formSteps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });
});
document.querySelectorAll(".back-button").forEach(button => {
    button.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });
});

// Handle form submission
document.getElementById("multiStepForm").addEventListener("submit", (event) => {
    if (!validateCurrentStep()) {
        event.preventDefault();
        return;
    }
    alert("Form submitted successfully!");
});
