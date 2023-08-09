import React from 'react';

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';


import "./Contacto.css";

const Contacto = () => {
  return (
    <section className="contact section">
      <h2 className='section__title'>
        Conectarse <span>Conmigo</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Deja tu mensaje, te contestare a la brevedad</h3>

          <p className="contact__description">
            Cualquier consulta que deseen hacerme estoy dispuesto a contestar, preguntas
            o dudas. Y recuerden siempre estoy dispuesto a compartir proyectos y a coolaborar en
            todo lo que pueda aportar a la comunidad.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <h4 className="info__title">Escribeme a :</h4>
                <h4 className='info__desc'> martinluboszyc@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <h4 className="info__title">Comunicate Conmigo al :</h4>
                <h4 className='info__desc'> 1125836065</h4>
              </div>
            </div>

          </div>

          <div className="contact__socials">
            <a href="https://www.facebook.com/" className="contact__social-link">
              <FaFacebookF />
            </a>

            <a href="https://www.linkedin.com/in/martin-luboszyc-40a0b01b2/" className="contact__social-link">
              <FaLinkedin />
            </a>

            <a href="https://github.com/AleLuboszyc" className="contact__social-link">
              <FaGithub />
            </a>

            <a href="https://www.youtube.com/channel/UCw9JTa5ulOVpJVlcVL8jF_A" className="contact__social-link">
              <FaYoutube />
            </a>
          </div>
        </div>

        <form className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input
                type="text"
                placeholder='Nombre'
                className='form__control'
              />
            </div>

            <div className='form__input-div'>
              <input
                type="email"
                placeholder='Email'
                className='form__control'
              />
            </div>

            <div className='form__input-div'>
              <input
                type="text"
                placeholder='Tu Consulta'
                className='form__control'
              />
            </div>
          </div>
          <div className='form__input-div'>
            <textarea placeholder='Deja tu mensaje' className="form__control textarea"></textarea>
          </div>
          <button className='button'>
            Enviar Mensaje
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacto;