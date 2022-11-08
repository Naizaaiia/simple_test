import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const CardLevel = (props) => {

    return (

        <div className='grid grid-cols-2 gap-4 p-4'>
            {
                props?.data ?
                    props?.data.map((data) => (
                       <div className=''>
                            <Image className='object-contain' src={data.icon} height={'1000%'} />
                        </div>
                    ))
                :
                <></>
            }
        </div>

    )
}

export default CardLevel