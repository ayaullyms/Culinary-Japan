// Task 5 Display Current Date and Time
 function displayDateTime() {
    const dateTimeElement = document.getElementById('dateTime'); 
    const now = new Date(); 
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    dateTimeElement.innerHTML = now.toLocaleString('en-US', options); 
}

displayDateTime();
setInterval(displayDateTime, 60000);

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

