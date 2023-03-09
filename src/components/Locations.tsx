import React, { useEffect, useState } from 'react'

const Locations = () => {
    const[locations,setLocations] = useState([] as any);
    const [loading,isLoading] = useState(false);
    useEffect(()=>{
        isLoading(true)
        fetch("api/location",{
            method: "GET",
            headers:{
               jwt:`${localStorage.getItem("token")}` 
            },
        }).then((response)=>(response.json())).then((data)=>{
            if(data.error){
                console.log(data.error)
            }else{
                setLocations(data)
            }
        })
        isLoading(false)
    },[])

  return (
    <div>
        {loading?<p>Loading..</p>:<>
        {locations?.locations?<>
        <p>Locations available:
            </p>
         {
          locations?.locations.map((item: string, index:any) => (
            <div key={index}>{item}</div>
          ))  
         }
            </>:
            <>Loading locations...</>}
        </>}
    </div>
  )
}

export default Locations