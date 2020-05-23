/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import { Marker } from 'react-leaflet';

import PopupCommon from '../components/popup/PopupCommon';
import TooltipOnMap from '../components/tooltip/TooltipOnMap';

import drivers from '../database/drivers';
import {
  truckMarkerDrive,
  truckMarkerPause,
  truckMarkerBreakdown,
} from '../assets/markers/truckMarkers';

const ENDPOINT_API_URL = process.env.REACT_APP_LOCATIONIQ_ENDPOINT_URL;
const API_KEY = process.env.REACT_APP_LOCATIONIQ_API_KEY;

function DriversLayer() {
  const [activeDriverCoordinates, setActiveDriver] = useState([]);
  const [driverCurrentLocation, setDriverCurrentLocation] = useState('');

  const API_URL = `${ENDPOINT_API_URL}/v1/reverse.php?key=${API_KEY}&lat=${activeDriverCoordinates[0]}&lon=${activeDriverCoordinates[1]}&format=json`;
  useEffect(() => {
    if (activeDriverCoordinates.length) {
      const fetchData = async () => {
        try {
          const response = await fetch(API_URL);
          const fetchedData = await response.json();
          setDriverCurrentLocation(fetchedData);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [API_URL, activeDriverCoordinates.length]);

  console.log(driverCurrentLocation);

  
  const driversPosition = drivers.map((driver) => (
    <Marker
      key={driver.id}
      position={driver.currentPosition}
      icon={
        driver.driverStatus < 0
          ? truckMarkerBreakdown
          : driver.driverStatus === 0
            ? truckMarkerDrive
            : truckMarkerPause
      }
      onClick={() => {
        setActiveDriver(driver.currentPosition);
      }}
    >
      <PopupCommon
        headerContent={`${driver.firstName} ${driver.lastName}`}
        secondaryHeaderContent={driver.vehicle}
        popupContent={`${driver.currentSpeed} km/h`}
        additionalPopupContent={driver.driverStatusExplanation.toUpperCase()}
        src={driver.avtarUrl}
        alt={`${driver.firstName} ${driver.lastName}`}
        isBroken={driver.driverStatus < 0}
        isDriving={driver.driverStatus === 0}
        isStopped={driver.driverStatus > 0}
        currentLocation={driverCurrentLocation.display_name}
        label={`Message to ${driver.firstName}`}
        id={driver.id}
      />
      <TooltipOnMap tooltipContent={driver.firstName} />
    </Marker>
  ));
  return <div>{driversPosition}</div>;
}

export default DriversLayer;
