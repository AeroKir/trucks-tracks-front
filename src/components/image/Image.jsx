import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.css';

function Image({ src, alt, className }) {
  const imageClasses = classNames(
    'Image',
    className,
  );
  return (
    <img src={src} alt={alt} className={imageClasses} />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Image.defaultProps = {
  className: '',
};

export default Image;
