import React from 'react'
import { Table } from 'react-bootstrap'
import Product from './Product/Product'
import PaginationTable from './Pagination/PaginationTable'
import TableHeading from './TableHeading/TableHeading'
export default class ProductsTable extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      products: [],
      productsPerPage: 20,
      activePage: 0,
      activeProducts: []
    }
  }

  sortedProducts = () => {
    const clonedProducts = [...this.state.products]
    const clickNumber = this.state.clickNumber
    const MAX_CLICKS = 3
    if(clickNumber === 2) {
      return clonedProducts.sort().reverse()
    }
    if(clickNumber === MAX_CLICKS) {
      return clonedProducts.sort((a,b) => {
        if( a < b ) return -1
        if( a > b) return 1
        return 0
      })
    }
    return clonedProducts
  }
  
  setActivePage(e) {
    e.preventDefault();
    const pageNumber = parseInt(e.currentTarget.dataset.number)
    new Promise((resolve) => {
      this.setState({
        activePage: pageNumber
      })
      resolve()
    })
    .then(()=>{
      this.setProducts()
    })
    
  }
  componentWillMount() {
    fetch('./db.json')
    .then((response) => response.json())
    .then(products => {
      this.setState({
        products
      })
    })
    .then(() => {
      this.setProducts()
    })
  }
  get tableHeadings() {
    return Object.keys(this.state.products.reduce((result, obj) => {
      return Object.assign(result, obj);
    }, {}))
  }
   setProducts() {
    const delimetr = this.state.activePage * this.state.productsPerPage
    this.setState({
      activeProducts: this.state.products.slice(delimetr, delimetr + this.state.productsPerPage)
    })
  }
  get pagesCount() {
    return Math.floor(this.state.products.length / this.state.productsPerPage)
  }
  headingClickHandler(activeProducts) {
    this.setState({
      activeProducts
    })
  }
  get products() {
    const delimetr = this.state.activePage * this.state.productsPerPage
    return this.state.products.slice(delimetr, delimetr + this.state.productsPerPage)
  }
  render() {
    return (
      <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {this.tableHeadings.map((heading,index) => {
              return (
                <TableHeading 
                key={index} 
                products={this.state.activeProducts} 
                originalProducts={this.products} 
                clickHandler={this.headingClickHandler.bind(this)} 
                name={heading} 
                />
              )
            })}
          </tr>
        </thead>
        <tbody>
          {this.state.activeProducts.map((product, index) => {
            return (
              <Product 
              key={index}
              product={product}
              />
            )
          })}
        </tbody>
      </Table>
      <PaginationTable 
      pagesCount={this.pagesCount} 
      currentNumber={this.setActivePage.bind(this)}
      />
      </div>
    )
  }
}