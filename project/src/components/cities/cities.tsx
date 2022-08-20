import {changeCity} from '../../store/action';
import {CityArray} from '../../types/Offer';

export default function Cities (cityList: CityArray) {
  const city = cityList.currentCity;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cityList.cityArray.map((cityName) => (
            <li className="locations__item" key={cityName.name}>
              <a className={`locations__item-link tabs__item ${ city === cityName.name ? 'tabs__item--active' : false }`} href="#" onClick={()=>cityList.dispatcher(changeCity({city: cityName.name}))} key={city}>
                <span>{cityName.name}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
