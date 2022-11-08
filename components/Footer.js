import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import score from '../icons/score.png'
import play from '../icons/play.png'
import trophy from '../icons/trophy.png'
import brain from '../icons/brain.png'
import profile from '../icons/profile.png'
import activePlay from '../icons/activePlay.png'
import activeProfile from '../icons/activeProfile.png'

const Footer = (props) => {

    const router = useRouter()

    return (

        <div className={`fixed z-10 bottom-0 w-full mt-10`}>
            <div className={` border-t border-r border-l rounded-t-3xl shadow bg-white md:px-16`}>
                <ul className={`container grid grid-cols-5 font-bold text-center`}>
                    <button className={`text-center p-1 w-full`}>
                        <Image className='object-contain' src={score} height={'30%'} />
                    </button>
                    <button className={`text-center p-1 w-full`}>
                        <Image className='object-contain' src={trophy} height={'30%'} />
                    </button>
                    <button className={`text-center w-full px-1 md:px-24`} onClick={() => router.push('/Play')}>
                        <div
                            style={{
                                'marginTop': '-20px',
                            }}
                        >
                            <Image 
                                className='object-contain' 
                                src={router?.pathname === "/Play" || router?.pathname === "/" ? activePlay : play} 
                                height={'300%'}
                            />
                        </div>
                    </button>
                    <button className={`text-center p-1 w-full`}>
                        <Image className='object-contain' src={brain} height={'30%'} />
                    </button>
                    <button className={`text-center p-1 w-full`} onClick={() => router.push('/Profile')}>
                        <Image 
                            className='object-contain' 
                            src={router?.pathname === "/Profile" ? activeProfile : profile} 
                            height={router?.pathname === "/Profile" ? '40%' : '30%'} 
                        />
                    </button>
                </ul>
            </div>
        </div>

    )
}

export default Footer