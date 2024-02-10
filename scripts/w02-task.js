/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Michael Olaoluwa";
let currentYear = "2024";
let ProfilePicture = "images/Picture.jpeg";



/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const foodElement2 = document.getElementById("food2");
const foodElement3 = document.getElementById("food3");
const foodElement4 = document.getElementById("food4");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("profileImage");


/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', ProfilePicture);
imageElement.setAttribute('alt', `Profile image of {fullName}`);






/* Step 5 - Array */

favoriteFoods = ['Pizza', 'Beans', 'Rice', 'Burgers', 'Ice Cream'];
let value = '';
console.log(`aaa`,favoriteFoods);
for (let index = 0; index < favoriteFoods.length; index++) {
    value += favoriteFoods[index] + `,`;
    
}
value += `<br/>`
foodElement.innerHTML = value ;
value =""
singleFavoriteFood = 'stew';

favoriteFoods.push(singleFavoriteFood);
for (let index = 0; index < favoriteFoods.length; index++) {
    value += favoriteFoods[index] + `,`;
    
}
value += `<br/>`
foodElement2.innerHTML = value ;

value =""
favoriteFoods = ['Pizza', 'Beans', 'Rice', 'Burgers', 'Ice Cream']
favoriteFoods.pop();
for (let index = 0; index < favoriteFoods.length; index++) {
    value += favoriteFoods[index] + `,`;
    
}
value += `<br/>`
foodElement3.innerHTML = value ;

value =""

favoriteFoods = ['Pizza', 'Beans', 'Rice', 'Burgers', 'Ice Cream']
favoriteFoods.shift();
for (let index = 0; index < favoriteFoods.length; index++) {
    value += favoriteFoods[index] + `,`;
    
}
value += `<br/>`
foodElement4.innerHTML = value ;



//foodElement.textContent = 'My favorite foods: ' + favoriteFoods.join(', ');





