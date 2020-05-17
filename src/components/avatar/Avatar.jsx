import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../image/Image';

import './Avatar.css';

function Avatar({
  src,
  alt,
  className,
  isBroken,
  isDriving,
  isStopped,
}) {
  const avatarClasses = classNames(
    'Avatar',
    className,
    {
      'Avatar--redBorder': isBroken,
      'Avatar--greenBorder': isDriving,
      'Avatar--tawnyBorder': isStopped,
    },
  );
  return (
    <div>
      <Image src={src} alt={alt} className={avatarClasses} />
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  isBroken: PropTypes.bool,
  isDriving: PropTypes.bool,
  isStopped: PropTypes.bool,
};

Avatar.defaultProps = {
  className: '',
  isBroken: false,
  isDriving: false,
  isStopped: false,
};

export default Avatar;
