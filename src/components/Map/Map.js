import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MapStyles from './MapStyles';
import './Map.css';

const Map = withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{ lat: 52.517626, lng: 13.413054 }}
    defaultOptions={{ styles: MapStyles }}
  >
  {props.markers.map((marker) => (
      <Marker
        {...marker}
      />
    ))}
  </GoogleMap>
));

export default ({data}) => {
  const cities = [];
  const markers = [];
  let i;

  for (i = 0; i < data.length; i += 1) {
    data[i].cards.forEach((card) => {
      if (cities.indexOf(card.city) === -1) {
        markers.push({
          position: card.coord,
          key: card.city,
        });

        cities.push(card.city);
      }
    });
  }

  return (
    <div>
      <Map
        containerElement={
          <div className="mapContainer" />
        }
        mapElement={
          <div className="map" />
        }
        markers={markers}
      />
    </div>
  );
}
