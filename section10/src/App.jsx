import './App.css'
import { useState } from 'react'
import Controller from './components/Controller'
import Viewer from './components/Viewer'

function App() {
  const [n1, setN1] = useState("")
  const [n2, setN2] = useState("")
  const [result, setResult] = useState(null)

  const calculate = (operator) => {
    if (n1 === "" || n2 === "") return

    const a = parseFloat(n1)
    const b = parseFloat(n2)
    let res = 0

    switch (operator) {
      case "+":
        res = a + b
        break;
      case "-":
        res = a - b
        break;
      case "*":
        res = a * b
        break;
      case "/":
        res = b === 0 ? "0으로 나눌 수 없음" : a / b
        break;
      default:
        break;
    }
    setResult(res)
  }
  return (
    <div className='App'>
      <h1>계산기</h1>
      <Viewer n1={n1} n2={n2} result={result} setN1={setN1} setN2={setN2}/>
      <Controller calculate={calculate}/>
    </div>
  )
}
export default App
