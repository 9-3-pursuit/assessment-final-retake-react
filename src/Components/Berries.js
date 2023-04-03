import { useEffect, useState } from "react";

const Berries = () =>{
      const [berries, setBerries] = useState([]);
      const [berriesType, setBerriesType] = useState({});

      useEffect (()=>{
        fetch("https://pokeapi.co/api/v2/berry/")
        .then(res=>res.json())
        .then(data=>{
            setBerries(data);
        })
      }, [])

      handleChange  = (e)=>{
        let getBerry = berries.find((berry)=>{
            return berry.name === e.target.value;
        })  
        setBerriesType(getBerry);
      }

 <div className="berry">
    <h1>Select a Type</h1>
    <select onChange={handleChange}></select>
    <div className="berry-type-card">
        <ul>
            <il>{berriesType.name} </il>
            <il>{berriesType.firmness}</il>
        </ul>

    </div>

 </div>     
 }

export default Berries;