import React from 'react'
import './home.css'
import img from '../../img/fotovs.jpeg'
import About from '../About/about'

const Home = () => {
    return(
        <div className='content-all-home'>
            <div>
                 <img className='img-home' src={img}/>
            </div>
            <div className='press-content '>
                <p className='me animate__animated animate__heartBeat animate__delay-1s'>
                    ¡ Hola !
                </p>
                <p className='ab animate__animated animate__heartBeat animate__delay-2s'>
                    Mi nombre es Agustin Bessone.
                </p>
                <p className='me animate__animated animate__heartBeat animate__delay-3s' >
                    - Soy FullStack Developer -
                </p>
            </div>
            
        </div>
    )
}

export default Home