// Task 2 Switch Statements + filter 
function filterRecipes(category) {
    localStorage.setItem('recipeFilter', category);
    const recipes = document.querySelectorAll('.recipe-card');
    recipes.forEach(recipe => {
        recipe.classList.remove('hidden');
    });
    recipes.forEach(recipe => {
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
document.addEventListener("DOMContentLoaded", function() {
    const savedFilter = localStorage.getItem('recipeFilter') || 'all';
    filterRecipes(savedFilter);
});


//song play 
document.getElementById('playSoundButton').addEventListener('click', () => {
    const sound = new Audio('Howl.mp3');
    sound.play().catch(error => {
        console.error(error);
    });
});

// Task 2 Accordion for FAQs or Content Sections
document.addEventListener('DOMContentLoaded', function() {
    let accordion = document.getElementsByClassName('accordion-title');
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function() {
            let content = this.nextElementSibling;
            content.style.display = content.style.display === "block" ? "none" : "block";
        });
    }
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
    window.location.href = "form.html";
});


 // Task 2 Event Handling Event Listeners on Buttons
 document.getElementById('resetFormBtn').addEventListener('click', function() {
    document.querySelectorAll('input, textarea, select').forEach(input => input.value = '');
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
