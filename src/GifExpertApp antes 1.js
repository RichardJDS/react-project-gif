import React from 'react'
import { useState } from 'react';

export const GifExpertApp = () => {
//const categorias = ['One punch', 'Samurai x', 'Dragon Ball'];// si quiero añadir mas elementos
// no lo podre realizar ya que no puedo mutar constantes}
// Como le digo a REACT QUE HUBO UN cambio en las categorias y que vuelva a redenrizar todo 
// el contenido de HTML <li/>
const [categories, setCategories] = useState(['One punch', 'Samurai x', 'Dragon Ball'])
// Cuando UTILIZAMOS SETcatgories y eso cambie , REACT va a renderizar el componente y aplicara los cambios
const handleAdd = ()=>{
    // categories.push('Anime');
    // console.log(categories);
    // ['One punch', 'Samurai x', 'Dragon Ball', 'Anime']
    // efectivamente añade el elemento al array catgories, por mas que esta definido como una constante
    // ya que si la referencia de memoria es una constante pero las propiedades si se pueden
    //MODIFICAR
    //setCategories('Hentai'); // los que hacemos con eso es crear un nuevo estado, un string donde no existe MAP
    //console.log(categories);// Al llamarse a la funcion de cualquier hook, directmente tiene como parametro
    // con nombre caterories es decir el objeto que va mutar
    setCategories([...categories, '86'])// solucion
    // otras solcion
    // setCategories(cats=> [...categories, '86']) sirve de igual manera ya que igual retorna un nuevo arreglo
}
    console.log(categories);

    

  return (
    <>
    <h2>GifExpertApp</h2>
    <hr />
    {/* {categorias} si lo realizo de esta manera imprime el contenido de manera unida, pero
    revisando el elemento HTML verificamos que los toma de manera separado
    categorias.map((category, i) map recive dos argumentos , el segundo es el indice.
    REACT requiere que en cada elemento de li hijos exista un key, esto es para que pueda
    identificar a ese elemento, pero NUNCA colocamos el indice del array como su key
    En key se coloca el IDE UNICO DEL ELEMENTO

    */} 
    <button onClick={handleAdd}>Agregar</button>
    <ol>
        {
            categories.map((category) => {
                return <li key={category}>{category}</li>;
            })
        }
    </ol>
    </>
  )
}
