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
      <p style={{textAlign: 'center'}}>{
        daysCount === 0
          ? <span>Today is ${getNthDateFromToday(daysCount)}</span>
          : daysCount < 0 ? <span>{daysCount * -1 } days ago was {getNthDateFromToday(daysCount)}</span>
          : <span>{daysCount} days from today is {getNthDateFromToday(daysCount)}</span>
      }</p>
    </div>
  )
}

function App() {
  return <DateCounter />
}

function getNthDateFromToday(days) {
  let date = new Date()
  date.setDate(date.getDate() + days)
  return date.toDateString()
}

export default App