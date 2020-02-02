const url = 'https://api.giphy.com/v1/gifs/random?api_key=cRZXFakx9LE0r5Obsnt8ZeL7cSa9tofQ&tag=&rating=G';
const app = document.querySelector('#app');

let data;

const request = fetch(url)
.then(data => {
    return data.json();
})
.then(dataJson => {
    data = dataJson;
    const img = document.createElement('img');
    img.src = data.data.image_original_url;
    app.append(img);
});

