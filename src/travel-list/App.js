import { useState } from "react"
import "./App.css"

function App() {
  const [traveList, setTravelList] = useState([])
  const [formData, setFormData] = useState({
    id: null,
    isCompleted: false,
    total: 1,
    itemName: ""
  })

  function handleSubmit(e) {
    e.preventDefault()
    formData.id = Math.floor(Math.random() * 100000000 )
    setTravelList(traveList.concat(formData))
  }

  function markAsCompleted(id) {
    console.log(traveList, "old")
    let list = traveList.map(item => {
      if(id === item.id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        }
      }
      return item
    })
    console.log(list, "new")
    setTravelList(list)
  }

  function deleteItem(id) {
    setTravelList(traveList.filter(item => id !== item.id))
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
        <input type="text" placeholder="item..." value={formData.itemName} onChange={e => setFormData({ ...formData, itemName: e.target.value })}></input>
        <button type="submit">ADD</button>
      </form>
      <main className="list-items">
        <div className="items">
        {
          !traveList.length
            ? <p>Travel item list will appear here...</p>
            : traveList.map((item, index) => (
              <li className="travel-item" key={item.id}>
                  <input onClick={() => markAsCompleted(item.id)} type="checkbox" id={"travel-item-"+item.id}></input>
                  <label className={item.isCompleted ? "list-title completed-item" : "list-title"} htmlFor={"travel-item-"+item.id}>{item.total} {item.itemName}</label>
                <span onClick={() => deleteItem(item.id)} className="delete-item">&#x2717;</span>
              </li>
            ))
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

export default App