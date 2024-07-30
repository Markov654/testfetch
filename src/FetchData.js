import React, { useEffect, useState } from "react"
import './App.css';

function FetchData() {
  const [name,setName] = useState([]);

  useEffect(()=>{
    names()
  },[])

  const names = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users/');

    setName(await responce.json())
  }
  return(
    <div>
     
      <ol className="ol">

        {name.map((data, index )=> {
          return(

            <div className="mql">
              
             <li  key={index}>{data.name} </li>
             <li  key={index}> {data.username}</li>
             <li  key={index}> {data.email}</li>
             <li  key={index}> {data.address.street}</li>
             <li  key={index}> {data.address.suite}</li>
             <li  key={index}> {data.address.city}</li>
             <li  key={index}> {data.address.zipcode}</li>
             
             <li  key={index}> {data.address.geo.lat}</li>
             <li  key={index}> {data.address.geo.lng}</li>
             <li  key={index}> {data.phone}</li>
             <li  key={index}> {data.website}</li>
             <li  key={index}> {data.company.name}</li>
             <li  key={index}> {data.company.catchPhrase}</li>
             <li  key={index}> {data.company.bs}</li><br></br>
             
                 </div>                                          
           
           
         
          
          )
        })}
      </ol>
    </div>
  )

}

export default FetchData;