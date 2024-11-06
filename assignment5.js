// // Task 1 Welcome Message
// const welcomeMessage = document.getElementById('welcomeMessage');
// const changeMessageBtn = document.getElementById('changeMessageBtn');
// changeMessageBtn.addEventListener('click', function() {
//     welcomeMessage.textContent = "Enjoy our Japanese Recipes!";
// });


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
    if (localStorage.getItem('username1')) {
        showLogout();
    } else {
        showLogin();
    }
};
function login() {
    const username = document.getElementById('username1').value;
    const password = document.getElementById('password1').value;

    if (username && password) {
        localStorage.setItem('username1', username); 
        showLogout();
    } else {
        alert('Please enter both username and password');
    }
}
function logout() {
    localStorage.removeItem('username1'); 
    showLogin();
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('logoutContainer').style.display = 'none';
}

function showLogout() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('logoutContainer').style.display = 'block';
    document.getElementById('usernameDisplay').textContent = localStorage.getItem('username1');
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

document.querySelectorAll(".next-button").forEach(button => {
    button.addEventListener("click", () => {
        if (currentStep < formSteps.length - 1) {
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

document.getElementById("multiStepForm").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");

});

 // Task 2 Event Handling Event Listeners on Buttons
 document.getElementById('resetFormBtn').addEventListener('click', function() {
    document.querySelectorAll('input, textarea, select').forEach(input => input.value = '');
});

// // Task 1 Welcome Message
// const welcomeMessage = document.getElementById('welcomeMessage');
// const changeMessageBtn = document.getElementById('changeMessageBtn');
// changeMessageBtn.addEventListener('click', function() {
//     welcomeMessage.textContent = "Enjoy our Japanese Recipes!";
// });

// Task 1 Manipulating Attributes Read more
function ReadMore(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
