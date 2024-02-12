import { useState } from "react"

function DateCounter() {
  const [steps, setSteps] = useState(1)
  const [daysCount, setDaysCount] = useState(1)

  return (
    <div className="container">
      <div className="flex mb-sm">
        <h6>Number of Steps</h6>
        <button className="btn" onClick={() => setSteps(n => n - 1)}>-</button>
        <span>{steps}</span>
        <button className="btn" onClick={() => setSteps(n => n + 1)}>+</button>
      </div>
      <div className="flex mb-sm">
        <h6>Number of Days</h6>
        <button className="btn" onClick={() => setDaysCount(n => n - steps)}>-</button>
        <span>{daysCount}</span>
        <button className="btn" onClick={() => setDaysCount(n => n + steps)}>+</button>
      </div>
      <h4 style={{textAlign: 'center'}}>{JSON.stringify(new Date())}</h4>
    </div>
  )
}

function App() {
  return <DateCounter />
}

export default App