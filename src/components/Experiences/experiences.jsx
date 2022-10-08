import React from 'react';
import { BiCameraMovie, BiWalletAlt } from 'react-icons/bi';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { FaHotel } from 'react-icons/fa';
import { SiCashapp } from 'react-icons/si';
import { TiWeatherCloudy } from 'react-icons/ti';
import './experiences.css';

const Experiences = () => {
    return (
        <div className='content-all-experiences'>

            <div className='experience-0' data-aos="flip-left" data-aos-duration="1000" >
                <p className='title-exp'><FaHotel className='icn-exp' /> Xantico Hostal</p>
                <p className='desc-exp'>Web hecha para el Hostal Xantico, la misma permite ver los distintos tipos de habitaciones,
                servicios y permite realizar una reserva.</p>
                <p className='title-util'>TECNOLOGIAS UTILIZADAS</p>
                <p className='tec-util'>- REACT, CSS, FIREBASE, MATERIAL UI, FIREBASE</p>
                <a className='btn-exp' href='https://xanticohostal.com/' target='_blank'>
                    WEB</a>
            </div>
            
            <div className='experience' data-aos="flip-left" data-aos-duration="1000" >
                <p className='title-exp'><BiCameraMovie className='icn-exp' /> Total Pelis</p>
                <p className='desc-exp'>Aplicacion web que permite buscar películas y ver detalles de las mismas como su
                    calificación y descripción, también permite agregarlas a favoritos.</p>
                <p className='title-util'>TECNOLOGIAS UTILIZADAS</p>
                <p className='tec-util'>- REACT, CSS, FIREBASE, HTML, API(The movie db), MONGODB, MONGOOSE.</p>
                <a className='btn-exp' href='https://github.com/AgustinBessone32/total-pelis' target='_blank'>
                    CÓDIGO</a>
                <a className='btn-exp' href='https://agustinbessone32.github.io/total-pelis/' target='_blank'>
                    WEB</a>
            </div>

            <div data-aos="flip-right" data-aos-duration="1000" className='experience-2'>
            
                <p className='title-exp'><TiWeatherCloudy className='icn-exp' /> Weater App</p>
                <p className='desc-exp'>Aplicacion web que permite consultar el clima de distintas ciudades asi como detalles
                    del mismo como el viento, la humedad, entre otros.</p>
                <p className='title-util'>TECNOLOGIAS UTILIZADAS</p>
                <p className='tec-util'>- REACT, CSS, HTML, API (Open Weather), BOOTSTRAP.</p>
                <a className='btn-exp' target='_blank' href='https://github.com/AgustinBessone32/whater-app'>
                    CÓDIGO</a>
                <a className='btn-exp' target='_blank' href='https://agustinbessone32.github.io/whater-app/#/'>
                    WEB</a>
            </div>

            <div className='experience-3' data-aos="flip-left" data-aos-duration="1000">
                <p className='title-exp'><BsMusicNoteBeamed />  BoomSounds</p>
                <p className='desc-exp'>E-commerce grupal en el cual se hace la venta de productos musicales
                    , incluye acciones como el checkout, administracion de usuario y carrito, entre otras</p>
                <p className='title-util'>TECNOLOGIAS UTILIZADAS</p>
                <p className='tec-util'>- REACT, REDUX, CSS, HTML, BOOTSTRAP, FIREBASE, SEQUELIZE, POSTGRESQL.</p>
                <a className='btn-exp' target='_blank' href='https://github.com/danieltkach/BoomSounds'>
                    CÓDIGO</a>
            </div>

            <div className='experience-4' data-aos="flip-right" data-aos-duration="1000">
                <p className='title-exp'><SiCashapp className='icn-exp' /> Te-Fio</p>
                <p className='desc-exp'>Aplicación web que le permite al comerciante poder tener un historial del detalle de los clientes y sus
                    deudas para con el comercio adherido.</p>
                <p className='title-util'>TECNOLOGIAS UTILIZADAS</p>
                <p className='tec-util'>- REACT, REDUX, CSS, HTML, MONGODB, MONGOOSE.</p>
                <a className='btn-exp' target='_blank' href='https://github.com/AgustinBessone32/te-fio'>
                    CÓDIGO</a>
                <a className='btn-exp' target='_blank' href='https://agustinbessone32.github.io/te-fio/'>
                    WEB</a>
            </div>

            <div className='experience-5' data-aos="flip-left" data-aos-duration="1000">
                <p className='title-exp'><BiWalletAlt className='icn-exp' /> Inro</p>
                <p className='desc-exp'>Aplicacion de celular el cual cumplia la funcion de billetera virtual, la misma
                    permitía realizar recargas de saldo, compras, transferencias, entre otras.</p>
                <p className='title-util'>TECNOLOGIAS UTILIZADAS</p>
                <p className='tec-util'>- REACT NATIVE, CSS, MATERIAL-UI, REDUX,  MONGODB, MONGOOSE.</p>
                <a className='btn-exp' target='_blank' href='https://github.com/danieltkach/henry-bank'>
                    CÓDIGO</a>
            </div>


        </div>
    )
}

export default Experiences