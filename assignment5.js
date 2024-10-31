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
if (changeModeBtn) {
    changeModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('night-theme');
    });
} else {
    console.log("Change mode button not found.");
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

// Task 1 Welcome Message
const welcomeMessage = document.getElementById('welcomeMessage');
const changeMessageBtn = document.getElementById('changeMessageBtn');
changeMessageBtn.addEventListener('click', function() {
    welcomeMessage.textContent = "Enjoy our Japanese Recipes!";
});

// Task 1 Manipulating Attributes Read more
function ReadMore(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}


// Task 2 Keyboard Event Handling
document.addEventListener('keydown', function(event) {
    const focusedElement = document.activeElement;
    if (focusedElement.classList.contains('nav-item')) {
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            const nextElement = focusedElement.nextElementSibling;
            if (nextElement) {
                nextElement.focus();
            }
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            const prevElement = focusedElement.previousElementSibling;
            if (prevElement) {
                prevElement.focus();
            }
        }
    }
});

function handleSuccess() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block'; 
}