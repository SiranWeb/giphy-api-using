const app                   = document.querySelector('#app');
const inputAmountOfGifs     = document.querySelector('#amountOfGifs');
const refreshBtn            = document.querySelector('#refresh');

let amountOfGifs = 25;

function getAndShowGifs() {
    setAmountOfGifs();
    removeGifs();
    getGifs();
};

function removeGifs() {
    while (app.firstChild) {
        app.removeChild(app.firstChild);
    }
}

function setAmountOfGifs() {
    let value = +inputAmountOfGifs.value;
    try {
        if (!isNaN(value)) {
            amountOfGifs =  value;
        } else {
            throw 'Not a number!';
        }
    } catch (error) {
        console.error(error);
        inputAmountOfGifs.value = '';
    }
}

function getGifs() {
    const url = setFetchUrl();
    fetch(url)
        .then(rawData => rawData.json())
        .then(dataJson => showGifs(dataJson));
}

function setFetchUrl() {
    return `https://api.giphy.com/v1/gifs/trending?api_key=cRZXFakx9LE0r5Obsnt8ZeL7cSa9tofQ&limit=${amountOfGifs}&rating=G`;
}

function showGifs (data) {
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

refreshBtn.addEventListener('click', getAndShowGifs);

getAndShowGifs();