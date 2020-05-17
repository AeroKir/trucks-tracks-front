/* eslint-disable global-require */
import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';

import PopupCommon from '../components/popup/PopupCommon';
import TooltipOnMap from '../components/tooltip/TooltipOnMap';

import drivers from '../database/drivers';
import commonMarker from '../assets/markers/commonMarker';
import { truckMarkerDrive, truckMarkerPause, truckMarkerBreakdown } from '../assets/markers/truckMarkers';

function DriversLayer() {
  const driversPosition = drivers.map((driver) => (
    <Marker
      key={driver.id}
      position={driver.currentPosition}
      icon={driver.driverStatus < 0 ? truckMarkerBreakdown : (driver.driverStatus === 0 ? truckMarkerDrive : truckMarkerPause)}
    >
      <PopupCommon
        headerContent={`${driver.firstName} ${driver.lastName}`}
        src={driver.avtarUrl}
        isBroken={driver.driverStatus < 0}
        isDriving={driver.driverStatus === 0}
        isStopped={driver.driverStatus > 0}
      />
      <TooltipOnMap tooltipContent={driver.firstName} />
    </Marker>
  ));
  return (
    <div>{driversPosition}</div>
  );
}

export default DriversLayer;
