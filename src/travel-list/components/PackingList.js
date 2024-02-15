function PackingList({traveList, setTravelList}) {
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
  )
}

export default PackingList