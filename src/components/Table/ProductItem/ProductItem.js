import React, {memo} from 'react'
const ProductItemInner = ({product: {id, title, price, color, department}}) => {
  return (
    <tr>
      <td>{id}</td>
      <td><strong>{title}</strong></td>
      <td><strong>{price}</strong></td>
      <td><strong>{color}</strong></td>
      <td><strong>{department}</strong></td>
    </tr>
  )
}
export const ProductItem = memo(ProductItemInner)
