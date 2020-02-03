const app               = document.querySelector('#app');
const getGifBtn         = document.querySelector('#getGif');
const imgRandomGif      = document.querySelector('#randomGif');
const imgRandomGifLink  = document.querySelector('#randomGif-container');

function getAndShowNewRandomGif() {
    removeRandomGif();
    getRandomGif();
};



function getRandomGif() {
    const url = 'https://api.giphy.com/v1/gifs/random?api_key=cRZXFakx9LE0r5Obsnt8ZeL7cSa9tofQ&tag=&rating=G';
    fetch(url)
        .then(rawData => rawData.json())
        .then(dataJson => showRandomGif(dataJson));
};

function removeRandomGif() {
    imgRandomGif.src = '';
    imgRandomGifLink.href = '';
};

function showRandomGif(dataJson) {
    let url = dataJson.data.image_original_url;
    imgRandomGif.src = url;
    imgRandomGifLink.href = url;
};

getGifBtn.addEventListener('click', getAndShowNewRandomGif);