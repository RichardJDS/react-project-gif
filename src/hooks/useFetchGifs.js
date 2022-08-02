import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category)=>{
    //puede tener su estado  y podria indicar a otros componentes cuando debe de renderizarse
    // por que algo cambio
    const [state, setState] = useState({
        data:[],
        loading: true
    });
// los useEffect no pueden ser async ya que esperan algo sincrono
    useEffect(()=>{
        getGifs(category)
        .then(imgs =>{
            setState({
                data:imgs,
                loading: false
            });
        })
    },[category])

    // setTimeout(()=>{
    //     setState(
    //         {
    //             data:[1, 2, 4, 9],
    //             loading: false
    //         }
    //     )
    // },3000)
    return state;
}