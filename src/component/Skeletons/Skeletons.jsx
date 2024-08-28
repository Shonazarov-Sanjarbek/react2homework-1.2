import React from 'react'
import { Card, Skeleton } from 'antd';


function Skeletons({limit = 4}) {
  return <div className='container mx-auto grid grid-cols-4 gap-3'> 
    {
        new Array(limit).fill().map((__, inx ) => (
            <Card key={inx}>
                <Skeleton/>
            </Card>
          ))
    }
  </div>
}

export default Skeletons