
import './App.css'
import { useState } from 'react'
const App = () => {

  const [data, setData] = useState('')

  const getValue = (event) => {
    console.log(event.target.value)
    setData(data.concat(event.target.value))
  }

  function calculation() {
    setData(eval(data).toString())
  }

  function allClear() {
    setData("")
  }

  function back() {
    setData(data.slice(0, -1))
  }

  return (
    <>
      <div className='heading'>
        <h1>Calculator</h1>
      </div>
      <div className="container">
        <div className='container-item'>
          <div className='input-item'>
            <input type="text" placeholder="0" value={data} />
          </div>

          <div className='button'>
            <button onClick={getValue} value={'('}>(</button>
            <button onClick={getValue} value={')'}>)</button>
            <button onClick={getValue} value={'%'}>%</button>
            <button onClick={allClear} value={'AC'}>AC</button>

            <button onClick={getValue} value={'7'}>7</button>
            <button onClick={getValue} value={'8'}>8</button>
            <button onClick={getValue} value={'9'}>9</button>
            <button onClick={getValue} value={'*'}>*</button>

            <button onClick={getValue} value={'4'}>4</button>
            <button onClick={getValue} value={'5'}>5</button>
            <button onClick={getValue} value={'6'}>6</button>
            <button onClick={getValue} value={'-'}>-</button>

            <button onClick={getValue} value={'1'}>1</button>
            <button onClick={getValue} value={'2'}>2</button>
            <button onClick={getValue} value={'3'}>3</button>
            <button onClick={getValue} value={'+'}>+</button>

            <button onClick={getValue} value={'0'}>0</button>
            <button onClick={back} value={'Back'}>Back</button>
            <button onClick={calculation} >=</button>
            <button onClick={getValue} value={'/'}>/</button>
          </div>

        </div>
      </div >
    </>
  )
}

export default App
