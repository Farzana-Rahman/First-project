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
            
            <h3>Let's know how to prevent COVID-19</h3>
            <div className="card-sec">

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img class="card-img-top" src={Logo2} alt="Card image cap"></img>
                    </div>
                    
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img className="card-img-top" src={Logo3} alt="Card image cap"></img>
                    </div>
                    
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img className="card-img-top" src={Logo4} alt="Card image cap"></img>
                    </div>
                    
                    </div>

                    

                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img className="card-img-top" src={Logo5} alt="Card image cap"></img>
                    </div>
                    
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img className="card-img-top" src={Logo8} alt="Card image cap"></img>
                    </div>
                    
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                        <img className="card-img-top" src={Logo7} alt="Card image cap"></img>
                    </div>
                    
                    </div>

                    

                </div>
                
                <div className="container-fluid">
                <h2>Protect yourself and others from COVID-19</h2>

                <p>* You can reduce your chances of being infected or spreading COVID-19 by taking some simple precautions:</p>

                <p> * Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water. Why? Washing your hands with soap and water or using alcohol-based hand rub kills viruses that may be on your hands.</p>
                <p> *  Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.</p>
                <p> * Avoid going to crowded places. Why? Where people come together in crowds, you are more likely to come into close contact with someone that has COVID-19 and it is more difficult to maintain physical distance of 1 metre (3 feet).</p> 
                <p> *  Governments should encourage the general public to wear a fabric mask if there is widespread community transmission, and especially where physical distancing cannot be maintained. Why? Masks are a key tool in a comprehensive approach to the fight against COVID-19. For more public advice on masks, read our Q&A and watch our videos."</p>
                <p> * Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and infect you.</p> 
                <p> * Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands. Why? Droplets spread virus. By following good respiratory hygiene, you protect the people around you from viruses such as cold, flu and COVID-19.</p>
                <p> *  Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others. Why? Avoiding contact with others will protect them from possible COVID-19 and other viruses.</p>
                <p> * If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority. Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.</p>
                <p> *  Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities. Why? Local and national authorities are best placed to advise on what people in your area should be doing to protect themselves.</p>

                </div>

                <p>Content Source: World Health Organisation(WHO)</p>
         </div>
            
        
        


         </Fragment>
        );
    }
}

export default Prevention;