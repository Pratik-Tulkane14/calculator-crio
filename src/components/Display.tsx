// components/Display.tsx
import React from 'react';
import './Display.css';

interface DisplayProps {
  input: string;
  result: string;
}

const Display: React.FC<DisplayProps> = ({ input, result }) => {
  return (
    <div className="display">
      <input type="text" className="input" value={input} readOnly></input>
      <div className="result">{result}</div>
    </div>
  );
};

export default Display;
