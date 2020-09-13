import React, { Component } from 'react';
import axios from 'axios';

class Analytics extends Component {

    constructor(props){
        super(props)

        this.state={
            data:[],
        }
    }

    componentDidMount(){
        axios.get("https://disease.sh/v3/covid-19/countries").then(response =>{
            this.setState({data: response.data})
            console.log(this.state)
            

        }).catch(err =>{
            console.log(err)
        })
    }




    render() {

        let data=this.state.data.map(singleData =>{
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