import React from 'react'
import Product from './Product';

function ProductCard({products}) {
    // console.log(products);
    
    const productItem = products?.map((product) => (
        <Product key={product.id} product={product}/>
    ));


  return (
    <div className='flex justify-center flex-wrap'>
      {productItem}
    </div>
  )
}

export default ProductCard
