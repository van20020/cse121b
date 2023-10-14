// Define the API
const apiUrl = 'https://dog.ceo/api/breeds/image/random';

// DOM elements
const imageContainer = document.getElementById('imageContainer');
const fetchImageButton = document.getElementById('fetchImage');

// Event listener
fetchImageButton.addEventListener('click', () => {
    // Fetch a random dog image
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display the image in the DOM
            const imageUrl = data.message;
            imageContainer.innerHTML = `<img src="${imageUrl}" alt="Random Dog Image">`;
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });
});
