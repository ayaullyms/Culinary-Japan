// Task 5 Display Current Date and Time
 function displayDateTime() {
    const dateTimeElement = document.getElementById('dateTime'); 
    const now = new Date(); 
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    dateTimeElement.innerHTML = now.toLocaleString('en-US', options); 
}

displayDateTime();
setInterval(displayDateTime, 60000);

 // Task 4 Change Background Color 
 const colors = ['#F0E68C' , '#ADD8E6' , '#FAF0E6' , '#E0FFFF' , '#E6E6FA'];
 function changeBackgroundColor() {
     const randomColor = colors[Math.floor(Math.random() * colors.length)];
     document.body.style.backgroundColor = randomColor;
 }

// Task 2 Switch Statements
function filterRecipes(category) {
    const recipes = document.querySelectorAll('.recipe-card');
    
    recipes.forEach(recipe => {
        recipe.classList.remove('hidden');

        switch (category) {
            case 'all':
                break;
            case 'sweet':
                if (!recipe.classList.contains('sweet')) {
                    recipe.classList.add('hidden');
                }
                break;
            case 'drink':
                if (!recipe.classList.contains('drink')) {
                    recipe.classList.add('hidden');
                }
                break;
            case 'hot_dish':
                if (!recipe.classList.contains('hot_dish')) {
                    recipe.classList.add('hidden');
                }
                break;
            default:
                console.log("Unknown category:", category);
                break;
        }
    });
}

//song play 
document.getElementById('playSoundButton').addEventListener('click', () => {
    const sound = new Audio('Howl.mp3');
    sound.play().catch(error => {
        console.error("Ошибка при воспроизведении:", error);
    });
});

// Task1 Form Validation
document.getElementById('recipeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value.trim();  
    let category = document.getElementById('category').value;
    let recipe = document.getElementById('recipe').value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (category === "") {
        alert("Please select a category.");
        return;
    }

    if (recipe === "") {
        alert("Please describe your recipe.");
        return;
    }

    alert("Form submitted successfully!");
    this.submit();
});



document.getElementById('changeColorBtn').addEventListener('click', changeBackgroundColor);

// Task 3 Popup Subscription
const popupForm = document.getElementById('popupForm');
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');

openPopup.addEventListener('click', function() {
    popupForm.style.display = 'flex'; 
});

closePopup.addEventListener('click', function() {
    popupForm.style.display = 'none'; 
});

window.addEventListener('click', function(event) {
    if (event.target === popupForm) {
        popupForm.style.display = 'none'; 
    }
});

// Task 2 Accordion for FAQs or Content Sections
let accordion = document.getElementsByClassName('accordion-title');
if (accordion.length > 0) {
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function() {
            let content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    }
}




