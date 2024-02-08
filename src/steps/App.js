import "../index.css"
import "./App.css"

function App() {
  return (
    <div className="container">
      <section className="step-numbers">
        <p className="step-number">1</p>
        <p className="step-number">2</p>
        <p className="step-number">3</p>
      </section>
      <section className="step-content">
        Step N: This is content section
      </section>
      <section className="step-actions">
        <button className="btn">Previos</button>
        <button className="btn">Next</button>
      </section>
    </div>
  )
}

export default App