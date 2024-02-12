import "./App.css"

function App() {
  return (
    <div className="travel-list">
      <header className="header">
        <h1>FAR AWAY</h1>
      </header>
      <form className="add-form" >
        <p>What do you need for your trip?</p>
        <select name="total">
          {
            Array(20).fill(0).map((_, key) => <option key={key} value={key+1} >{key+1}</option>)
          }
        </select>
        <input type="text" placeholder="item..."></input>
        <button type="button">ADD</button>
      </form>
      <main className="list-items">
        <p>Travel item list will appear here...</p>
        <div className="filters">
          <select name="sortBy">
            <option value="inputOrder">SORT BY INPUT ORDER</option>
            <option value="description">SORT BY DESCRIPTION</option>
            <option value="packedStatus">SORT BY PACKED STATUS</option>
          </select>
          <button>Clear List</button>
        </div>
        
      </main>
      <footer className="cart">
        You have 4 items in your list, and you already packed 2 items (50%)
      </footer>
    </div>
  )
}

export default App