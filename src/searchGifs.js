const app = document.querySelector('#app');
const searchBtn = document.querySelector('#searchButton');
const inputSearchRequest = document.querySelector('#searchRequest');
const inputAmountOfGifs = document.querySelector('#amountOfGifs');
const url = 'https://api.giphy.com/v1/gifs/search?api_key=cRZXFakx9LE0r5Obsnt8ZeL7cSa9tofQ&q=text&limit=25&offset=0&rating=G&lang=en';

let amountOfGifs = +inputAmountOfGifs.value;
let textForSearch;

function getAndShowGifs() {
    setTextForSearch();
    setAmountOfGifs();
    removeGifs();
    getGifs();
};

function getGifs() {
    const url = setUrl();
    fetch(url)
        .then(rawData => rawData.json())
        .then(dataJson => showGifs(dataJson));
};

function setUrl() {
    return `https://api.giphy.com/v1/gifs/search?api_key=cRZXFakx9LE0r5Obsnt8ZeL7cSa9tofQ&q=${textForSearch}&limit=${amountOfGifs}&offset=0&rating=G&lang=en`;
};

function setTextForSearch() {
    value = inputSearchRequest.value;
    try {
        if (!isEmpty(value)) {
            textForSearch = value;
        } else {
            throw 'String is empty!';
        }
    } catch (error) {
        console.error(error);
        inputSearchRequest.value = '';
    }
};

function showGifs(data) {
    for (let i = 0; i < amountOfGifs; i++) {
        const url = data.data[i].images.downsized_large.url;
        const title = data.data[i].title;
        const gifContainer = document.createElement('a');
        gifContainer.classList.add('gif-container');
        gifContainer.href = url;
        gifContainer.target = '_blank';

        const gif = document.createElement('img');
        gif.src = url;
        gif.title = title;

        gifContainer.append(gif);
        app.append(gifContainer);
    }
};

function removeGifs() {
    while (app.firstChild) {
        app.removeChild(app.firstChild);
    }
};


function setAmountOfGifs() {
    let value = +inputAmountOfGifs.value;
    try {
        if (!isNaN(value)) {
            amountOfGifs = value;
        } else {
            throw 'Not a number!';
        }
    } catch (error) {
        console.error(error);
        inputAmountOfGifs.value = '';
    }
};

function isEmpty(str) {
    if (str.trim() == '')
        return true;

    return false;
};

searchBtn.addEventListener('click', getAndShowGifs);
