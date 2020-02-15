import React from 'react';
import PropTypes from 'prop-types';

import classes from './button.module.scss';

import Icon from '../icon';

function Button({ icon, onClick, size = 'medium', color = 'white' }) {
  return (
    <button
      type="button"
      className={[classes.base, classes[size]].join(' ')}
      onClick={onClick}
    >
      <Icon className={classes[color]} icon={icon} />
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf('medium'),
  color: PropTypes.oneOf('white'),
};

export default Button;
