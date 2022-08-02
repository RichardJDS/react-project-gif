import React from 'react'

// export const GifGridItem = (props) => {

//     console.log(props)

//   return (
//     <div>
//         {/* {img.title} */}
//     </div>
//   )
// }

export const GifGridItem = ({id, title, url}) => {

    // console.log(id, title, url)

  return (
    <div className='card animate__animated animate__fadeIn'>
        {/* {img.title} */}
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}
