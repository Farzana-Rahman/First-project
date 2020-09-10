import React, { Component,Fragment } from 'react';
import './Home.css'

class Home extends Component {

    

    render() {


        return (
            <Fragment>
                <h3>Last Updated: </h3>
                <div className="card-sec">
                <div className="row">
                    <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h2>TotalConfirmed</h2>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                        <h2>TotalDeaths</h2>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                        <h2>TotalRecovered</h2>
                        </div>
                    </div>
                    </div>

                </div>
                </div>




                
            </Fragment>
        );
    }
}

export default Home;