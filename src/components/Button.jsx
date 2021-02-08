import React from 'react';
import Icon from './Icon';

const Button = (props) => {
  const {
    text,
    type,
    icon
  } = props;

  return (
    <button
      className={`btn btn_${type}`}
      type={type}
    >
      {text}
      <Icon
        className={`btn-icon ${type}`}
        name={icon}
      />
    </button>
  );
};

export default Button;
