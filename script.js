function searchButton() {
    let ingredient = document.getElementById("recipe-name").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(result=> result.json())
    .then(data => {
        let recipes = data.meals;
        let container = document.getElementById("recipe-grid");
        container.innerHTML = "";
        recipes.forEach(meal => container.innerHTML += `
            <div class ="recipe-card" onclick="openPopup(${meal.idMeal})">
            <img src="${meal.strMealThumb}" alt= "Recipe-Image">
            <h3>${meal.strMeal}</h3>
            </div>`
        );
    });
};
function openPopup(mealID) {
fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
.then (result => result.json())
.then (data => {
    const recipe = data.meals[0];
    document.getElementById("popup-title").textContent = recipe.strMeal;
    document.getElementById("popup-instructions").textContent = recipe.strInstructions;
    document.getElementById("popup-box").style.display = "flex";
    document.getElementById("popup-img").src = recipe.strMealThumb;
})
}
function closePopup() {
    document.getElementById("popup-box").style.display = "none";
}