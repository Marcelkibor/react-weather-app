import React from 'react'

const Pagination = (props:any) => {
  const {locationPerPage} = props
  const {allLocations} = props
  const {setCurrentPage} = props
  let pages = [];
  for(let i = 1; i <=Math.ceil(allLocations.length/locationPerPage); i++){
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index)=>{
        return <button onClick={()=>{setCurrentPage(page)}} key={index}>{page}</button>
      })}
    </div>
  )
}
export default Pagination
