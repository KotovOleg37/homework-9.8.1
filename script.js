async function getAndDisplayCatImages() {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=10';
    try {
        const response = await fetch(url); 
        const data = await response.json(); 
        const galleryElement = document.querySelector('.gallery');
        galleryElement.innerHTML = '';

        data.forEach((cat) => {
            const imageElement = document.createElement('img');
            imageElement.src = cat.url;
            imageElement.alt = 'Cat';
            galleryElement.appendChild(imageElement);
        });
    } catch (error) {
        console.error('Error fetching cat images:', error);
    } finally {
        document.querySelector('.loader').style.display = 'none';
    }
}

document.querySelector('.loadButton').addEventListener('click', (event) => {
    event.preventDefault(); 
    document.querySelector('.loader').style.display = 'block';
    getAndDisplayCatImages(); 
});
