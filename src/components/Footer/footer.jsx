import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import './footer.css'

const Footer = () => {
    const year = new Date().getFullYear()


    return(
        <div className='content-all-footer'>
            <div className='content-copy'>
                <p> <AiOutlineCopyrightCircle />  Agustin Bessone, {year}</p>
            </div>

        </div>
    )
}

export default Footer