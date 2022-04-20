export const getGifs = async (category) => {
    const apiKey = 'acTxFdQhQ8567StrJhP2WQvY6LO177vH';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts = data.map(({ id, title, images }) => {
        return {
            id,
            title,
            image: images?.downsized_medium.url
        }
    })
    console.log(gifts)
    return gifts;
}