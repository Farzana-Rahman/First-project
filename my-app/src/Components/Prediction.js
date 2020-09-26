import React, { Component } from 'react';
import Question from './Question';

class Prediction extends Component {

    
    render() {
        return (
            <>
            <div style={{textAlign:"center"}}>

                <h3>Let's predict the probability if you have COVID-19</h3>


            <div className="op-style" >
                  <Question></Question>
            </div>
  
        
            </div>
           
            </>
        );
    }
}

export default Prediction;