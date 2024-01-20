/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Michael Olaoluwa";
let currentYear = "2024";
let ProfilePicture = "images/Picture.jpeg";



/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("year");
const imageElement = document.getElementById("profileImage");


/* Step 4 - Adding Content */

nameElement.innerHTML = "<strong>${Michael Olaoluwa}</strong>";
yearElement.textContent = currentYear;
imageElement.setAttribute('src', ProfilePicture);
imageElement.setAttribute('alt', `Profile image of {fullName}`);
foodElement.innerHTML += '<br>{favoriteFoods}';





/* Step 5 - Array */

favoriteFoods = ['Pizza', 'Beans', 'Rice', 'Burgers', 'Ice Cream'];
singleFavoriteFood = '';
favoriteFoods.push(anotherSingleFavoriteFood);
console.log(favoriteFoods);


//foodElement.textContent = 'My favorite foods: ' + favoriteFoods.join(', ');





