import { Link } from "react-router-dom";

export default function Nav() {
    return(
         <nav>
            <Link to="/"><img height="50px" width="50px" alt="home-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"/></Link>
            <Link to="/pokemon">Pokemon</Link>
            <Link to="/locations">Locations</Link>
            <Link to="/berries">Berries</Link>

        </nav>
        
    )
}