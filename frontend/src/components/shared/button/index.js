import React from 'react';
import PropTypes from 'prop-types';

import classes from './button.module.scss';

import Icon from '../icon';

function Button({
  icon,
  onClick,
  background,
  size = 'medium',
  color = 'white',
}) {
  return (
    <button
      type="button"
      className={[classes.base, classes[size], classes[background]].join(' ')}
      onClick={onClick}
    >
      <Icon className={classes[color]} icon={icon} />
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  background: PropTypes.string,
  size: PropTypes.oneOf('medium'),
  color: PropTypes.oneOf('white'),
  color: PropTypes.oneOf('white'),
};

export default Button;
