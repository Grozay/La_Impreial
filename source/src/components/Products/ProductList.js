import React, { useState } from 'react';
import ProductItem from './ProductItem';
import Pagination from './Pagination';
import '../../css/Product/Products.css'; // Import CSS file

const ProductList = ({ products,addCart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6); // Số lượng sản phẩm trên mỗi trang

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <div className="product-container">
      {currentProducts.map(product => (
        <ProductItem key={product.id} product={product} addCart={addCart} />
      ))}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
    
  );
};

export default ProductList;