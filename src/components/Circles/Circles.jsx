import React from 'react';
import './Circles.css'


const Circles = (props) => {

    
    return (
    <div className='Circles'>
        <div className={props.buttonChosen === '1' ? 'selected' : ''} >1</div>
        <div className={props.buttonChosen === '2' ? 'selected' : ''} >2</div>
        <div className={props.buttonChosen === '3' ? 'selected' : ''} >3</div>
        <div className={props.buttonChosen === '4' ? 'selected' : ''} >4</div>

    </div>
)
};


export default Circles; 