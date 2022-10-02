import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardResident = ({url}) => {
    //Hacer una petición a la API
    const [resident, setResident] = useState()

    useEffect(() => {
      axios.get(url)
        .then(res => setResident(res.data))
        .catch(err => console.log(err))
    }, [])
    
console.log(resident)

  return (
    <article className='card__principal'>
        <header className='header'>
            <img className='cart__img' src={resident?.image} alt="" />
            <div className='cart__status'>
                <span className='span'>{resident?.status}</span>
            </div>
                <div className={`circle ${resident?.status}`}></div>
                
        </header> 
  
        <section className='cart__info'>
            <h3 className='cart__name'>{resident?.name}</h3>   
            <ul className='ul'>
 
                <span>Specie</span><li>{resident?.species}</li>
                <span>Origin</span><li>{resident?.origin.name}</li>
                <span>Episodes where appear</span><li>{resident?.episode.length}</li>
            </ul>
        </section>
    </article>
  )
}

export default CardResident