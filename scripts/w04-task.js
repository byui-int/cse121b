/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    
    name: "Michael Olaoluwa",
    photo: "images/Picture.jpeg",
    
    favoriteFoods: [
            "Rice&Beans",
            "Pizza",
            "Spaghetti",
            "Macaroni",
            "Chicken&Chips",
            "Plantain"
        ],
        
    hobbies: [
        "Reading",
        "Swimming",
        "Traveling",
        "Dancing",
        "Singing",
        "Football"
    ],
    placesLived: []

};


/* Populate Profile Object with placesLive objects */

;

myProfile.placesLived.push(
    {
        place: "Lagos, Nigeria",
        length: "10 year"
        
    }
);

myProfile.placesLived.push(
    {
        place: "Ibadan, Nigeria",
        length: "5 year"

    }
);



/* DOM Manipulation - Output */

document.querySelector("#name").textContent = myProfile.name;

/* Name */

document.querySelector("#photo").alt = myProfile.name;

/* Photo with attributes */

document.querySelector("#photo").src = myProfile.photo;



/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food=> {
    let li = document.createElement("li");
    li.textContent = food;
    
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */

myProfile.hobbies.forEach(hobby=> {
    let ul = document.createElement("li")
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);

});


/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    console.log("pat", place)
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dd);

});