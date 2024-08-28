import React, { useState } from 'react'
import { Card } from 'antd';
import Skeletons from '../Skeletons/Skeletons';
import { useStateValue } from '@/context';
import ProductCard from './ProductCard';
import {
    HeartOutlined,
    HeartFilled
  } from '@ant-design/icons';

function Products({data, loading}) {

    const [{wishlist}, dispatch] = useStateValue()
    const [products, setProducts] = useState([]); 

  let items = data?.map((product) => (
        <Card className='relative' key={product.id}>
                  <button onClick={() => dispatch({type: "TOGGLE_WISHLIST", payload: product})} className=" p-1 absolute top-1 right-1 flex justify-center items-center">
                    {
                    wishlist?.some( item => item.id === product.id ) ?
                    <HeartFilled className='text-2xl' style={{color: "red"}}/>
                    :
                    <HeartOutlined className='text-2xl'/>
                    }
                </button>
            <img src={product.images[0]} className='w-full h-60 object-contain' alt="" />
            <h3 className='text-xl font-bold'>{product.title}</h3>
            <p className='text-slate-400 text-base'>{product.category}</p>
            <p className='text-2xl font-bold'>{product.price} $</p>
        </Card>
    ))
    if(loading){
        return <Skeletons limit={4}/>
    }
    return (
        <>
        <ProductCard products={products}/>
        <div className='container mx-auto grid grid-cols-4 gap-3'>
            {items}
        </div>
        </>
    )
}

export default Products
