const getImage = async () => {
    try {
        const apiKey = 'd3euxrgy4Um59XUngA1tD8mVoROeHke7';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (e) {
        // manajo del error
        console.error(e)
    }
}
getImage()

// const apiKey = 'd3euxrgy4Um59XUngA1tD8mVoROeHke7';
// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
// peticion
//     .then(resp => resp.json())
//     .then(({data}) => {
//             const {url} = data.images.original
//             console.log(url)
//             const img = document.createElement('img');
//             img.src=url;
//             document.body.append(img);
//     })
//     .catch(console.warn);