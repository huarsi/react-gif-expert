export const getGifs = async( category ) => {
    // Se usaron este tipo de comillas ``, en vez de estas '' para poder poner el build category en el link
    const url = `https://api.giphy.com/v1/gifs/search?api_key=IPZJXaoUc1NDmcFRb6JRA8484PmY1V5p&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
  
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
  
    // console.log(gifs);
    return gifs;
  
  }