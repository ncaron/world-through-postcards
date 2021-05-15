import * as L from 'leaflet';
import marker from 'leaflet/dist/images/marker-icon.png';
import React, {useEffect} from 'react';
import {Card} from '../../assets/data';
import {Container} from './styles';

interface ModalMapProps {
  data: Card;
}

const ModalMap = (props: ModalMapProps) => {
  const {data} = props;

  useEffect(() => {
    const map = L.map('map').setView([data.coord.lat, data.coord.lng], 10);
    const defaultMarker = L.icon({
      iconUrl: marker,
      // half width and full height of marker
      iconAnchor: [12.5, 41]
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([data.coord.lat, data.coord.lng], {
      icon: defaultMarker
    }).addTo(map);
  }, [data]);

  return <Container id='map' />;
};

export default ModalMap;
