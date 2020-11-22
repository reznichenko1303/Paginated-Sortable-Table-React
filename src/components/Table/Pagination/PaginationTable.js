import React from 'react'

const Pagination = ({products, setCurrentPage, currentPage, itemsPerPage, setSearchValue}) => {
    const pagesCount = Math.ceil(products.length / itemsPerPage)
    const paginationItems = []
    const clickHandler = (i) => {
        setCurrentPage(i)
        setSearchValue('')
    }
    for (let i = 1; i <= pagesCount; i++) {
        const itemClass = currentPage === i ? 'page-item active' : 'page-item'
        paginationItems.push(
            <li className={itemClass} key={i}>
                <button className='page-link' onClick={() => {clickHandler(i)}}>{i}</button>
            </li>
        )
    }

    return (
        <ul className="pagination justify-content-center">
            {paginationItems}
        </ul>
    )
}
export default Pagination
