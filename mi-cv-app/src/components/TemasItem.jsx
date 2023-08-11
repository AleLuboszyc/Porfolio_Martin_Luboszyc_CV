// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const TemasItem = ({color, img, changeColor}) => {
  return <img src={img} alt='' className='theme__img' onClick={() => 
 {changeColor(color)}} />;
};

export default TemasItem;