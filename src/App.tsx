// App.tsx
import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleClick = (button: string) => {
    if (button === '=') {
      calculate();
    } else if (button === 'C') {
      reset();
    } else {
      setInput(input + button);
    }
  };

  const calculate = () => {
    if (input === '' || /[\+\-\*\/]$/.test(input)) {
      setResult('Error');
      return;
    }

    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const reset = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="app">
      <Display input={input} result={result} />
      <ButtonPanel handleClick={handleClick} />
    </div>
  );
};

export default App;
