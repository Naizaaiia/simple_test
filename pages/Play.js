import React, { useState, useEffect } from 'react'
import CardGame from '../components/CardGame'
import minus from '../icons/minus.png'
import dividedBy from '../icons/dividedBy.png'
import multiplies from '../icons/multiplies.png'
import plus from '../icons/plus.png'

const Play = (props) => {

    const Data = [
        { 
            title: 'บทที่ 1 การบวก',
            icon: plus
        },
        { 
            title: 'บทที่ 2 การลบ',
            icon: minus
        },
        { 
            title: 'บทที่ 3 การคูณ',
            icon: multiplies
        },
        { 
            title: 'บทที่ 4 การหาร',
            icon: dividedBy
        },
    ]

    return (

        <div>
            <CardGame data={Data} />
        </div>

    )
}

export default Play