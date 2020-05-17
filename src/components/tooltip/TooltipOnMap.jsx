import React from 'react';
import { Tooltip } from 'react-leaflet';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TooltipOnMap.css';

function TooltipOnMap({ tooltipContent }) {
  return (
    <Tooltip className="TooltipOnMap" permanent direction="right">
      {tooltipContent}
    </Tooltip>
  );
}

export default TooltipOnMap;
