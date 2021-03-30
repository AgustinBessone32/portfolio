import React from 'react'
import './experiences.css'
import { BiCameraMovie ,BiWallet } from 'react-icons/bi';
import {TiWeatherCloudy} from 'react-icons/ti';
import {BsMusicNoteBeamed} from 'react-icons/bs'

const Experiences = () => {
    return(
        <div className='content-all-experiences'>
            <div className='experience'>
                <p className='title-exp'><BiCameraMovie /> Total Pelis</p>
                <p className='desc-exp'>Aplicacion web que permite ver detalles de peliculas como su calificacion
                y decripcion, permite buscarlas y añadir a favoritos</p>
                <p className='title-util'>TECNOLOGIAS UTILIZADAS</p>
                <p className='tec-util'>- Para visualizar los datos se utilizo REACT y CSS. FIREBASE para la autenticación.<br/>
                - Para almacenar los datos se utilizó MONGODB ATLAS y MONGOOSE</p>
                <a className='btn-exp' href='https://github.com/AgustinBessone32/total-pelis' target='_blank'>
                    CÓDIGO</a>
                <a className='btn-exp' href='https://agustinbessone32.github.io/total-pelis/' target='_blank'>
                    WEB</a>
            </div>

            <div className='experience-2'>
                <p className='title-exp'><TiWeatherCloudy /> Weater App</p>
                <p className='desc-exp'>Aplicacion web que permite consultar el clima de distintas ciudades asi como detalles
                del mismo como el viento, la humedad, entre otros</p>
                <p className='title-util'>TECNOLOGIAS UTILIZADAS</p>
                <p className='tec-util'>- Para visualizar los datos se utilizo REACT y CSS.<br/>
                - Los datos climaticos son obtenidos de una API (Open Weather)</p>
                <a className='btn-exp' target='_blank' href='https://github.com/AgustinBessone32/whater-app'>
                    CÓDIGO</a>
                <a className='btn-exp' target='_blank' href='https://agustinbessone32.github.io/whater-app/#/'>
                    WEB</a>
            </div>

            <div className='experience-3'>
                <p className='title-exp'><BsMusicNoteBeamed />  BoomSounds</p>
                <p className='desc-exp'>E-commerce grupal en el cual se hace la venta de productos musicales
                , incluye acciones como el checkout, administracion de usuario y carrito, entre otras</p>
                <p className='title-util'>TECNOLOGIAS UTILIZADAS</p>
                <p className='tec-util'>- Para visualizar los datos se utilizo REACT,CSS. FIREBASE para la autenticacion<br/>
                - Para almacenar los datos se utilizó SEQUELIZE</p>
                <a className='btn-exp' target='_blank' href='https://github.com/danieltkach/BoomSounds'>
                    CÓDIGO</a>
            </div>

            <div className='experience-4'>
                <p className='title-exp'><BiWallet /> Inro </p>
                <p className='desc-exp'>Aplicacion grupal la cual tiene como ojetivo ser una billetera virtual
                para poder hacer compras, recargar saldo, etre otras cosas</p>
                <p className='title-util'>TECNOLOGIAS UTILIZADAS</p>
                <p className='tec-util'>- Para visualizar los datos se utilizo REACT NATIVE, CSS, MATERIAL UI <br/>
                - Para almacenar los datos se utilizó MONGO DB</p>
                <a className='btn-exp' target='_blank' href='https://github.com/danieltkach/henry-bank'>
                    CÓDIGO</a>
            </div>


        </div>
    )
}

export default Experiences