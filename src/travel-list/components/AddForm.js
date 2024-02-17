import { useState } from "react"

function Form({ onAddItems }) {
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
      itemName: formData.itemName.trim(),
      id: Date.now()
    }
    onAddItems(newFormData)
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

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <p>What do you need for your trip?</p>
      <select name="total" value={formData.total} onInput={e => setFormData({ ...formData, total: +e.target.value })}>
        {
          Array(20).fill(0).map((_, key) => <option key={key} value={key+1} >{key+1}</option>)
        }
      </select>
      <input type="text" placeholder="item..." value={formData.itemName} onChange={e => setFormData({ ...formData, itemName: e.target.value })}></input>
      <button type="submit">ADD</button>
    </form>
  )
}

export default Form