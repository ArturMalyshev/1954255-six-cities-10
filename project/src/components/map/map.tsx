import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from './../../hooks/useMap/useMap';
import {Points, Point} from './../../types/Map';
import 'leaflet/dist/leaflet.css';
import { useLocation } from 'react-router-dom';

const defaultMapPosition = {
  latitude: 52.3809553943508,
  longitude: 4.939309666406198,
  zoom: 10,
};

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


type MapProps = {
  points: Points;
  selectedPoint: Point | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export default function Map(props: MapProps): JSX.Element {
  const {points, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, defaultMapPosition);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  if (useLocation().pathname === '/') {
    return <div className="cities__map" ref={mapRef}></div>;
  } else {
    return <div className="property__map map" ref={mapRef}></div>;
  }
}
