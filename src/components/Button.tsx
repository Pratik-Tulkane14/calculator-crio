// components/Button.tsx
import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  onClick: (label: string) => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="button" type='button' onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
