import React from 'react'
import Skill from '../Skill/skill'
import './about.css'


const About = () =>{
    return(
        <>
            <a name='sobre-mi'></a>
            <div className='content-all-about'>
                <p className='title-me'>Sobre Mi</p>
                <div className='about'>
                    <div className='content-me'>
                            <p className='content-me'>Quien soy?</p>
                            <p className='me'>Soy una persona apasionada por el desarrollo. Me considero una persona responsable, buen compañero 
                                con ganas de aprender y aportar mis conocimientos a un equipo. 
                            </p>
                            <p className='me'>
                                Estoy en constante aprendizaje ya que considero que para este rubro hay que estar en constante aprendizaje.
                            </p>
                    </div>
                    <div className='skills-me'>
                            <p className='content-me'>Skills</p>
                            <Skill />
                    </div>
                    
                </div>
            </div>
        </>
    )
}   

export default About