export const getGifs = async (category) => {

    // encodeURI escapa los espacion colocando + o %20 , para que pueda solicitarlo de manera correcta
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=zeQ3rD0zNPcA918L0iefw2byjQUE7VKM`;
    // si marca el error Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position significa 
    // que el link esta mal
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            // url: img.images.downsized_medium.url funcion de esa manera pero si queremos verificar que esas
            // imagenes tienen una url colocamos ese signo de interrogacion images?
            url: img.images?.downsized_medium.url
        }
    })
    console.log(gifs);
    return gifs;
}