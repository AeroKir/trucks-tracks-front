import L from 'leaflet';

const commonMarker = new L.Icon({
  iconUrl: require('./marker-icons/marker-common.svg'),
  iconSize: [50, 50],
});

export default commonMarker;
