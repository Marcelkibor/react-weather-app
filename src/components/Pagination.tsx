import React from 'react'

const Pagination = (allLocations:any,locationPerPage:any) => {
  let pages = [];
  for(let i = 1; i<=Math.ceil(allLocations/locationPerPage); i++){
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index)=>{
        return <button key={index}>{page}</button>
      })}
    </div>
  )
}

export default Pagination
