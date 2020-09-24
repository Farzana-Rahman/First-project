import React, { Component } from 'react';

class Prediction extends Component {

    
    render() {
        return (
            <>
            <div>
                <h3>Let's predict the probability if you have COVID-19</h3>

                <h1><b>Do you have Fever ? </b></h1>
                <label>YES
                <input type="radio" name="ans" value="YES" style={{marginLeft:"5px"}}></input>
                </label> 
                <label style={{marginLeft:"15px"}}>NO
                <input type="radio" name="ans" value="NO" style={{marginLeft:"5px"}}></input>
                </label>

            </div>

            <div>

                <h1><b>Do you have Dry cough ? </b></h1>
                <label>YES
                <input type="radio" name="ans" value="YES" style={{marginLeft:"5px"}}></input>
                </label> 
                <label style={{marginLeft:"15px"}}>NO
                <input type="radio" name="ans" value="NO" style={{marginLeft:"5px"}}></input>
                </label>

            </div>

            <div>

                <h1><b>Do you have Sore throat ? </b></h1>
                <label>YES
                <input type="radio" name="ans" value="YES" style={{marginLeft:"5px"}}></input>
                </label> 
                <label style={{marginLeft:"15px"}}>NO
                <input type="radio" name="ans" value="NO" style={{marginLeft:"5px"}}></input>
                </label>

            </div>

            <div>

                <h1><b>Do you have Difficulty breathing or shortness of breath ? </b></h1>
                <label>YES
                <input type="radio" name="ans" value="YES" style={{marginLeft:"5px"}}></input>
                </label> 
                <label style={{marginLeft:"15px"}}>NO
                <input type="radio" name="ans" value="NO" style={{marginLeft:"5px"}}></input>
                </label>

            </div>

            <div>

                <h1><b>Do you have Chest pain or pressure ? </b></h1>
                <label>YES
                <input type="radio" name="ans" value="YES" style={{marginLeft:"5px"}}></input>
                </label> 
                <label style={{marginLeft:"15px"}}>NO
                <input type="radio" name="ans" value="NO" style={{marginLeft:"5px"}}></input>
                </label>

            </div>

            <div>

                <h1><b>Do you have Diarrhoea? </b></h1>
                <label>YES
                <input type="radio" name="ans" value="YES" style={{marginLeft:"5px"}}></input>
                </label> 
                <label style={{marginLeft:"15px"}}>NO
                <input type="radio" name="ans" value="NO" style={{marginLeft:"5px"}}></input>
                </label>

            </div>

            <div>

                <h1><b>Do you have Loss of speech or movement? </b></h1>
                <label>YES
                <input type="radio" name="ans" value="YES" style={{marginLeft:"5px"}}></input>
                </label> 
                <label style={{marginLeft:"15px"}}>NO
                <input type="radio" name="ans" value="NO" style={{marginLeft:"5px"}}></input>
                </label>

            </div>
            </>
        );
    }
}

export default Prediction;