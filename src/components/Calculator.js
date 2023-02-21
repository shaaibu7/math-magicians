import React from 'react';

function Calculator() {
  return (
    <div className="calculator">
      <div className="input">
        <p className="data">0</p>
      </div>

      <div className="keys">
        <button type="button" className="key">AC</button>
        <button type="button" className="key">+/-</button>
        <button type="button" className="key">%</button>
        <button type="button" className="calculate">+</button>
      </div>

      <div className="keys">
        <button type="button" className="key">7</button>
        <button type="button" className="key">8</button>
        <button type="button" className="key">9</button>
        <button type="button" className="calculate">%</button>
      </div>

      <div className="keys">
        <button type="button" className="key">4</button>
        <button type="button" className="key">5</button>
        <button type="button" className="key">6</button>
        <button type="button" className="calculate">-</button>
      </div>

      <div className="keys">
        <button type="button" className="key">1</button>
        <button type="button" className="key">2</button>
        <button type="button" className="key">3</button>
        <button type="button" className="calculate">+</button>
      </div>

      <div className="keys">
        <button type="button" className="key zero">0</button>
        <button type="button" className="key">.</button>
        <button type="button" className="calculate">=</button>
      </div>
    </div>
  );
}

export default Calculator;
