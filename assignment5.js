// document.addEventListener("DOMContentLoaded", function() {
    // Task 1 Welcome Message
    const welcomeMessage = document.getElementById('welcomeMessage');
    const changeMessageBtn = document.getElementById('changeMessageBtn');
    changeMessageBtn.addEventListener('click', function() {
        welcomeMessage.textContent = "Enjoy our Japanese Recipes!";
    });

    // Task 1 Change Mode
    var changeModeBtn = document.getElementById('changeModeBtn');
    changeModeBtn.addEventListener('click', function() {
        document.body.classList.toggle('night-theme');
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

    // Task 2 Event Handling Event Listeners on Buttons
    document.getElementById('resetFormBtn').addEventListener('click', function() {
        document.querySelectorAll('input, textarea, select').forEach(input => input.value = '');
    });

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

    // Task 2 Contact Form Section
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();  
        const formData = new FormData(this);  
        fetch('https://example.com', {  
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                return response.json(); 
            }
            throw new Error('An error has occurred');
        })
        .then(data => {
            handleSuccess();  
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
    
    function handleSuccess() {
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block'; 
    }

    // Task 2 Switch Statements
    function displayGreeting() {
        var now = new Date();
        var hours = now.getHours();
        var greeting;

        switch (true) {
            case (hours < 12):
                greeting = "Good Morning!";
                break;
            case (hours < 18):
                greeting = "Good Afternoon!";
                break;
            default:
                greeting = "Good Evening!";
                break;
        }
        document.getElementById('greetingMessage').textContent = greeting;
    }
    
    displayGreeting();
