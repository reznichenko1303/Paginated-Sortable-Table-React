import React, {memo, useCallback, useEffect, useState} from 'react'
import { TableHeading } from './TableHeading/TableHeading'
import withApiService from "../../hoc/withApiService";
import TableBody from "./TableBody/TableBody";
import Pagination from "./Pagination/PaginationTable";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import Heading from "../Heading/Heading";


const ProductsTableInner = ({products}) => {
    const itemsPerPage = 20

    const [paginatedProducts, setPaginatedProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchedProducts, setSearchedProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('')
    useEffect(() => {
        setPaginatedProducts(() => {
            const startFrom = (currentPage - 1) * itemsPerPage

            return products.slice(startFrom, startFrom + itemsPerPage)
        })
    }, [currentPage, products])
    useEffect(() => {
        setSearchedProducts(paginatedProducts)
    }, [paginatedProducts])
    useEffect(() => {
        setFilteredProducts(searchedProducts)
    }, [searchedProducts])


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <Heading
                        setSearchedProducts={setSearchedProducts}
                        products={paginatedProducts}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                </div>
                <div className="col-lg-10">

                    <table className="table table-stripped">
                        <TableHeading
                            products={filteredProducts}
                            searchedProducts={searchedProducts}
                            setFilteredProducts={setFilteredProducts}/>

                        <TableBody
                            products={filteredProducts}/>
                    </table>
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        products={products}
                        itemsPerPage={itemsPerPage}
                        setSearchValue={setSearchValue}
                    />
                </div>
            </div>
        </div>
    );
};
const ProductsTableContainer = ({apiService}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        apiService
            .getBooks()
            .then(products => {
                setProducts(products)
                setLoading(false)
            }).catch(err => {
            setError(true)
            setLoading(false)
        })
    }, [])
    if (error) {
        return (
            <ErrorIndicator/>
        )
    }

    if (loading) {
        return (
            <LoadingIndicator/>
        )
    }
    return <ProductsTable products={products}/>
}
const ProductsTable = memo(ProductsTableInner)
export default withApiService(ProductsTableContainer);
