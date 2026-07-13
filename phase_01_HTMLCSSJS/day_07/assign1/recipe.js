const recipesContainer = document.getElementById("recipes");
const search = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

let allRecipes = [];

fetch("https://dummyjson.com/recipes")
.then(res => res.json())
.then(data => {
    allRecipes = data.recipes;
    displayRecipes(allRecipes);
});

searchBtn.addEventListener("click", searchRecipe);

search.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        searchRecipe();
    }
});

function searchRecipe(){

    const value = search.value.toLowerCase().trim();

    if(value === ""){
        displayRecipes(allRecipes);
        return;
    }

    const filtered = allRecipes.filter(recipe =>
        recipe.name.toLowerCase().includes(value)
    );

    displayRecipes(filtered);
}

function displayRecipes(recipes){

    recipesContainer.innerHTML = "";

    if(recipes.length === 0){
        recipesContainer.innerHTML = "<h2>No Recipe Found 😔</h2>";
        return;
    }

    recipes.forEach(item => {

        recipesContainer.innerHTML += `
        <div class="recipe-card">
            <img src="${item.image}" alt="${item.name}">

            <div class="recipe-content">
                <h2>${item.name}</h2>

                <p><strong>🍽 Cuisine:</strong> ${item.cuisine}</p>
                <p><strong>⭐ Rating:</strong> ${item.rating}</p>
                <p><strong>⏱ Time:</strong> ${item.cookTimeMinutes} mins</p>

                <p class="ingredients">
                    ${item.ingredients.slice(0,5).join(", ")}...
                </p>
            </div>
        </div>
        `;
    });
}