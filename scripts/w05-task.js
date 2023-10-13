
/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName; // Corrected property name

        const img = document.createElement("img");
        img.src = temple.imageUrl; // Corrected property name

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch() */
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
async function getTemples() { // Renamed the function
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        templeList.push(...data); // Populate the templeList array
        displayTemples(templeList); // Display the temples
    }
}

/* reset Function */
const reset = () => {
    const templesElement = document.getElementById('temples'); // Corrected ID
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
};

/* sortBy Function */
const sortBy = (temples) => {
  reset();

  const filter = document.getElementById('sortBy').value;

  switch (filter) {
    case 'utah':
      displayTemples(temples.filter(temple => temple.location.includes('Utah')));
      break;
    case 'notutah':
      displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
      break;
    case 'older':
      displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case 'all':
      displayTemples(temples);
      break;
    default:
      console.error('Invalid filter value');
  }
};

getTemples(); // Call the getTemples function

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });
