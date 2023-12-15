import React, { useState } from 'react';
import ProductItem from './ProductItem';
import Pagination from './Pagination';
import '../../css/Product/Products.css';

const ProductList = ({ products, addCart, onSort }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  // const [selectedSort, setSelectedSort] = useState('');

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const productsList = currentProducts.map(product => (
    <ProductItem key={product.id} product={product} addCart={addCart} />
  ));

  const paginate = pageNumber => {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(pageNumber);
    }
  };
  // const handleSelectChange = (e) => {
  //   const sortOption = e.target.value;
  //   setSelectedSort(sortOption);
  //   onSort(sortOption);
  // };
  // console.log(selectedSort)


  return (
    <>
      {/* <div className='sort_container'>
        <label>Sorted by: </label>
        <select value={selectedSort} onChange={handleSelectChange} className='sort_product'>
          <option value="default" className='sort_optiton'>default</option>
          <option value="nameAsc" className='sort_optiton'>Product name (A-Z)</option>
          <option value="nameDesc" className='sort_optiton'>Product name (Z-A)</option>
          <option value="priceAsc" className='sort_optiton'>Price (Low to High)</option>
          <option value="priceDesc" className='sort_optiton'>Price (High to low)</option>
        </select>
      </div> */}

      <div className="product-container">
        {productsList}
        <div className='Pagination'>  <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          currentPage={currentPage}
          paginate={paginate}
        /></div>
      </div>
    </>

  );
};

export default ProductList;