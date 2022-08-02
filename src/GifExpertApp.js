import React from 'react'
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

// const [categories, setCategories] = useState(['One punch', 'Samurai x', 'Dragon Ball']);
const [categories, setCategories] = useState(['Paisaje']);


  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories ={setCategories}/>
    <hr />

    
    <ol>
        {
            categories.map((category) => {
                // return <li key={category}>{category}</li>;
                //<GifGrid category={category}/> si coloco asi como esta retorna un error
                // Each child in a list should have a unique "key" prop, ya que
                // en cada hijo de una lista debe de tener su key es por ello :
                 return <GifGrid 
                  key={category}
                  category={category}
                />

                // en la funciones flechas si el codigo se encuentra en la primera linea o segunda
                // el return es explicito pero si colocas varias linea despues tienes que especificar
                // el return es decir escribir el return
              })
        }
    </ol>
    </>
  )
}
