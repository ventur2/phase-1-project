document.addEventListener("DOMContentLoaded", () => {
    
    
})
function getRecipes() {
    fetch("http://localhost:3000/recipes")
        .then(response => response.json())
        .then(response => response.forEach(recipe => {
            holdRecipes(recipe)
            hoveredRecipe(recipe)
        }
    ))
}
getRecipes()