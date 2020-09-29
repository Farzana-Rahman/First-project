import React, { Component,Fragment } from 'react';
import './Home.css'
import axios from 'axios';
import {Bar} from 'react-chartjs-2'

class Home extends Component {

    constructor(props){
        super(props)

        this.state={
            data1:[],
            lastUpdated:" ",

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

        
    const barchart =(
        
            <Bar
            data={{

                labels:['TotalConfirmed','TotalDeaths','TotalRecovered'],
                datasets:[{
                    label:'people',
                    backgroundColor:['blue','red','green'],
                    data:[this.state.data1.cases, this.state.data1.deaths, this.state.data1.recovered]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Worldwide state`}
            }}
            ></Bar>
        
    )


        return (
            <Fragment>
                <div className="head-sec">
                    <h3 >Last Updated : {new Date(this.state.lastUpdated).toDateString()}</h3>
                    <h2 style={{marginTop:"35px"}}>Worldwide COVID-19 Statistics</h2>
                </div>
               
                <div className="card-sec">
                <div className="row">
                    <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                            <h2>TotalConfirmed</h2>
                            <h4>{this.state.data1.cases}</h4>
                            <h4 style={{color:"#0e6785"}}>New Cases:  {this.state.data1.todayCases}</h4>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                        <h2>TotalDeaths</h2>
                        <h4>{this.state.data1.deaths}</h4>
                        <h4 style={{color:"#0e6785"}}>New Deaths:  {this.state.data1.todayDeaths}</h4>
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="card">
                        <div className="card-body">
                        <h2>TotalRecovered</h2>
                        <h4>{this.state.data1.recovered}</h4>
                        <h4 style={{color:"#0e6785"}}>New Recovered:  {this.state.data1.todayRecovered}</h4>
                        </div>
                    </div>
                    </div>

                </div>
                </div>
                <div className="barchart">
                    { barchart}
                </div>
            

                
            </Fragment>
        );
    }
}

export default Home;