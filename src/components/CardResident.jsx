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
<<<<<<< Updated upstream
    <article className='card'>
        <header className='card__header'>
            <img className='card__img' src={resident?.image} alt="" />
=======
    <article className='card__principal'>
        <header>
            <img src={resident?.image} alt="" />
>>>>>>> Stashed changes
            <div>
                <div className='circle'></div>
                <span>{resident?.status}</span>
            </div>
        </header>
        <section>
            <h3>{resident?.name}</h3>
            <ul>
                <li><span>Specie:</span>{resident?.species}</li>
                <li><span>Origin:</span>{resident?.origin.name}</li>
                <li><span>Episodes where appear: </span>{resident?.episode.length}</li>
            </ul>
        </section>
    </article>
  )
}

export default CardResident