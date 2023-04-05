import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination'

const Locations = () => {
const [loading, isLoading] = useState(false)
const [allLocations,setAllLocations] = useState([])
const [currentPage, setCurrentPage] = useState(1);
const [locationPerPage, setlocationPerPage] = useState(6);

useEffect(()=>{
  const getLocations = () =>{
    fetch("api/location",{
      method: "GET",
      headers:{
          jwt:`${localStorage.getItem("token")}` 
      },
    }).then((response)=>(response.json())).then((data)=>{
    if(data.error){
      console.log(data.error)
    }else{
      const {locations} = data
      setAllLocations(locations)
      }
    })
  }
  getLocations()
},[])

const lastLocationIndex = currentPage * locationPerPage;
console.log(`last location index ${lastLocationIndex}`)
const firstLocationIndex  = lastLocationIndex - locationPerPage;
var displayLocations;
if(allLocations){
displayLocations = allLocations.slice(firstLocationIndex,lastLocationIndex)
}
  return (
    <><div className='locations'>
      {loading ? <p>Loading..</p> : <>
        {displayLocations ? <>
          {displayLocations.map((item, index) => (
            <div className='places' key={index}>{item}</div>
          ))}

        </> :
          <>Loading locations...</>}
      </>}
    </div><div className='paginate'>
        <Pagination allLocations={allLocations} locationPerPage={locationPerPage} setCurrentPage={setCurrentPage} />
      </div></>
 )
}
export default Locations
