import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Form from "./components/AddForm"
import PackingList from "./components/PackingList"
import PackingStats from "./components/Footer"

function App() {
  const [traveList, setTravelList] = useState([])

  return (
    <div className="travel-list">
      <Header />
      <Form traveList={traveList} setTravelList={setTravelList} />
      <PackingList traveList={traveList} setTravelList={setTravelList} />
      <PackingStats traveList={traveList} />
    </div>
  )
}

export default App