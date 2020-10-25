import React from 'react';
import '../../index.css'
import './Lectura.css'
import leftarrow from '../../images/FLETXA_INFO.png'
import rightarrow from '../../images/FLETXA_INFO_D.png'
import '../MainPage/MainPage.css'


function Lectura() {
  return (
    <div>
      <div className='Name'>
        <li><a href={"/#/"}>DAVID ALSINA MERCIER</a></li>
      </div>
      <div className='LeftArrow'>
        <li><a href={"/#/tresrosas"}>
          <img src={leftarrow} alt="arrow"/> 
        </a></li>
      </div>
      <div className='RightArrow'>
        <li><a href={"/#/oasis"}>
          <img src={rightarrow} alt="arrow"/> 
        </a></li>
      </div>
  </div>
  );
}

export default Lectura;