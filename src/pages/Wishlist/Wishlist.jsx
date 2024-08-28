import Empty from '@/component/empty/Empty';
import Products from '@/component/Products/Products';
import { useStateValue } from '@/context'
import React from 'react'

const Wishlist = () => {
  const [ data, dispacth ] = useStateValue()
  console.log(data.wishlist);
  
  return (
    <div >
      {
          data.wishlist.length ? 
          <Products data = {data.wishlist}/> 
        :
        <Empty url="https://www.lifestone.in/assets/front/images/icons/empty-wishlist.svg" title="Sevimlilar bo'sh"/>
      }
    </div>
  )
}

export default Wishlist
