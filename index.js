

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


function holdRecipes(recipe){ 
    
    const recipeContainer = document.querySelector("#recipe-container")
    const div = document.createElement("div")
    div.classList.add("recipe-card" + recipe.id)
    const h2 = document.createElement("h2")
    h2.classList.add("pClass")
    h2.innerText = recipe.name
    const p = document.createElement("p")
    p.innerText = recipe.description
    p.classList.add("pDescription" + recipe.id)
    p.classList.add("hide")
    const img = document.createElement("img")
    img.src = recipe.image
    img.classList.add("imgClass")
    const bttn = document.createElement("button")  
    bttn.classList.add("bttnClass")
    bttn.id = recipe.id
    bttn.textContent = "Like!"
    bttn.addEventListener("click", () => {
        alert("You just liked the recipe!")
    })
    div.append(h2,img,bttn,p)
    recipeContainer.append(div)


}
function hoveredRecipe (recipe) {
    document.querySelectorAll(".recipe-card" + recipe.id).forEach(hovered => {
        hovered.addEventListener("mouseenter", (e) => {
            const hovering = document.querySelector(".pDescription" + recipe.id)
            hovering.classList.add("display")
            hovering.classList.remove("hide")
        })
    hovered.addEventListener("mouseleave", (e) => {
            const hovering = document.querySelector(".pDescription" + recipe.id)
            hovering.classList.remove("display")
            hovering.classList.add("hide")
    })
})

}