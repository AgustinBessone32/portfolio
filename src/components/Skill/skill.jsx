import React from 'react'
import './skill.css'
import { FaReact ,FaNodeJs, FaSass ,FaGitAlt } from 'react-icons/fa';
import { SiRedux , SiFirebase, SiJavascript 
        ,SiBootstrap, SiMongodb ,SiPostgresql,
        SiHtml5, SiCss3, SiMaterialUi} from 'react-icons/si';
import {DiScrum} from 'react-icons/di'


const Skill = () => {
    return(
        <div className='content-skills animate__animated animate__fadeInLeft animate__delay-5s'>
            <FaReact className='skill' title='REACT'/> 
            <SiRedux className='skill' title='REDUX'/>
            <SiJavascript className='skill' title='JAVASCRIPT'/>
            <SiBootstrap className='skill' title='BOOTSTRAP'/>
            <FaNodeJs className='skill' title='NODE.JS'/>
            <SiFirebase className='skill' title='FIREBASE'/>
            <SiMongodb className='skill' title='MONGODB'/>
            <SiPostgresql className='skill' title='POSTGRESQL'/>
            <SiHtml5 className='skill' title='HTML5'/>
            <SiCss3 className='skill' title='CSS3'/>
            <SiMaterialUi className='skill' title='MATERIAL UI'/>
            <FaSass className='skill' title='SASS'/>
            <FaGitAlt className='skill' title='GIT'/>
            <DiScrum className='skill' title='SCRUM'/>
            
        </div>
    )
}

export default Skill