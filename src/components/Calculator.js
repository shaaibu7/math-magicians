import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (btnName) => {
    setResult(calculate(result, btnName));
  };
  return (
    <div className="calculator">
      <div className="input">
        <input className="input data" type="text" value={result.next || result.total || '0'} />
      </div>

      <div className="keys">
        <button type="button" className="key" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" className="key" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" className="key" onClick={() => handleClick('%')}>%</button>
        <button type="button" className="calculate" onClick={() => handleClick('÷')}>&divide;</button>
      </div>

      <div className="keys">
        <button type="button" className="key" onClick={() => handleClick('7')}>7</button>
        <button type="button" className="key" onClick={() => handleClick('8')}>8</button>
        <button type="button" className="key" onClick={() => handleClick('9')}>9</button>
        <button type="button" className="calculate" onClick={() => handleClick('x')}>x</button>
      </div>

      <div className="keys">
        <button type="button" className="key" onClick={() => handleClick('4')}>4</button>
        <button type="button" className="key" onClick={() => handleClick('5')}>5</button>
        <button type="button" className="key" onClick={() => handleClick('6')}>6</button>
        <button type="button" className="calculate" onClick={() => handleClick('-')}>-</button>
      </div>

      <div className="keys">
        <button type="button" className="key" onClick={() => handleClick('1')}>1</button>
        <button type="button" className="key" onClick={() => handleClick('2')}>2</button>
        <button type="button" className="key" onClick={() => handleClick('3')}>3</button>
        <button type="button" className="calculate" onClick={() => handleClick('+')}>+</button>
      </div>

      <div className="keys">
        <button type="button" className="key zero" onClick={() => handleClick('0')}>0</button>
        <button type="button" className="key" onClick={() => handleClick('.')}>.</button>
        <button type="button" className="calculate" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
};
export default Calculator;
