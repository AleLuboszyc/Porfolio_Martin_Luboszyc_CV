// eslint-disable-next-line no-unused-vars
import React from 'react';
import Perfil from "../../assets/perfil2.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import "./Home.css";


const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Perfil} alt='' className='home__img' />

      <div className="home__content">
        <div className="home__data">
          <h1 className='home__title'>
            <span>Hola Soy Martin Luboszyc.</span>
          </h1>
          <br />
          <p className="home_description">
            Tengo mas de 20 años de experiencia en ventas y
            atención al público.
            Me encanta trabajar en equipo en proyectos y poder
            juntos aprender compartiendo experiencias.
            Actualmente estoy a cargo de la gestión de clientes,
            tanto de cuentas corrientes y la captación de nuevos.
            Estoy estudiando la carrera en Técnico Analista de
            Sistemas, buscando oportunidades que permitan
            desarrollar mi crecimiento técnico y brindar mis
            habilidades a una empresa y su equipo de trabajo en el
            sector IT.
          </p>

          <Link to='/acerca' className='button'>
            Acerca de mi <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>

        </div>
      </div>

      <div className='color__block'></div>
    </section>
  )
}

export default Home;