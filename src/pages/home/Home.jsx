import Products from '@/component/Products/Products'
import { useFetch } from '@/hooks/useFetch'
import React, { useState } from 'react'
import { Pagination } from 'antd';


// defaultPageSize - bu kelgan malumotlarni sonini chiqaradi
// defaultCurrent - bu nechanchi sahifadan boshlanishini bildiradi yani defaultCurrent{1} qilsa birinchi sahifadan boshlaydi
// total - bu jami nechta mahsulot kiritilganini bildiradi
const Home = () => {
  const [skip, setSkip] = useState(1)
  const [limit, setLimit] = useState(10)
  const {data, loading} = useFetch("/products", {limit, skip: (skip-1) * limit}, [skip, limit])

  const handleChange = (current, pageSize) => {
    console.log(current);
    setSkip(current)
    setLimit(pageSize);
    
  };

  return (
    <div>
        <Products data={data?.products} loading={loading}/>
        <div className='container mx-auto flex justify-center mt-4'>
        <Pagination current={skip} defaultPageSize={limit} defaultCurrent={1} onChange={handleChange} align="start" total={data?.total}/>
        </div>
    </div>
  )
}

export default Home