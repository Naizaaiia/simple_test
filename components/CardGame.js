import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const CardGame = (props) => {

    return (

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 px-14 py-16'>
            {
                props?.data ?
                    props?.data.map((data) => (
                       <div className='rounded-xl border bg-white text-center p-4 shadow'>
                            <div
                                style={{
                                    'marginTop': '-68px',
                                }}
                            >
                                <Image src={data.icon} height={'100%'} width={'100%'} />
                            </div>
                            
                            <p className='text-xl pt-3'>{data.title}</p>
                        </div>
                    ))
                :
                <></>
            }
        </div>

    )
}

export default CardGame