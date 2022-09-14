const searchFood = () => {
  const searchFood = document.getElementById("search-field");

  const searchInput = searchFood.value;

  searchFood.value='';

  if (searchInput == '') {

     console.log("please write something to display");

    
  }

  else
  {


    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
  
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => showSearchResult(data.meals))

  }

 
  

    

};

const showSearchResult = (meals) => {

    const parent =document.getElementById("search-result");

    parent.textContent ='';

    if (meals == null) {

       const foodResultBox =document.getElementById("foodResultBox");

       const h1 =document.createElement("h1");

       h1.setAttribute("class","diplayMes");

       h1.innerText = "The search is not Found"

       foodResultBox.appendChild(h1);
        
    }
    else
    {
        meals.forEach((element) => {


            const newDiv = document.createElement("div");
        
            newDiv.setAttribute("class", "col");
        
            newDiv.innerHTML =`
                <div onclick="loadMealDetails(${element.idMeal})" on class="card h-100">
                <img id="food-img" src="${element.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 id="food-title" class="card-title">${element.strMeal}</h5>
                  <p id="food-details" class="card-text">${element.strInstructions.slice(0,100)}</p>
                </div>
                <div class="card-footer">
                <div class="d-grid gap-2 d-md-block">
                  <button class="btn btn-outline-primary" type="button">Order Now </button>
                </div>
                </div>
              </div>
            </div>`;
        
            parent.appendChild(newDiv);
        
        
            
          });
    }

 
};
 const loadMealDetails = (mealId) =>{
   
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

   fetch(url)
   .then(Response => Response.json())
   .then(data => showMealsDetails(data.meals[0]))
   .catch(Error => console.log(Error))

 }


const showMealsDetails =meal =>{

    
    const mealDetailsDiv = document.getElementById("mealsDetails");

    mealDetailsDiv.textContent = '';

    const div = document.createElement("div");

    div.setAttribute("class","card cardTwo");

    div.innerHTML = `
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go SomeWhere</a>
        </div>
    `

    mealDetailsDiv.appendChild(div)

} 
 
