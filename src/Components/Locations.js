import { useEffect, useState } from "react"

const Locations = () => {
    const[locations, setLocations] = useState([]);
    const[show, setShow] = useState(false);

useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/location")
    .then(res=>res.json())
        .then(data=>{
            setLocations(data);
        })
}, [])

const handlePokeLocations =() =>{
    setShow(!show);
}

let locationArr = locations.map((location)=>{
    return <li>location.name</li>
})

return(
 <div className="location">
    <h1>List of Locations</h1>
    <button onClick={handlePokeLocations}>{show ? "Hide" : "Show"}Show Locations</button>
    {show &&
        <ul>
            {locationArr}
        </ul>
    }
 </div>
)
}

export default Locations;