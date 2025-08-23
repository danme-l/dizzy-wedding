import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import images so bundler resolves URLs
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

import { useConfig } from '../../ConfigContext';

// Create a proper icon object
const defaultIcon = new L.Icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// hotel alt coordinates: [45.493007, -73.557359]
// la toundra coordinates: 45.503694, -73.529585

const MapComponent = ({coords}) => {
  const config = useConfig();

  return (
    <MapContainer center={[45.503694, -73.529585]} zoom={13} style={{ height: '400px', width: '75%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[config.wedding.venue.coordinates.lat, config.wedding.venue.coordinates.long]} icon={defaultIcon}>
        <Popup>
          {config.wedding.venue.name}
        </Popup>
      </Marker>
       <Marker position={[config.wedding.hotel.coordinates.lat, config.wedding.hotel.coordinates.long]} icon={defaultIcon}>  
        <Popup>
          {config.wedding.hotel.name}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;