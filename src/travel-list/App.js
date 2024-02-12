import { useState } from "react"
import "./App.css"

function App() {
  const [traveList, setTravelList] = useState([])
  const [formData, setFormData] = useState({
    total: 1,
    item: ""
  })

  function handleSubmit(e) {
    e.preventDefault()
    setTravelList(traveList.concat(formData))
  }

  return (
    <div className="travel-list">
      <header className="header">
        <h1>FAR AWAY</h1>
      </header>
      <form className="add-form" onSubmit={handleSubmit}>
        <p>What do you need for your trip?</p>
        <select name="total" value={formData.total} onInput={e => setFormData({ ...formData, total: e.target.value })}>
          {
            Array(20).fill(0).map((_, key) => <option key={key} value={key+1} >{key+1}</option>)
          }
        </select>
        <input type="text" placeholder="item..." value={formData.item} onChange={e => setFormData({ ...formData, item: e.target.value })}></input>
        <button type="submit">ADD</button>
      </form>
      <main className="list-items">
        <div className="items">
        {
          !traveList.length
            ? <p>Travel item list will appear here...</p>
            : traveList.map((item, index) => <TravelListItem item={item} />)

        }
        </div>
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

function TravelListItem({item}) {
  return (
    <li>
      <input type="checkbox" id="travel-item"></input>
      <label>{item.item}</label>
    </li>
  )
}

export default App