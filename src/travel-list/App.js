import { useState } from "react"
import "./App.css"

function App() {
  const [traveList, setTravelList] = useState([])
  const [formData, setFormData] = useState({
    id: null,
    isPacked: false,
    total: 1,
    itemName: ""
  })

  function handleSubmit(e) {
    e.preventDefault()
    if(!formData.itemName || (formData.itemName && !formData.itemName.trim())) return
    let newFormData = {
      ...formData,
      itemName: formData.itemName.trim()
    }
    formData.id = Math.floor(Math.random() * 100000000 )
    setTravelList(traveList.concat(newFormData))
    resetForm()
  }

  function resetForm() {
    setFormData({
      id: null,
      isPacked: false,
      total: 1,
      itemName: ""
    })
  }

  function markAsCompleted(id) {
    let list = traveList.map(item => {
      if(id === item.id) {
        return {
          ...item,
          isPacked: !item.isPacked,
        }
      }
      return item
    })
    setTravelList(list)
  }

  function deleteItem(id) {
    setTravelList(traveList.filter(item => id !== item.id))
  }

  function resetTravelList() {
    if(!traveList.length) return
    let confirmation = window.confirm("Are you sure?")
    if(confirmation) setTravelList([])
  }

  function roundNumberUptoTwoPlaces(number) {
    return Math.round(number * 100) / 100
  }

  function sortTravelList(e) {
    let sortBy = e.target.value
    let sortedTravelList = [].concat(traveList)
    if(sortBy === "inputOrder") {
      sortedTravelList.sort((a, b) => a.total > b.total ? 1 : a.total < b.total ? -1 : 0)
      setTravelList(sortedTravelList)
    } else if(sortBy === "description") {
      sortedTravelList.sort((a, b) => a.itemName > b.itemName ? 1 : a.itemName < b.itemName ? -1 : 0)
      setTravelList(sortedTravelList)
    } else if(sortBy === "packedStatus") {
      sortedTravelList.sort((a, b) => a.isPacked && !b.isPacked ? 1 : !a.isPacked && b.isPacked ? -1 : 0)
      setTravelList(sortedTravelList)
    }
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
                  <label className={item.isPacked ? "list-title completed-item" : "list-title"} htmlFor={"travel-item-"+item.id}>{item.total} {item.itemName}</label>
                <span onClick={() => deleteItem(item.id)} className="delete-item">&#x2717;</span>
              </li>
            ))
        }
        </div>
        <div className="filters">
          <select name="sortBy" onChange={sortTravelList}>
            <option value="inputOrder">SORT BY INPUT ORDER</option>
            <option value="description">SORT BY DESCRIPTION</option>
            <option value="packedStatus">SORT BY PACKED STATUS</option>
          </select>
          <button onClick={resetTravelList}>Clear List</button>
        </div>
        
      </main>
      <footer className="cart">
        {
          traveList.length 
            ? `You have ${traveList.length} items in your list, and you already have packed 
              ${traveList.filter(t => t.isPacked).length} items 
              (${roundNumberUptoTwoPlaces(traveList.filter(t => t.isPacked).length * 100 / traveList.length)}%)`
            : "You have no items in your list"
        }
        
      </footer>
    </div>
  )
}

export default App