import React from 'react'
const Product = props => {
  return (
    <tr>
      <td>{props.product.id}</td>
      <td><strong>{props.product.title}</strong></td>
      <td><strong>{props.product.price}</strong></td>
      <td><strong>{props.product.color}</strong></td>
      <td><strong>{props.product.department}</strong></td>
    </tr>
  )  
}
export default Product