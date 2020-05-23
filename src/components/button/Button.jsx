import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.css';

function Button({
  className, onClick, disabled, centered, visible, buttonText, secondaryButton,
}) {
  const onClickAction = (e) => {
    if (disabled) {
      e.preventDefault();
    }
    return onClick(e);
  };

  const buttonDesign = classNames(
    'Button',
    className,
    {
      'is-disabled': disabled,
      'is-centered': centered,
      'is-visible': visible,
      'Button--secondary': secondaryButton,
    },
  );

  return (
    <button
      className={buttonDesign}
      type="submit"
      onClick={onClickAction}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  centered: PropTypes.bool,
  visible: PropTypes.bool,
  buttonText: PropTypes.string,
  secondaryButton: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  onClick: () => { },
  disabled: false,
  centered: false,
  visible: true,
  buttonText: 'Button',
  secondaryButton: false,
};

export default Button;
