import React from 'react'
import { useState } from 'react'
import  PropTypes  from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState(''); //useState(); eso es undefined
    const handleInputChange = (e)=>{
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log('sUBMIT HECHO');
        if(inputValue.trim().length > 2){// se borra los espacion en blanco antes y despues y que
          // sea mayor a dos letras y luegi hace la insercion
          setCategories(cats=> [inputValue, ...cats]);
          // luego lo borro para que no se repitan los estados
          setInputValue('');
        }
    }

  return (
    <form onSubmit={handleSubmit}>
    {/* <h1>{inputValue}</h1>  De esta manera puede ver que el estado de inputValue 
    cambia a medida que se dispara el evento
    EL FRAGMENT <> </> sirve para agrupar ELEMENTOS HTML
    UTILIZANDO FORM ya es un elemento que agrupa todos los elementos en su contenido
    por lo cual ya no es necesario el fragment <> </>
    pero si solo lo encierro en el elemento <form></form> cuando presiono enter refresca la pagina

    
    */}
    <input
        type="text"
        value={inputValue}
        onChange = {handleInputChange}
    />
    </form>
  )
}

AddCategory.propTypes ={
  setCategories: PropTypes.func.isRequired
}
