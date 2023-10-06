/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Christopher Vang",
    photo: "images/chrisimage.jpg",
    favoriteFoods: ["Rice" , "Beef" , "Pork"],
    hobbies: ["Eating Food" , "Playing Games" , "Playing Sports"],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: "Fresno, CA",
    length: "19 years",
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const image = document.querySelector("#photo");
image.setAttribute("src", myProfile.photo);
image.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((place) => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt)
})

myProfile.placesLived.forEach((length) => {
    let dd = document.createElement("dd");
    dd.textContent = length.length;
    document.querySelector("#places-lived").appendChild(dd);
})