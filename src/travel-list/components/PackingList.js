import { useState } from "react"

function PackingList({ traveList, markAsCompleted, deleteItem, resetTravelList }) {
  let [sortBy, setSortBy] = useState("inputOrder")

  let sortedList = []

  if(!traveList.length) {
    return <p className="list-items">Travel item list will appear here...</p>
  }
  if(sortBy === "inputOrder") {
    sortedList = traveList.slice().sort((a, b) => a.total - b.total)
  } else if(sortBy === "description") {
    sortedList = traveList.slice().sort((a, b) => a.itemName > b.itemName ? 1 : a.itemName < b.itemName ? -1 : 0)
  } else if(sortBy === "packedStatus") {
    sortedList = traveList.slice().sort((a, b) => Number(a.isPacked) - Number(b.isPacked))
  }

  return (
    <main className="list-items">
      <ul className="items">
        {
          sortedList.map((item, index) => (
            <li className="travel-item" key={item.id}>
              <input onClick={() => markAsCompleted(item.id)} type="checkbox" id={"travel-item-"+item.id}></input>
              <label className={item.isPacked ? "list-title completed-item" : "list-title"} htmlFor={"travel-item-"+item.id}>{item.total} {item.itemName}</label>
              <span onClick={() => deleteItem(item.id)} className="delete-item">&#x2717;</span>
            </li>
          ))
        }
      </ul>
      <div className="filters">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="inputOrder">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packedStatus">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={resetTravelList}>Clear List</button>
      </div>
    </main>
  )
}

export default PackingList