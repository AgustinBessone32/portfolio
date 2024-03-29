import React from 'react';
import { DiScrum } from 'react-icons/di';
import { FaAngular, FaAws, FaGitAlt, FaNodeJs, FaReact, FaSass } from 'react-icons/fa';
import { IoLogoVue } from 'react-icons/io5';
import { SiBootstrap, SiCss3, SiFirebase, SiHtml5, SiJavascript, SiMongodb, SiPostgresql, SiRedux, SiTailwindcss } from 'react-icons/si';
import './skill.css';


const Skill = () => {
    return (
        <div data-aos="fade-right" data-aos-duration="1000" className='content-skills' >
            <FaReact className='skill' title='REACT' />
            <FaAngular className='skill' title='ANGULAR' />
            <SiRedux className='skill' title='REDUX' />
            <IoLogoVue className='skill' title='VUE' />
            <FaAws className='skill' title='AWS'/>
            <SiJavascript className='skill' title='JAVASCRIPT' />
            <SiBootstrap className='skill' title='BOOTSTRAP' />
            <SiTailwindcss className='skill' title='TAILWIND' />
            <FaNodeJs className='skill' title='NODE.JS' />
            <SiFirebase className='skill' title='FIREBASE' />
            <SiMongodb className='skill' title='MONGODB' />
            <SiPostgresql className='skill' title='POSTGRESQL' />
            <SiHtml5 className='skill' title='HTML5' />
            <SiCss3 className='skill' title='CSS3' />
            {/* <SiMaterialUi className='skill' title='MATERIAL UI' /> */}
            <FaSass className='skill' title='SASS' />
            <FaGitAlt className='skill' title='GIT' />
            <DiScrum className='skill' title='SCRUM' />

        </div>
    )
}

export default Skill