import React from 'react'

const PaginationTable = (props) => {
  const items = []

  for (let i = 1; i <= props.pagesCount; i++) {
    items.push(<li className="page-item" key={i} ><button className="page-link" onClick={props.currentNumber} data-number={i-1}>{i}</button></li>)
  }
  return (
    <ul className="pagination">
      {items}
    </ul>
  )
}
export default PaginationTable