import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import avatar from '../icons/avatar.png'
import edit from '../icons/edit.png'
import KBlogo from '../icons/KBlogo.png'

const CardProfile = (props) => {

    return (

        <div>
            <div className='flex justify-center pt-10'>
                <Image src={avatar} height={'170%'} width={'170%'} />
            </div>
            <div
                className='flex justify-center'
                style={{
                    'marginLeft': '110px',
                    'marginTop': '-45px'
                }}
            >
                <Image src={edit} height={'40%'} width={'40%'} />
            </div>
            <div className='flex justify-center pt-6'>
                <p
                    className='text-4xl font-bold'
                    style={{
                        'color': '#F35031',
                    }}
                >
                    Steve  Jabs
                </p>
            </div>
            <div className='flex justify-center pt-6'>
                <div className='flex rounded-xl border bg-white text-center py-2 px-8 shadow'>
                    <Image src={KBlogo} height={'40%'} width={'40%'} />
                    <p
                        className='text-2xl font-bold pl-2 pt-1'
                        style={{
                            'color': '#6D6D6D',
                        }}
                    >
                        Klassbits School
                    </p>
                </div>

            </div>

        </div>

    )
}

export default CardProfile