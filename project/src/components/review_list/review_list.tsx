import { ReviewArray } from './../../types/Offer';
import Review from './../../components/review/review';


export default function ReviewList (reviewArray: ReviewArray)
{
  reviewArray.ReviewArray.sort( (a, b) => {
    if ( new Date( a.date ) > new Date( b.date ) ) {
      return -1;
    } else {
      return 1;
    }
  });

  if (reviewArray.ReviewArray.length > 10) {
    reviewArray.ReviewArray = reviewArray.ReviewArray.slice(0, 11);
  }

  let keyId = 0;

  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ reviewArray.ReviewArray.length }</span></h2>
      <ul className="reviews__list">
        {
          reviewArray.ReviewArray.map( ( review ) => {
            keyId += 1;
            return (
              <Review info={ review } key={ keyId } />
            );
          })
        }
      </ul>
    </section>
  );
}
