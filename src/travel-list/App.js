import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Form from "./components/AddForm"
import PackingList from "./components/PackingList"
import PackingStats from "./components/Footer"

function App() {
  const [traveList, setTravelList] = useState([])

  function handleAddItems(formData) {
    setTravelList(traveList.concat(formData))
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

  return (
    <div className="travel-list">
      <Header />
      <Form
        onAddItems={handleAddItems}
      />
      <PackingList
        traveList={traveList}
        markAsCompleted={markAsCompleted}
        deleteItem={deleteItem}
        resetTravelList={resetTravelList}
      />
      <PackingStats traveList={traveList} />
    </div>
  )
}

export default App