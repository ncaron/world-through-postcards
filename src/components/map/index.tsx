import React, {useEffect} from 'react';
import {Country} from '../../assets/data';
import {Container} from './styles';
import * as L from 'leaflet';
import marker from 'leaflet/dist/images/marker-icon.png';

interface MapProps {
  data: Country[];
}

const Map = (props: MapProps) => {
  const {data} = props;

  useEffect(() => {
    const map = L.map('mainMap').setView([52.517626, 13.413054], 3);
    const defaultMarker = L.icon({
      iconUrl: marker,
      // half width and full height of marker
      iconAnchor: [12.5, 41]
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    data.forEach((country) => {
      country.cards.forEach((card) => {
        L.marker([card.coord.lat, card.coord.lng], {
          icon: defaultMarker
        }).addTo(map);
      });
    });
  }, [data]);

  return <Container id='mainMap' />;
};

export default Map;
