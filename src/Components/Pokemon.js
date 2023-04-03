import { useEffect, useState } from "react"


const Pokemon = () =>{
    const [pokemons, setPokemons] = useState([]);
    const [pokemonInput, setPokemonInput] = useState("");
    const [pokeResult, setPokeResult] = useState(null);

    useEffect(() =>{
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res=>res.json())
        .then(data=>{
            setPokemons(data);
        })
    }, [])
    const handleCharacInput=(e)=> {
        setPokemonInput(e.target.value);
    }
        const handleSubmit=() => {
            let findPokemon = pokemons.find((poke)=>{
                return poke.name === pokemonInput;
            })
            setPokeResult(findPokemon);
        }  
    return(
        <div>
            <h1>Search for a Pokemon</h1>
            
            <input 
            placeholder="Find Your Pokemon"
            type="text"
            value={ pokemonInput }
            onChange={ handleCharacInput }
            />
            <button onClick={handleSubmit}>Submit</button>
            { pokeResult &&
                <h3>Name: {pokeResult.name}</h3>
                // <img height="50px" width="50px" src={pokeResult.sprites.front_default} />
                // <h3>ID {pokeResult.id} </h3>
           }


        </div>
    )
}

export default Pokemon;