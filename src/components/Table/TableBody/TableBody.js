import React from 'react';
import { ProductItem } from "../ProductItem/ProductItem";

const TableBody = ({products}) => {
    return (
        <tbody>
        {products.map(product => {
            return (
                <ProductItem key={product.id} product={product}/>
            )
        })}
        </tbody>
    );
};

export default TableBody;
