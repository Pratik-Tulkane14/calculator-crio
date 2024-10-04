import { useState } from 'react'
import ReactButton from './components/ReactButton';
import './App.css'
function App() {
const [result, setResult] = useState("");
  return (
    <div className='wrapper'>
     <p>React Calculator</p>
     <div className='result-display'>
      <input type="number" value={result} />
     </div>
     <div className="main-wrapper">

     <div className="btn-wrapper">
      <ReactButton label={7} setResult={setResult}/>
      <ReactButton label={8} setResult={setResult}/>
      <ReactButton label={9} setResult={setResult}/>
      <ReactButton label={"+"} setResult={setResult}/>
     </div>
     <div className="btn-wrapper">
      <ReactButton label={4} setResult={setResult}/>
      <ReactButton label={5} setResult={setResult}/>
      <ReactButton label={6} setResult={setResult}/>
      <ReactButton label={"-"} setResult={setResult}/>
     </div>
     <div className="btn-wrapper">
      <ReactButton label={1} setResult={setResult}/>
      <ReactButton label={2} setResult={setResult}/>
      <ReactButton label={3} setResult={setResult}/>
      <ReactButton label={"*"} setResult={setResult}/>
     </div>
     <div className="btn-wrapper">
      <ReactButton label={"C"} setResult={setResult}/>
      <ReactButton label={0} setResult={setResult}/>
      <ReactButton label={"="} setResult={setResult}/>
      <ReactButton label={"/"} setResult={setResult}/>
     </div>
     </div>
    </div>
  )
}

export default App
