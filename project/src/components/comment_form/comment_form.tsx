import React, { useState } from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/redux/redux';
import {setCommentAction} from '../../store/api-action';
import {SetCommentType} from '../../types/Offer';
import {useParams} from 'react-router-dom';
import {CommentFormState} from '../../mocks/offer';

function FormHandler (content: {stars: number, text: string}, formState: string) {
  return (content.text.length < 50 || content.text.length > 300) || content.stars === 0 || ( formState !== CommentFormState.Ready && formState !== CommentFormState.Error );
}

function SetComment (commentData: SetCommentType, dispatcher: CallableFunction) {
  dispatcher(setCommentAction(commentData));
}

function ErrorHandler (formState: string) {
  if (formState === CommentFormState.Error) {
    return 'red';
  }

  return 'default';
}

export default function CommentForm (commentFormState: {state: string}): JSX.Element {
  const [content, setContent] = useState({stars: 0, text: ''});
  const userConf = useAppSelector((state) => state.authorizationStatus );
  const dispatcher = useAppDispatch();
  const { id } = useParams();

  if (userConf && id) {

    return(
      <form
        className="reviews__form form"
        action="#"
        method="post"
        style={{marginBottom: '50px'}}
        onSubmit={
          (evt) => {
            evt.preventDefault();
            SetComment({comment: content.text, rating: content.stars, offerId: Number(id)}, dispatcher);
            if ( commentFormState.state === CommentFormState.Ready ) {
              setContent({stars: 0, text: ''});
            }
          }
        }
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" checked={ content.stars === 5 } id="5-stars" type="radio" onChange={ (event) => setContent( {stars: parseInt(event.target.value, 10), text: content.text} )} />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" value="4" checked={ content.stars === 4 } id="4-stars" type="radio" onChange={ (event) => setContent( {stars: parseInt(event.target.value, 10), text: content.text} )} />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" value="3" checked={ content.stars === 3 } id="3-stars" type="radio" onChange={ (event) => setContent( {stars: parseInt(event.target.value, 10), text: content.text} )} />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" value="2" checked={ content.stars === 2 } id="2-stars" type="radio" onChange={ (event) => setContent( {stars: parseInt(event.target.value, 10), text: content.text} )} />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
          <input className="form__rating-input visually-hidden" name="rating" value="1" checked={ content.stars === 1 } id="1-star" type="radio" onChange={ (event) => setContent( {stars: parseInt(event.target.value, 10), text: content.text} )} />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          value={ content.text }
          placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={ (event) => setContent({stars: content.stars, text: event.target.value}) }
          style={{borderColor: ErrorHandler(commentFormState.state)}}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={ FormHandler(content, commentFormState.state) }>Submit</button>
        </div>
      </form>
    );
  }

  return <div />;

}
