import L from 'leaflet';
import marker from 'leaflet/dist/images/marker-icon.png';
import { useEffect } from 'react';
import { Card } from '../../lib/data';
import styles from './styles.module.scss';

export type ModalMapProps = Card['coord'];

const ModalMap = (props: ModalMapProps) => {
  useEffect(() => {
    const map = L.map('map').setView([props.lat, props.lng], 10);
    const defaultMarker = L.icon({
      iconUrl: marker.src,
      // half width and full height of marker
      iconAnchor: [12.5, 41],
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker([props.lat, props.lng], {
      icon: defaultMarker,
    }).addTo(map);
  }, [props.lat, props.lng]);

  return <div className={styles.container} id='map' />;
};

export default ModalMap;
