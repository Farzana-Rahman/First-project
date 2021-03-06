import React, { Component } from 'react';
import Questions from './QuestionData'


class Question extends Component {

    constructor(props){
        super(props)

        this.state={
            userAns:null,
            currentIndex:0,
            option:[],
            ending:false,
            score:0,
            disable:true,
            color:false

        }
    }



    load(){
        const {currentIndex} =this.state;
        this.setState(() => {
            return{
                question:Questions[currentIndex].question,
                option:Questions[currentIndex].option,
                ans:Questions[currentIndex].ans,
            }
        })
    }



    nextQues = () =>{
        const {userAns,score,ans} = this.state;

        if(userAns === ans){
            this.setState({score:score+1 })
        }

        this.setState({
            currentIndex: this.state.currentIndex +1,
            userAns:null,
        })
    }



    componentDidMount(){
        this.load();
    }



    checkAns(answer){
        this.setState({
            userAns:answer,
            disable:false,
        })


    }

    
    
    finish = () =>{
        if(this.state.currentIndex === Questions.length-1){
            this.setState({ending:true})
        }
    }


    
    componentDidUpdate(prevProps,prevState){
        const {currentIndex} =this.state;
        if(this.state.currentIndex !== prevState.currentIndex){

            this.setState(() => {
                return{
                    question:Questions[currentIndex].question,
                    option:Questions[currentIndex].option,
                    ans:Questions[currentIndex].ans,
                    disable:true,
                }
            })

        }

    }

    render() {

        let {question,option,ans,currentIndex,userAns,ending,score}=this.state;
        if(ending){
            if(score===1){
                return(<div>
                    <h2 style={{marginTop:"100px"}}>There is 16.66% chance that you are COVID-19 positive</h2>
                </div>
                
             )
            }
            else if(score===2){
                return(<div>
                    <h2 style={{marginTop:"100px"}}>There is 33.33% chance that you are COVID-19 positive</h2>
                </div>
                
             )
            } 
            else if(score===3){
                return(<div>
                    <h2 style={{marginTop:"100px"}}>There is 50% chance that you are COVID-19 positive</h2>
                </div>
                
             )
            }
            else if(score===4){
                return(<div>
                    <h2 style={{marginTop:"100px"}}>There is 66.66% chance that you are COVID-19 positive</h2>
                </div>
                
             )
            }      

            else if(score===5){
                return(<div>
                    <h2 style={{marginTop:"100px"}}>There is 100% chance that you are COVID-19 positive</h2>
                </div>
                
             )
             
            }
            
            

        }
        
        return (
            <>
            <div>
                <h1>{question}</h1>
                {
                 option.map(option =>
                        <h4 key={option.id}  onClick={()=>this.checkAns(option)} className={`options ${ userAns===option ? "select" :null}`}>
                           {option} 
                        </h4>

                    )
                }
                {
                    currentIndex < Questions.length-1
                    ?<button disable={this.state.disable} onClick={this.nextQues} className="btn">NEXT</button>
                    :null
                }
                {
                    currentIndex === Questions.length-1
                    ?<button disable={this.state.disable} onClick={this.finish} className="btn">RESULT</button>
                    :null
                }

               
                
                
            </div>
            </>
        );
    }
}

export default Question;