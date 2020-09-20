import React, { Component } from 'react';
import axios from 'axios';
import {BeatLoader } from 'react-spinners'

class Analytics extends Component {

    constructor(props){
        super(props)

        this.state={
            data:[],
            search:" ",
            loading:true,
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
                <td>{singleData.country}</td>
                <td>{singleData.todayCases}</td>
                <td>{singleData.todayDeaths}</td>
                <td>{singleData.todayRecovered}</td>
                <td>{singleData.cases}</td>
                <td>{singleData.deaths}</td>
                <td>{singleData.recovered}</td>
        

            </tr>)
        })



        return (
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
        );
    }
}

export default Analytics;