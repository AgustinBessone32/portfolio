import React from 'react'
import './contact.css'
import { FaGoogle , FaLinkedin , FaRegSmileWink } from "react-icons/fa";
import { BsPersonSquare } from "react-icons/bs";
import CV from '../../img/CV.pdf'; 

const Contact = ()=> {
    return(
        <div className='content-all-contact'>
            <a name='contacto'></a>
            <p className='title-contact'>Contacto</p>
                <div className='contacts'>
                    <div className='content-contact'>
                            <FaGoogle className='icn-contact' />
                            <p className='txt-contact'>bessone98@gmail.com</p>
                        </div>
                        <div className='content-contact'>
                            <FaLinkedin className='icn-contact' />
                            <a href='https://www.linkedin.com/in/agustinbessone/' 
                                className='txt-contact'
                                target='_blank'> -<FaRegSmileWink className='smile'/>
                                Visita  mi  Linkedin 
                                <FaRegSmileWink className='smile'/>-</a>
                        </div>
                        <div className='content-contact'>
                            <BsPersonSquare className='icn-contact' /> 
                            <a href={CV}
                                download='CV Agustin Bessone.pdf'
                                className='txt-contact'
                                target='_blank'>- <FaRegSmileWink className='smile'/>
                                Descarga mi CV<FaRegSmileWink className='smile'/> -</a>
                        </div>
                    </div>

        </div>
    )
}

export default Contact