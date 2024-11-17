import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, className }) => {
  return (
    <button 
      onClick={onClick} 
      className={className} 
      style={{ padding: "10px 15px", fontSize: "1rem" }}
    >
      {label}
    </button>
  );
};

// Prop validation
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "btn btn-primary",
};

export default Button;
