import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'



function App() {

  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  console.log("puppyList: ", puppyList);

  //You can log handleClick before the return state VS including inline

  //function handleClick() {
  
  //}

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log("FEATURED PUP:",featuredPup)
  
  return (
    <>
      <div className="App">
      { featPupId && <p>{ featPupId }</p> }  
        
      {puppies.map((puppy) => {
        
        return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name} </p>
      
      })
    }

     {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </div>    
    </>
  );
}

export default App
