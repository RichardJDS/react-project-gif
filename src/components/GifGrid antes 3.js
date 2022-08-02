import React from 'react'
import { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])


    const getGifs = async () => {

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
        setImages(gifs);
    }

    // getGifs();

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">


                {
                    // primera menera funciona
                    // images.map((img)=>{
                    //     return <li key ={img.id}>{img.title}</li>
                    // })
                    // segunda manera desestructurando
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                        // al utilizar el operador spread estoy enviando cada una de las imagenes como obejto de 
                        // manera independiente, y ya no como lo realiza el props , lo que hace es que 
                        // lo que enviamos lo encapsula en un objeto
                    ))
                }

            </div>
        </>
    )
}
