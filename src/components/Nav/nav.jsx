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
                    onClick={()=> burgMain()}
                    className='burguer-menu'/>

                <div id='nav' className='content-nav '>
                    <ul>
                        <li><a href='#home' className='link' onClick={()=>burgMain()}>HOME</a></li>
                        <li><a href='#sobre-mi' className='link' onClick={()=>burgMain()}>SOBRE MI</a></li>
                        <li><a href='#' className='link' onClick={()=>burgMain()}>PORTFOLIO</a></li>
                        <li><a href='#' className='link' onClick={()=>burgMain()}>CONTACTO</a></li>
                    </ul>
                </div> 
                
            </div>   
    
    )
}

export default Nav

