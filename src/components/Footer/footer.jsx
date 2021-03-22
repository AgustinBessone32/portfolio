import React from 'react'
import './footer.css'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
    return(
        <div className='content-all-footer'>
            <div className='content-copy'>
                <p> <AiOutlineCopyrightCircle />  Agustin Bessone, 2021</p>
            </div>

        </div>
    )
}

export default Footer