const apiKey = '6102fc08d3554f20b6dc0957503a07ad';

async function searchRecipes() {
    const query = document.getElementById('query').value;
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayRecipes(data.results);
    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
}

function displayRecipes(recipes) {
    const recipesDiv = document.getElementById('recipes');
    recipesDiv.innerHTML = '';
    
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe-card');
        recipeElement.innerHTML = `
            <h3>${recipe.title}</h3>
            <img src="${recipe.image}" alt="${recipe.title}" width="100">
            <button onclick="getRecipeDetails(${recipe.id})">View Details</button>
        `;
        recipesDiv.appendChild(recipeElement);
    });
}

async function getRecipeDetails(id) {
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        alert(`Ingredients: ${data.extendedIngredients.map(ing => ing.name).join(", ")}`);
    } catch (error) {
        console.error("Error fetching recipe details:", error);
    }
}
 һһһһ