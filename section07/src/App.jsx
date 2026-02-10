import './App.css';
import { useState, useEffect, useRef } from 'react';
import Viewer2 from './components/Viewer2';
import InputController from './components/InputController';
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [calculate, setCalculate] = useState(0);
  const isMount = useRef(false);
  const countValue = useRef(0);

  const onClickCalculate = (num1, num2, op) => {
    let sum = 0;
    switch (op) {
      case '+':
        sum = parseInt(num1) + parseInt(num2);
        break;
      case '-':
        sum = parseInt(num1) - parseInt(num2);
        break;
      case '*':
        sum = parseInt(num1) * parseInt(num2);
        break;
      case '/':
        sum = parseInt(num1) / parseInt(num2);
        break;
      default:
        sum = 0;
    }
    setCalculate(sum);
  };
  useEffect (()=>{
    console.log(`countValue = ${countValue.current}`)
    countValue.current = countValue.current + 1;
    if (isMount.current === false) {
      isMount.current = true;
    } else {
      console.log('App update')
    }
  })

  return (
    <div className="App">
      <div className="calculator-card">
        <h1 className="title">💻 계산기</h1>

        <Viewer2 calculate={calculate} />
        <InputController onClickCalculate={onClickCalculate} />
        {count % 2 === 0 ? <Even /> : null}

        <div className="button-group">
          <button className="btn main-btn" onClick={() => setCount(count + 1)}>
            버튼 <span className="counter">{count}</span>
          </button>
          <button className="btn number-btn" onClick={() => setNumber(number + 1)}>
            넘버 <span className="counter">{number}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;