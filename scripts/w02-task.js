/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Christopher Vang"
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const profilePicture = "images/chrisimage.jpg"

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Image of ${fullName}`);

/* Step 5 - Array */
let foods = [
    "Rice",
    "Pork",
    "Beef",
]

foodElement.innerHTML = `<p>${foods}</p>`;

foods.push("Rice" , "Pork")
foodElement.innerHTML += `<br>${foods}`;

foods.shift();
foodElement.innerHTML += `<br>${foods}`;

foods.pop();
foodElement.innerHTML += `<br>${foods}`;

