import React, { Component, Fragment } from 'react';

class Details extends Component {
    render() {
        return (
            <Fragment>
                <h3>What is COVID-19?</h3>
            <div className="container">
                <p>Coronavirus disease 2019 (COVID‑19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2).It was first identified in December 2019 in Wuhan, Hubei, China, and has resulted in an ongoing pandemic.</p>
                <h4>Symptoms:</h4>
                <p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>

                <h5>Most common symptoms:</h5>

                <p>Fever</p>

                <p>Dry cough</p>

                <p> Tiredness </p>

                <p>  Less common symptoms: </p>

                <p> Aches and pains </p>

                <p> Sore throat </p>

                <p> Diarrhoea </p>
                
                <p>Headache </p>

                <p> Loss of taste or smell </p>

                <p> A rash on skin, or discolouration of fingers or toes </p>
                <h5>Serious symptoms:</h5>
                <p>Difficulty breathing or shortness of breath</p>
                <p>Chest pain or pressure</p>
                <p>Loss of speech or movement</p>
                
                <h4>Cause:</h4>
                <p>COVID-19 is caused by infection with the severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) virus strain.</p>

                <h4>How COVID-19 Spreads</h4>
                <p>COVID-19 is thought to spread mainly through close contact from person-to-person. Some people without symptoms may be able to spread the virus. We are still learning about how the virus spreads and the severity of illness it causes.</p>
                <p>The virus is thought to spread mainly from person-to-person.

                    Between people who are in close contact with one another (within about 6 feet).
                    Through respiratory droplets produced when an infected person coughs, sneezes, or talks.
                    These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs.
                    COVID-19 may be spread by people who are not showing symptoms.
                 </p>
                 <p>It may be possible that a person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes. This is not thought to be the main way the virus spreads, but we are still learning more about how this virus spreads.</p>
                </div>
                <p style={{textAlign:"center"}}>Content Source:Wikipedia</p>    
          </Fragment>
        );
    }
}

export default Details;