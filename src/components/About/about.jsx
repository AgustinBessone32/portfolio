import React from 'react'
import Skill from '../Skill/skill'
import './about.css'


const About = () =>{
    return(
        <>
            <a name='sobre-mi'></a>
            <div className='content-all-about'>
                <p className='title-me border-green'>Sobre Mi</p>
                <div className='about'>
                    <div className='content-me'>
                            <p className='content-me'>Quien soy?</p>
                            <p className='me'>Soy una persona apasionada por el desarrollo, con ganas de aprender y poder aportar todos mis conocimientos
                                a un equipo. Soy muy responsable a la hora de realizar un trabajo, siempre ofreciendo mi mayor productividad. 
                            </p>
                            <p className='me'>Estoy abierto a recibir tanto criticas como ayuda cuando considero que la necesito, me gusta 
                                trabajar en equipo ya que considero que  permite dividir el trabajo y multiplicar los resultados.
                            </p>
                            <p className='me'>
                                Cuento con gran capacidad de actualizar los conocimientos constantemente ya que para el mundo de la tecnología
                                es necesario estar aprendiendo algo nuevo todo el tiempo.
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