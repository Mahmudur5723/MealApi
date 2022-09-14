
const searchFood = () => {

  //show spanning 

  spanningToggle("block");

  toggleSearchResult("none")

  const searchBox = document.getElementById("search-field");

  const searchInput = searchBox.value;

  searchBox.value = "";

  if (searchInput == "") {

    const parentOfErrorSection = document.getElementById("error-section");

    parentOfErrorSection.textContent = '';

    const h1 = document.createElement("h1");
    h1.innerText = "Please Enter A Food For Search";
    parentOfErrorSection.appendChild(h1);

   

  } else {
    const parentOfErrorSection = document.getElementById("error-section");
    parentOfErrorSection.textContent = "";

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;

    fetch(url)
      .then((Response) => Response.json())
      .then((data) => showFood(data.meals));
  }
};

const showFood = (food) => {

  console.log(food);

  const parentOfShowFoodSection = document.getElementById("showFoodParent");

  parent.textContent = "";

  if (food == null) {
    const parentOfErrorSection = document.getElementById("error-section");
    const h1 = document.createElement("h1");
    h1.innerText = "Please Enter Right Food For Search";
    parentOfErrorSection.appendChild(h1);

    
    
  }

  else
  {
     
  food.forEach((element) => {


    const div = document.createElement("div");

    div.setAttribute("class", "col");

    div.innerHTML = `
      <div onclick ="showMealId(${element.idMeal})" class="card h-100">
        <img src="${element.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.strMeal}</h5>
          <p class="card-text">${element.strInstructions.slice(0, 100)}</p>
        </div>
        <div class="card-footer">
            <div class="d-grid">
            <button type="button" class="btn btn-outline-success btn-block">ORDER NOW</button>
        </div>
        </div>
      </div>
   `;
    parentOfShowFoodSection.appendChild(div);
   
  });


  //show spanning 

  spanningToggle("none")

  toggleSearchResult("block")

  

  }

};

const showMealId = (mealId) =>
{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    fetch(url)
    .then(Response => Response.json())
    .then(data => showFoodDetails(data.meals[0]))

}

const showFoodDetails =(mealDetails) =>{

    const showFoodDetailSectionParent =document.getElementById("showFoodDetailSection");

    showFoodDetailSectionParent.textContent = '';

    const div = document.createElement("div");

    div.setAttribute("class","card cardStyle");

    div.innerHTML = `
    <img src="${mealDetails.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${mealDetails.strMeal}</h5>
      <p class="card-text">${mealDetails.strInstructions.slice(0,100)}</p>
    </div>
    <h4 class ="card-title p-3">Ingredient:</h4>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${mealDetails.strIngredient1}</li>
      <li class="list-group-item">${mealDetails.strIngredient2}</li>
      <li class="list-group-item">${mealDetails.strIngredient3}</li>
      <li class="list-group-item">${mealDetails.strIngredient4}</li>
      <li class="list-group-item">${mealDetails.strIngredient5}</li>
     
    </ul>
    <div class="card-body">
      
    <div class="d-grid">
    <button type="button" class="btn btn-outline-success btn-block"><a href="${mealDetails.strYoutube}" class="card-link">Go SomeWhere</a></button>
    </div>
     
    </div>`

    showFoodDetailSectionParent.appendChild(div);

}


const spanningToggle = value =>{

  const spanningSection = document.getElementById("spanning-section");

  spanningSection.style.display = value;

}

const toggleSearchResult = value =>
{

  const parentOfShowFoodSection = document.getElementById("show-food-section");

  parentOfShowFoodSection.style.display = value;

}

