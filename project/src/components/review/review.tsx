import { ReviewType } from './../../types/Offer';

type reviewData = {
  info: ReviewType
}

export default function Review ( reviewData: reviewData )
{
  const stars = `${reviewData.info.stars * 20}%`;

  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={ reviewData.info.avatar } width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{ reviewData.info.name }</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: stars}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          { reviewData.info.text }
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{ reviewData.info.date }</time>
      </div>
    </li>
  );
}
