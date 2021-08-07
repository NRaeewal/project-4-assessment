import React from 'react';
import './CircleSelector.css';



const CircleSelector =( props) => {

const click = e => {
    props.buttonChosenHandler(e.target.value)
}



    return (

        <div className='CircleSelector'>
        {console.log(props.buttonChosen)}

  
            <button className= {props.circleSelected === '1' ? 'selected' : ''} 
            value= '1'           
            onClick={click}>SELECT CIRCLE 1</button>
            <button className= {props.circleSelected === '2' ? 'selected' : ''}  
            value= '2'           
            onClick={click}>SELECT CIRCLE 2</button>
            <button className= {props.circleSelected === '3' ? 'selected' : ''} 
            value= '3'           
           
            onClick={click}>SELECT CIRCLE 3</button>
            <button className= {props.circleSelected === '4' ? 'selected' : ''}     
            value= '4'           
       
            onClick={click}>SELECT CIRCLE 4</button>

            </div>
)
    
}

export default CircleSelector;