// components/ButtonPanel.tsx
import React from 'react';
import './ButtonPanel.css';
import Button from './Button';

interface ButtonPanelProps {
  handleClick: (button: string) => void;
}

const ButtonPanel: React.FC<ButtonPanelProps> = ({ handleClick }) => {
  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    'C', '0', '=', '/'
  ];

  return (
    <div className="button-panel">
      {buttons.map(button => (
        <Button key={button} label={button} onClick={handleClick} />
      ))}
    </div>
  );
};

export default ButtonPanel;
