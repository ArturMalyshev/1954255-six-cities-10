import { SORT_BY_POPULAR, SORT_BY_PRICE_HIGH_TO_LOW, SORT_BY_PRICE_LOW_TO_HIGH, SORT_BY_RATE } from '../../mocks/offer';
import {SortType} from '../../types/Offer';
import {useAppDispatch} from './../../hooks/redux/redux';

export default function Sort(sortProps: SortType)
{
  const dispatcher = useAppDispatch();
  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active" tabIndex={0} onClick={()=>dispatcher(sortProps.changeSortAction({sortType: SORT_BY_POPULAR}))}>Popular</li>
        <li className="places__option" tabIndex={0} onClick={()=>dispatcher(sortProps.changeSortAction({sortType: SORT_BY_PRICE_LOW_TO_HIGH}))}>Price: low to high </li>
        <li className="places__option" tabIndex={0} onClick={()=>dispatcher(sortProps.changeSortAction({sortType: SORT_BY_PRICE_HIGH_TO_LOW}))}>Price: high to low</li>
        <li className="places__option" tabIndex={0} onClick={()=>dispatcher(sortProps.changeSortAction({sortType: SORT_BY_RATE}))}>Top rated first</li>
      </ul>
    </form>
  );
}
