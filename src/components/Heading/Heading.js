import React from 'react'
import './Heading.css'

const Heading = ({setSearchedProducts, products, setSearchValue, searchValue}) => {
    const searchAndSortTitle = (value) => {
        return [...products].filter(product => product.title.toLowerCase().indexOf(value) !== -1)
    }
    const changeHandler = (e) => {
        setSearchValue(e.target.value)
        if (!e.target.value) {
            setSearchedProducts(products)
            return
        }
       return setSearchedProducts(searchAndSortTitle(e.target.value))
    }
    return (
        <div className="form-group">
            <label htmlFor="search">Search product</label>
            <input type="text" id='search' className="form-control" onChange={changeHandler} value={searchValue}/>
        </div>
    )
}
export default Heading
