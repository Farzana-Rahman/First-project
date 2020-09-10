import React, { Component,Fragment} from 'react';
import Logo2 from '../images/img2.png';
import Logo3 from '../images/img3.jpg';
import Logo4 from '../images/img4.png';
import Logo5 from '../images/img5.png';
import Logo7 from '../images/img7.jpg';
import Logo8 from '../images/img8.png';




class Prevention extends Component {

    render() {



        return (
            <Fragment>
            
            <h4>Let's know how to prevent COVID-19</h4>
            <div className="card-sec">

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img class="card-img-top" src={Logo2} alt="Card image cap"></img>
                    </div>
                    
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img class="card-img-top" src={Logo3} alt="Card image cap"></img>
                    </div>
                    
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img class="card-img-top" src={Logo4} alt="Card image cap"></img>
                    </div>
                    
                    </div>

                    

                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img class="card-img-top" src={Logo5} alt="Card image cap"></img>
                    </div>
                    
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img class="card-img-top" src={Logo8} alt="Card image cap"></img>
                    </div>
                    
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img class="card-img-top" src={Logo7} alt="Card image cap"></img>
                    </div>
                    
                    </div>

                    

                </div>
         </div>
            
        
        


         </Fragment>
        );
    }
}

export default Prevention;