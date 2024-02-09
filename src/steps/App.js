import { useState } from "react"
import "../index.css"
import "./App.css"

function App() {
  const [stepNumber, setStepNumber] = useState(2)
  const stepDetails = [
    {
      stepNumber: 1,
      content: "Step 1"
    },
    {
      stepNumber: 2,
      content: "Step 2"
    },
    {
      stepNumber: 3,
      content: "Step 3"
    },
  ]
  return (
    <div className="container">
      <section className="step-numbers">
        {stepDetails.map((step, key) => <Step key={key} stepNumber={step.stepNumber} currentStepNumber={stepNumber} />)}
      </section>
      <section className="step-content">
        { stepDetails.find(step => step.stepNumber === stepNumber)?.content }
      </section>
      <section className="step-actions">
        <button className="btn" onClick={() => setStepNumber(stepNumber-1)} disabled={stepNumber <= 1}>Previos</button>
        <button className="btn" onClick={() => setStepNumber(stepNumber+1)} disabled={stepNumber >= 3}>Next</button>
      </section>
    </div>
  )
}

function Step({ stepNumber, currentStepNumber }) {
  return stepNumber <= currentStepNumber 
    ? <p className="step-number step-completed">{stepNumber}</p>
    : <p className="step-number">{stepNumber}</p> 
}

export default App