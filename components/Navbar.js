import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import calculator from '../icons/calculator.png'
import atom from '../icons/atom.png'
import heart from '../icons/heart.png'
import union from '../icons/union.png'
import star from '../icons/star.png'

const Navbar = (props) => {


    return (

        <nav className={`fixed z-10 top-0 w-full h-13 px-1 pt-5 bg-white text-black border-gray-400 px-2 sm:px-4 border-b`}>
            <div className={`md:px-16 flex justify-between`}>
                <div className='flex'>
                    <div className='pr-1'>
                        <Image src={calculator} height={'40%'} width={'40%'} />
                    </div>
                    <div className='pr-1'>
                        <Image src={atom} height={'40%'} width={'40%'} />
                    </div>
                </div>

                <div className='flex justify-end '>
                    <div className='pr-4'>
                        <Image src={union} height={'20%'} width={'20%'} />
                        <span className='text-2xl pl-1 font-bold' style={{'color': '#F57760'}}>1</span>
                    </div>
                    <div className='pr-4'>
                        <Image src={star} height={'20%'} width={'20%'} />
                        <span className='text-2xl pl-1 font-bold' style={{'color': '#484848'}}>1</span>
                    </div>
                    <div className='pr-4'>
                        <Image src={heart} height={'20%'} width={'20%'} />
                        <span className='text-2xl pl-1 font-bold' style={{'color': '#FF3838'}}>∞</span>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar