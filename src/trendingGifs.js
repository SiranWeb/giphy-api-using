const app = document.querySelector('#app');

const url = 'https://api.giphy.com/v1/gifs/trending?api_key=cRZXFakx9LE0r5Obsnt8ZeL7cSa9tofQ&limit=25&rating=G';
fetch(url)
    .then(rawData => rawData.json())
    .then(dataJson => showGifs(dataJson));


let amounOfGifs = 25;    

function showGifs (data) {
    for (let i = 0; i < amounOfGifs; i++) {
        const url = data.data[i].images.downsized_large.url;
        const title = data.data[i].title;
        console.log(url);
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
}