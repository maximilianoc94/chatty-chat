import React from 'react';
import PropTypes from 'prop-types';

import classes from './button.module.scss';

import Icon from '../shared/icon';

function Button({ icon, onClick, size = 'medium', color = 'white' }) {
  return (
    <div className={[classes.base, classes[size]].join(' ')} onClick={onClick}>
      <Icon className={classes[color]} icon={icon} />
    </div>
  );
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  onCLick: PropTypes.func,
  size: PropTypes.string,
};

export default Button;
