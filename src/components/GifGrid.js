import React from 'react'
// import { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs(category).then(imgs => setImages(imgs));
    // }, [])

    const {data:images, loading} = useFetchGifs(category);
    



    // getGifs();

    return (
        <>
            <h3 className='card animate__animated animate__fadeIn'>{category}</h3>
            {/* {loading? 'Cargando...':'data cargada'} */}
            {loading && <p className='card animate__animated animate__flash'>Loading</p>}
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
