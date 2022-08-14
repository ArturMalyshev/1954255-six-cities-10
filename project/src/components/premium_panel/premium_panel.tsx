export default function PremiumPanel (status: boolean): JSX.Element | undefined {
  if (status) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  }
}
