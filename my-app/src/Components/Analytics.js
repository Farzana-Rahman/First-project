import React, { Component } from 'react';
import axios from 'axios';
import {BeatLoader } from 'react-spinners'
import {Bar} from 'react-chartjs-2'
 

class Analytics extends Component {

    constructor(props){
        super(props)

        this.state={
            data:[],
            search:" ",
            loading:true,
            country:" ",
            countryInfo:{},
            name:" ",
           
        }
  }

    componentDidMount(){
        axios.get("https://disease.sh/v3/covid-19/countries").then(response =>{
            this.setState({data: response.data})
            this.setState({loading:false})
             console.log(this.state)
            

        }).catch(err =>{
            console.log(err)
        })
    }


   
    updateSearch(event){
        this.setState({search: event.target.value})
    }

    
    changeHandler = (e) =>{
        const countryCode=e.target.value;

        axios.get(`https://disease.sh/v3/covid-19/countries/${countryCode}`).then(response=>{
            this.setState({country:countryCode})
            this.setState({countryInfo:response.data})
            this.setState({name:response.data.country})
            console.log(this.state)

        }).catch(err =>{
            console.log(err)
        })

   

    }



    render() {

        if(this.state.loading){
            return <div className="load">
                <h1>Loading</h1>
                <BeatLoader></BeatLoader>
            </div>
        }
        
         
        let filterdCountries=this.state.data.filter(
            (c) =>{
                return c.country.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );



        let data=filterdCountries.map(singleData =>{
            return(<tr key={singleData.index}>
                <td><button onClick={this.changeHandler.bind(this)} value={singleData.countryInfo.iso2} className="btn1">{singleData.country}</button></td>
                <td>{singleData.todayCases}</td>
                <td>{singleData.todayDeaths}</td>
                <td>{singleData.todayRecovered}</td>
                <td>{singleData.cases}</td>
                <td>{singleData.deaths}</td>
                <td>{singleData.recovered}</td>
        

            </tr>)
        })

        const barchart =(
        
            <Bar
            data={{

                labels:['TotalConfirmed','TotalDeaths','TotalRecovered',],
                datasets:[{
                    label:'people',
                    backgroundColor:['blue','red','green',],
                    data:[ this.state.countryInfo.cases,
                        this.state.countryInfo.deaths,
                        this.state.countryInfo.recovered,
                       
                        ]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`COVID-19 state in ${this.state.name}`}
            }}
            ></Bar>
        
    )



        return (
            <>
            <div className="app">
            <div>

                <div className="search">
                <input type="text" placeholder="Search a Country" onChange={this.updateSearch.bind(this)}></input>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>NewConfirmed</th>
                            <th>NewDeaths</th>
                            <th>NewRecovered</th>
                            <th>TotalConfirmed</th>
                            <th>TotalDeaths</th>
                            <th>TotalRecovered</th>
                        </tr>

                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
                
            </div>
            
            <div className="barchart2">
                    { barchart}
        
            </div>
            
            </div>
            </>
        );
    }
}

export default Analytics;