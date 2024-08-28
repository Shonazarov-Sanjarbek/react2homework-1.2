import { useStateValue } from '@/context'
import React from 'react'
import {
    HeartOutlined,
    HeartFilled
  } from '@ant-design/icons';
import { Card } from 'antd';

function Product({product}) {
    const [wishlist, dispatch] = useStateValue()
    console.log();
        
  return (
    <div className='container mx-auto grid grid-cols-4 gap-3'>
        {
            product?.map((products) => (
            <Card className='relative' key={products.id}>
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
        }
    </div>
  )
}

export default Product
