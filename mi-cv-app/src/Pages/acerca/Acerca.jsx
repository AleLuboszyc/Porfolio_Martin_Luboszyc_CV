// eslint-disable-next-line no-unused-vars
import React from 'react';
import Info from '../../components/Info';
import Estadisticas from '../../components/Estadisticas';
import { FaDownload } from 'react-icons/fa';
import CV from "../../assets/CV Martin Luboszyc.pdf";
import Habilidades from '../../components/Habilidades';
import { resume } from '../../data';
import Resultado from '../../components/Resultado';
import './Acerca.css';

const Acerca = () => {
  return (
    <main className='section container'>
      <section className='acerca'>
      <h2 className='section__title'>
        Acerca <span>De Mi</span>
      </h2>

      <div className="acerca__container grid">
        <div className="acerca__info">
          <h3 className="section__subtitle">Información Personal</h3>

          <ul className='info__list grid'>
            <Info />

            <a href={CV} download='' className="button">
              Descargar CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </ul>
        </div>

        <div className='estadisticas grid'>
          <Estadisticas />
        </div>
      </div>  
     </section>

     <div className="separador"></div>

     <section className='habilidades'>
      <h3 className='section__subtitle subtitle__center'>Mis Habilidades</h3>

      <div className='habilidades__container grid'>
        <Habilidades />
      </div>
     </section>

     <div className="separador"></div>

    <section className='resume'>
      <h3 className='section__subtitle subtitle__center'>
        Experiencia Laboral y Educación
      </h3>

      <div className="resume__container grid">
        <div className="resume__data">
          {resume.map((val)=> {
            if(val.category === 'experience') {
              return <Resultado key={val.id} {...val} />;
            }
          })}
        </div>

        <div className="resume__data">
          {resume.map((val)=> {
            if(val.category === 'education') {
              return <Resultado key={val.id} {...val} />;
            }
          })}
        </div>
      </div>
    </section>
    </main>
  )
}

export default Acerca;