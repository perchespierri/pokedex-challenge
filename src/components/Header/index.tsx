import pokemonLogo from "../../global/images/pokemonLogo.png"
import { Link } from "react-router-dom";
import "./style.css"

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img
          src={pokemonLogo} 
          alt="Pokemon" 
          className="pokemon-logo"  
        />
      </Link>
    </div>
  )
}

export default Header
