import React from 'react'
import { useState, useEffect } from 'react'

export const GifGrid = ({category}) => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        getGifs();
    }, [])
    // useEffect((funcion a ejecutar), (arreglo de dependencias))
    //  si mandamos en vacio el arreglo de dependencias el useeffect solo se va a ejecutar una unica vez
    // solo se ejecute cuando el componente es renderizado la primera vez

    const getGifs = async ()=>{
        

        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=zeQ3rD0zNPcA918L0iefw2byjQUE7VKM';
        // si marca el error Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position significa 
        // que el link esta mal
        const resp = await fetch(url);
        const {data} = await resp.json();
        const gifs = data.map(img =>{
            return{
                id: img.id,
                title: img.title,
                // url: img.images.downsized_medium.url funcion de esa manera pero si queremos verificar que esas
                // imagenes tienen una url colocamos ese signo de interrogacion images?
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
    }

    // getGifs();

  return (
    <div>
        <h3>{category}</h3>
        <h3>{count}</h3>
        <button onClick={()=>{setCount(count + 1)}}></button>
        {/* cuando hacemos click se observa que cada vez se renderiza todo el componente GifGRid
        eso incluye la funcion async que creamos con los objetos de peticion HTTP, es decir ejecuta getGifs();

        y si adiciono para renderizar las fotos de la misma manera lo aplica hace una rerenderizacion del componente.
        PARA SOLUCUIONAR usamos el hooks USEEFFECT, que me permite ejecutar cierto codigo de manera condicional
        */}
    </div>
  )
}
