import { useLocation } from 'react-router-dom';

type premium = {
  premium: boolean
}

export default function PremiumPanel (data: premium) : JSX.Element | null {
  const { pathname } = useLocation();

  if (!data) {
    return null;
  }

  const premiumCn = pathname === '/' || pathname === '/favorites' ? 'place-card__mark' : 'property__mark';
  return (
    <div className={premiumCn}><span>Premium</span></div>
  );
}
