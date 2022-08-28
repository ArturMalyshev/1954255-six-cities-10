import { ReviewArray } from '../../types/Offer';
import Review from './../../components/review/review';


export default function ReviewList (reviewArray: ReviewArray)
{
  let reviews = reviewArray.ReviewArray;
  let length = 0;

  if (reviews !== undefined) {
    reviews = [...reviews];
    reviews.sort( (a, b) => {
      if ( new Date( a.date ) > new Date( b.date ) ) {
        return -1;
      } else {
        return 1;
      }
    });

    if (reviews.length > 10) {
      reviews = reviews.slice(0, 11);
    }

    length = reviews.length;

    let keyId = 0;

    return(
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ length }</span></h2>
        <ul className="reviews__list">
          {
            reviews.map( ( review ) => {
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

  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{ length }</span></h2>
      <ul className="reviews__list" />
    </section>
  );
}
