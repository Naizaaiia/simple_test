import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import CardLevel from '../components/CardLevel'
import CardProfile from '../components/CardProfile'
import Image from 'next/image'
import arrow from '../icons/arrow.png'
import science from '../icons/science.png'
import math from '../icons/math.png'

const Profile = (props) => {

    const router = useRouter()

    const Data = [
        { 
            title: 'Math',
            icon: math
        },
        { 
            title: 'Science',
            icon: science
        },
    ]

    return (

        <div>
            <button className='pt-4 pl-4' onClick={() => router.back()}>
                <Image src={arrow} height={'15%'} width={'10%'} />
            </button>
            <CardProfile />
            <CardLevel data={Data} />
        </div>

    )
}

export default Profile