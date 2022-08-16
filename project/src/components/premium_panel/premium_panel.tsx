import { useLocation } from 'react-router-dom';

type premium = {
  premium: boolean
}

export default function PremiumPanel (data: premium) : JSX.Element | null {
  const location = useLocation().pathname;

  if (data) {
    if (location === '/' || location === '/favorites') {
      return ( <div className="place-card__mark"><span>Premium</span></div> );
    } else {
      return ( <div className="property__mark"><span>Premium</span></div> );
    }
  } else {
    return null;
  }
}
