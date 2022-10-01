import React from 'react'

const FilterList = ({suggedList,setSearchInput}) => {
    const handlClick = id => setSearchInput(id)
  return (
    <div>FilterList
        <ul>
           <li onClick={() => handlClick(location.id) }></li>
        </ul>
    </div>
  )
}

export default FilterList
