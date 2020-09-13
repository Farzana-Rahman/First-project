import React, { Component,Fragment } from 'react';
import './Home.css'
import axios from 'axios';

class Home extends Component {

    constructor(props){
        super(props)

        this.state={
            data1:[],
            lastUpdated:" "

        }


    }

    componentDidMount(){

        axios.get("https://disease.sh/v3/covid-19/all")
        .then(response =>{
            this.setState({data1:response.data})
            this.setState({lastUpdated: response.data.updated})
            console.log(this.state)
        })
        .catch(error =>{
            console.log(error)
        })
    }


    render() {


        return (
            <Fragment>
                <div className="head-sec">
                    <h3>Last Updated : {new Date(this.state.lastUpdated).toDateString()}</h3>

                    <form>
                        <select className="select-sec">
                            <option>country 1</option>
                            <option>country 2</option>
                            <option>country 3</option>
                        </select>
                    </form>
                </div>
               
                <div className="card-sec">
                <div className="row">
                    <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h2>TotalConfirmed</h2>
                            <h5>{this.state.data1.cases}</h5>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                        <h2>TotalDeaths</h2>
                        <h5>{this.state.data1.deaths}</h5>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                        <h2>TotalRecovered</h2>
                        <h5>{this.state.data1.recovered}</h5>
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