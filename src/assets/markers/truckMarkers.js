import L from 'leaflet';

export const truckMarkerDrive = new L.Icon({
  iconUrl: require('./marker-icons/marker-truck-drive.svg'),
  iconSize: [35, 35],
  iconAnchor: [20, 34],
  popupAnchor: [-3, -30],
});

export const truckMarkerPause = new L.Icon({
  iconUrl: require('./marker-icons/marker-truck-pause.svg'),
  iconSize: [35, 35],
  iconAnchor: [20, 34],
  popupAnchor: [-3, -30],
});

export const truckMarkerBreakdown = new L.Icon({
  iconUrl: require('./marker-icons/marker-truck-breakdown.svg'),
  iconSize: [35, 35],
  iconAnchor: [20, 34],
  popupAnchor: [-3, -30],
});
