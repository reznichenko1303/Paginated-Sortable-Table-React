import React from 'react'

class TableHeading extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      clickNumber: 3
    }
  }
  setClickNumer() {
    const MAX_CLICKS = 3
    
    if (this.state.clickNumber === MAX_CLICKS) {
      this.setState({
        clickNumber: 1
      })
      return
    }

    this.setState((state) => ({
      clickNumber: state.clickNumber + 1
    }))
  }
  get sortedProducts() {
    const clonedProducts = [...this.props.products]
    const sorted = clonedProducts.sort((a, b) => {
      let x = a[this.props.name]
      let y = b[this.props.name]

      if(typeof x === 'string' && typeof y === 'string') {
        x = x.toLowerCase()
        y = y.toLowerCase()
      }
      if (x > y) {
        return -1
      }
      return 1
    })

    if(this.state.clickNumber === 1) {
      return sorted
    } else if (this.state.clickNumber === 2) {
      return sorted.reverse()
    } else {
      return this.props.originalProducts
    }

  }
  sortHandler() {
    new Promise((resolve) => {
      this.setClickNumer()
      resolve()
    })
    .then(() => {
      return this.sortedProducts
    })
    .then(products => {
      this.props.clickHandler(products)
    })
  }
  render () {
    return (
      <th onClick={this.sortHandler.bind(this)}>
      {this.props.name}
    </th>
    )
  }
}

export default TableHeading