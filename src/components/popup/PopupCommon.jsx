import React from 'react';
import L from 'leaflet';
import { Popup } from 'react-leaflet';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Avatar from '../avatar/Avatar';
import Textarea from '../textarea/Textarea';
import Button from '../button/Button';

import './PopupCommon.css';

function PopupCommon({
  className, position, currentLocation, headerContent, src, alt, isBroken, isDriving, isStopped,
}) {
  const popupStyles = classNames(
    'leaflet-popup-content-wrapper leaflet-popup',
    className,
  );

  const popupContentStyles = classNames(
    'leaflet-popup-content',
  );

  const popupHeaderStyles = classNames(
    'Popup-header',
  );

  const popupAdditionalContentStyles = classNames(
    'Popup-additionalContent',
    {
      'Popup-additionalContent--redColor': isBroken,
      'Popup-additionalContent--greenColor': isDriving,
      'Popup-additionalContent--tawnyColor': isStopped,
    },
  );

  return (
    <Popup className={popupStyles} position={position}>
      <div className={popupContentStyles}>
        <header className={popupHeaderStyles}>
          <Avatar
            src={src}
            alt={alt}
            isBroken={isBroken}
            isDriving={isDriving}
            isStopped={isStopped}
          />
          <div className="Popup-content">
            <span className="Popup-span">Driver</span>
            <h1 className="Popup-mainHeading">{headerContent}</h1>
            <span className="Popup-span">Truck</span>
            <h2 className="Popup-secondaryHeading">Scania001</h2>
          </div>
          <div className="Popup-content">
            <span className="Popup-span">Current speed</span>
            <p className={popupAdditionalContentStyles}>0 km/h</p>
            <span className="Popup-span">Current status</span>
            <p className={popupAdditionalContentStyles}>Loading</p>
          </div>
        </header>
        <section className="Popup-section">
          <h3 className="u-visuallyHidden">Popup section</h3>
          <p>
            <span className="Popup-span">Last updated</span>
            <span>17:22 15-05-2020</span>
          </p>
          <p>
            <span className="Popup-span">Current location</span>
            <span>
              {currentLocation}
            </span>
          </p>
          <Textarea />
        </section>
        <footer className="Popup-footer">
          <Button buttonText="Send a message" />
          <Button buttonText="Cancel" secondaryButton />
        </footer>
      </div>
    </Popup>
  );
}

PopupCommon.propTypes = {
  className: PropTypes.string,
};

PopupCommon.defaultProps = {
  className: '',
};

export default PopupCommon;
