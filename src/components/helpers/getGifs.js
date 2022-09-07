    const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=FNeJgaIu7cNgoB0LBMSIEu1C84ohAeuv=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url
    }));
    
    return gifs;
}

export default getGifs;