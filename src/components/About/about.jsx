import React from 'react'
import Skill from '../Skill/skill'
import './about.css'


const About = () =>{
    return(
        <div className='content-all-about'>
            <p className='title-me'>Sobre Mi</p>
            <div className='about'>
                <div className='skills-me'>
                        <p className='content-me'>SKILLS</p>
                        <Skill />
                </div>
                <a name='sobre-mi'></a>
                <div className='content-me'>
                        <p className='content-me'>QUIEN SOY?</p>
                </div>

            </div>
        </div>
    )
}   

export default About