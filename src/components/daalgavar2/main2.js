import React from 'react';
import './main2.css';
import Topboxleft from './topboxleft';
import Toprightbox from './toprightbox';
import Bottombox from './bottombox';

function Main2() {
  return (
     <div className='tombox'>
        <div className='dundbox'><Topboxleft/><Toprightbox/></div>
        <div className='jijigbox'><Bottombox/></div>
     </div>
    
  );
}

export default Main2;