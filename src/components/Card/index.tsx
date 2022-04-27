import { capitalizeString } from '../../global/functions';
import "./style.css";

interface CardProp {
  name: string
}

const Card = ({ name }: CardProp) => {

  return (
    <li className="pokemon-card">
      {capitalizeString(name)}
    </li>  
  );
};

export default Card;
