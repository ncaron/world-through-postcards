import * as L from 'leaflet';
import marker from 'leaflet/dist/images/marker-icon.png';
import { useEffect } from 'react';
import { Card } from '../../lib/data';
import styles from './styles.module.scss';

interface MapProps {
  markers: Card['coord'][];
}

const Map = ({ markers }: MapProps) => {
  useEffect(() => {
    const map = L.map('mainMap').setView([52.517626, 13.413054], 3);
    const defaultMarker = L.icon({
      iconUrl: marker.src,
      // half width and full height of marker
      iconAnchor: [12.5, 41],
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    console.log(markers);

    markers.forEach((marker) => {
      L.marker([marker.lat, marker.lng], {
        icon: defaultMarker,
      }).addTo(map);
    });
  }, []);

  return <div className={styles.container} id='mainMap' />;
};

export default Map;
