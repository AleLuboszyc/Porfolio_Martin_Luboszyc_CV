import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpg';
import Work4 from './assets/project-4.jpg';
import Work5 from './assets/proyect-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'Acerca de mi',
    icon: <FaUser className='nav__icon' />,
    path: '/acerca',
  },

  {
    id: 3,
    name: 'Portafolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portafolio',
  },

  {
    id: 4,
    name: 'Contacto',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contacto',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'Nombre : ',
    description: 'Martin',
  },

  {
    id: 2,
    title: 'Apellido : ',
    description: 'Luboszyc',
  },

  {
    id: 3,
    title: 'Edad : ',
    description: '42 Años',
  },

  {
    id: 4,
    title: 'Nacionalidad : ',
    description: 'Argentina',
  },

  {
    id: 5,
    title: 'Estado Civil : ',
    description: 'Casado',
  },

  {
    id: 6,
    title: 'Hijos : ',
    description: '1',
  },

  {
    id: 7,
    title: 'Dirección : ',
    description: 'Av.Corrientes 4552 PB 2, Almagro',
  },

  {
    id: 8,
    title: 'Teléfono : ',
    description: '1125836065',
  },

  {
    id: 9,
    title: 'Email : ',
    description: 'martinluboszyc@gmail.com',
  },

  {
    id: 10,
    title: 'Linkedin : ',
    description: 'https://www.linkedin.com/in/martin-luboszyc-40a0b01b2/',
  },

  {
    id: 11,
    title: 'Idiomas : ',
    description: 'Actualmente estudiando Ingles técnico',
  },

  {
    id: 12,
    title: ' : ',
    description: '',
  },
];

export const stats = [
  {
    id: 1,
    no: '20+',
    title: 'Años de <br /> Experiencia <br /> en Ventas',
  },

  {
    id: 2,
    no: '10+',
    title: 'De Proyectos <br /> con distintos <br /> Lenguajes <br /> completados',
  },

  {
    id: 3,
    no: '1+',
    title: 'Actualmente <br /> cursando la carrera de <br /> Analista de Sistemas',
  },

  {
    id: 4,
    no: '26+',
    title: ' Certificados <br /> de Estudios y capacitaciones <br /> obtenidos <br /> en los ultimos <br /> 2 años ',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2017 - PRESENTE',
    title: 'Encargado en el Area de ventas <span> y atención al cliente </span>',
    desc: 'Actualmente estoy trabajando en la empresa La Ferretera Industrial SRL, ubicada en el barrio de Mataderos',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2017',
    title: 'Corredor de Ventas<span> y Servicios </span>',
    desc: 'Proveedor de herramientas de corte y uso industrial en la firma Distool Srl',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2011 - 2017',
    title: 'Encargado de Ferreteria Industrial </span>',
    desc: 'Encargado en historica ferreteria del barrio de constitución, Zurich Tools SA',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'IFTS Nº 18 Instituto de Formación Técnica Superior  </span>',
    desc: 'Actualmente cursando la carrera de Tecnicatura superior en Analista de Sistemas.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'Full Stack Python Agencia de Aprendizaje a lo largo de la vida.  </span>',
    desc: 'Curso de capacitación del programa Codo a Codo 4.0 para desarrollador web en lenguaje python.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2001',
    title: 'Escuela de Comercio Nº 8 Patricias Argentinas </span>',
    desc: 'Titulo de Perito Mercantil',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '80',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '70',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Python',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Node JS',
    percentage: '45',
  },

  {
    id: 6,
    title: 'Vue',
    percentage: '30',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '30',
  },

  {
    id: 8,
    title: 'React',
    percentage: '65',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Proyecto en React',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Website ',
      },
      {
        icon: <FiUser />,
        title: 'Codo a Codo 4.0 : ',
        desc: 'Trabajo Integrador Final ',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link : ',
        desc: 'https://www.youtube.com/watch?v=gwycjlidfmQ&ab_channel=MartinAlejandroLuboszyc',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Pagina Web',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Fundación',
      },
      {
        icon: <FiUser />,
        title: 'Codo a Codo 4.0 : ',
        desc: 'Proyecto Integrador',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'Html, CSS, JavaScript, Api',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link : ',
        desc: 'https://github.com/AleLuboszyc/Trabajo-Practico-Codo-a-Codo',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Trabajo Práctico',
    details: [
      {
        icon: <FiFileText />,
        title: 'Proyecto : ',
        desc: 'Barberia',
      },
      {
        icon: <FiUser />,
        title: 'Alura Latam : ',
        desc: 'Practico',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, CSS, JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link : ',
        desc: 'https://github.com/AleLuboszyc',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Certificado Full Stack Python',
    details: [
      {
        icon: <FiFileText />,
        title: 'Certificado : ',
        desc: 'Full Stack Python',
      },
      {
        icon: <FiUser />,
        title: 'Codo a Codo 4.0 : ',
        desc: 'Curso Full Stack Python',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link : ',
        desc: 'https://drive.google.com/file/d/1KVTerZytpK4390tb1Q8ywT5gsIwiD_iE/view',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Certificado Gestion del Conocimiento',
    details: [
      {
        icon: <FiFileText />,
        title: 'Certificado : ',
        desc: 'Especialización',
      },
      {
        icon: <FiUser />,
        title: 'IFYPG : ',
        desc: 'Curso',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'Gestion del conocimiento.',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link : ',
        desc: 'https://drive.google.com/file/d/1EYxGXxje75v7ApwfBEpD-UOC9xhkgnTj/view',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Marketing Digital',
    details: [
      {
        icon: <FiFileText />,
        title: 'Certificado : ',
        desc: 'Marketing Digital',
      },
      {
        icon: <FiUser />,
        title: 'Digital Ad Expert : ',
        desc: 'Digital Ad Certificate',
      },
      {
        icon: <FaCode />,
        title: 'Lenguaje : ',
        desc: 'Marketing Digital',
      },
      {
        icon: <FiExternalLink />,
        title: 'Link : ',
        desc: 'https://learn.digitaladexpert.com/es/certificado/?course_id=35967&user_id=6373',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
