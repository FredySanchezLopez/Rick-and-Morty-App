import React from 'react'

const LocationInfo = ({location}) => {
    console.log(location);
  return (
    <article className='card__location'>
        <h2>{location?.name}</h2>
        <ul className='ul__card__location'>
            <span>Type:</span><li>{location?.type}</li>
            <span>Dimension:</span><li>{location?.dimension}</li>
            <span>Population:</span><li>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo