import React from 'react'
import Experiences from '../Experiences/experiences'
import './portfolio.css'

const Portfolio = () => {
    return(
        <div className='content-all-port'>
            <a name='portfolio'></a>
            <p className='title-port'>Portfolio</p>
            <div className='content-experiences'>
                <Experiences />
            </div>
        </div>
    )
}

export default Portfolio