import { ReviewArray } from '../../types/Offer';
import Review from './../../components/review/review';


export default function ReviewList (reviewArray: ReviewArray)
{
  let reviews = reviewArray.ReviewArray;

  if (reviews !== undefined) {
    reviews = [...reviews];
    reviews.sort( (a, b) => Number(new Date( b.date )) - Number(new Date( a.date )));

    const length = reviews.length;

    if (reviews.length > 10) {
      reviews = reviews.slice(0, 10);
    }

    return(
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ length }</span></h2>
        <ul className="reviews__list">
          {
            reviews.map( ( review ) => <Review info={ review } key={ review.id } /> )
          }
        </ul>
      </section>
    );
  }

  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">0</span></h2>
      <ul className="reviews__list" />
    </section>
  );
}
