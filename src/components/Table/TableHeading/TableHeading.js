import React, {memo, useCallback, useEffect, useState} from 'react'

const TableHeadingInner = ({setFilteredProducts, products, searchedProducts}) => {
    const [click, setClick] = useState(1)
    const [sortByValue, setSortByValue] = useState('')

    const sortFunction = useCallback(() => {
        return [...products].sort((a, b) => {
            if (isNaN(b[sortByValue]) && isNaN(a[sortByValue])) {
                return a[sortByValue].localeCompare(b[sortByValue])
            }
            return a[sortByValue] - b[sortByValue]
        })
   }, [products, sortByValue])

    const sortProducts = (type) => {
        if (type === 'desc') {
            return sortFunction()
        }
        return sortFunction().reverse()
    }

    const sortProductsHandler = (e) => {
        const target = e.target
        if (target.dataset.value !== sortByValue) {
            setClick(1)
        } else {
            if (click === 3) {
                setClick(1)
            } else {
                setClick((click) => click + 1)
            }
        }
        setSortByValue(target.dataset.value)
    }
    useEffect(() => {
        switch (click) {
            case 1:
                return setFilteredProducts(sortProducts('desc'))
            case 2:
                return setFilteredProducts(sortProducts())
            default:
                return setFilteredProducts(searchedProducts)
        }
    }, [click, sortByValue])

    return (
        <thead>
        <tr>
            <th scope="col" data-value="id" onClick={sortProductsHandler}>ID</th>
            <th scope="col" data-value="title" onClick={sortProductsHandler}>Title</th>
            <th scope="col" data-value="price" onClick={sortProductsHandler}>Price</th>
            <th scope="col" data-value="color" onClick={sortProductsHandler}>Color</th>
            <th scope="col" data-value="department" onClick={sortProductsHandler}>Department</th>
        </tr>
        </thead>
    );
};

export const TableHeading = memo(TableHeadingInner);
