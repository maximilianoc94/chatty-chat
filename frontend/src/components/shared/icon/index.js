import React from 'react';
import PropTypes from 'prop-types';
import types from './types';

const Icon = React.memo(function Icon({ icon, className = '' }) {
  const iconData = types[icon];
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={iconData.viewBox}
    >
      <path fill="currentColor" d={iconData.d} />
    </svg>
  );
});

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
