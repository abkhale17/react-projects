function PackingStats({ traveList }) {

  function roundNumberUptoTwoPlaces(number) {
    return Math.round(number * 100) / 100
  }

  return (
    <footer className="cart">
      {
        traveList.length 
          ? `You have ${traveList.length} items in your list, and you already have packed 
            ${traveList.filter(t => t.isPacked).length} items 
            (${roundNumberUptoTwoPlaces(traveList.filter(t => t.isPacked).length * 100 / traveList.length)}%)`
          : "You have no items in your list"
      }
    </footer>
  )
}

export default PackingStats
