import {onChangeCity} from '../../store/action';
import {CityArray} from '../../types/Offer';

export default function Cities (cityList: CityArray) {
  const city = cityList.currentCity;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cityList.cityArray.map(({name}) => (
            <li className="locations__item" key={name}>
              <a className={`locations__item-link tabs__item ${ city === name ? 'tabs__item--active' : '' }`} href="#" onClick={()=>cityList.dispatcher(onChangeCity({city: name}))} key={city}>
                <span>{name}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
