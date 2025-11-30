function searchButton() {
    let ingredient = document.getElementById("recipe-name").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then(result=> result.json())
    .then(data => {
        let recipes = data.meals;
        let container = document.getElementById("recipe-grid");
        container.innerHTML = "";
        recipes.forEach(meals => container.innerHTML += `
            <div class ="recipe-card" onclick="openPopup(${meals.idMeals})">
            <img src="${meals.strMealThumb} alt= "Recipe-Image">
            <h3>${meals.strMeals}</h3>
            </div>`
        );
    });
};
function openPopup(imageURL) {
    document.getElementById("popup-box").style.display = "flex";
    document.getElementById("popup-img").src = imageURL;
}
function closePopup() {
    document.getElementById("popup-box").style.display = "none";
}