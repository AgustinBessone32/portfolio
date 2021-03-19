import React ,{useState} from 'react'
import './nav.css'
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
    const [burg , setBurg] = useState(true)
    
    const burgMain = () => {
        if(burg === true) {
            document.getElementById('nav').style.display ='block'
            setBurg(false)
        }
        else{document.getElementById('nav').style.display ='none'
            setBurg(true)}
    
    }


    return(
            <div  className='content-all-navigation'>
                <div className='nav-title'>
                    <p className='out'> {'<'} </p>
                    <p className='in'>Agustin Bessone</p>
                    <p className='out'> {'/>'} </p>
                    
                </div>
                <GiHamburgerMenu  
                    onClick={()=> burgMain(burg)}
                    className='burguer-menu'/>

                <div id='nav' className='content-nav'>
                    <ul>
                        <li><a href='#' className='link'>HOME</a></li>
                        <li><a href='#' className='link'>SOBRE MI</a></li>
                        <li><a href='#' className='link'>PORTFOLIO</a></li>
                        <li><a href='#' className='link'>CONTACTO</a></li>
                    </ul>
                </div> 
                
            </div>   
    
    )
}

export default Nav

