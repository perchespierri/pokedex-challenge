import { Link } from 'react-router-dom';
import { capitalizeString } from '../../global/functions';

interface CardProp {
  name: string
}

const Card = ({ name }: CardProp) => {

  return (
      <Link to={`/pokemon/${name}`}>
        {capitalizeString(name)}
      </Link>
  );
};

export default Card;
