import React, { Component } from 'react'
import '../CSS/practical8.css'
export default class Show extends Component {
    constructor(props){
        super(props);
        this.state={
            content:this.props.data,
            flag:false,
            description:"Read More"
        }
    }
    viewMore=()=>{
        if(this.state.flag===false){
        this.setState({
            content:"I am A CSE Student at GLA University Mathura and I love Doing Data Science and Machine Learning Projects.Please reach me for any help I Love AI. Click Below to show less !!!!!!!",
            flag:true,
            description:"Read Less",
        })
    }
        else{
            this.setState({
                content:this.props.data,
                flag:false,
                description:"Read More",
            })
        }
    };
    render() {
        return (
            <div id="practical8">
            <h1 className="heading1">Question-2</h1>
                <hr id="hrtag"/>
                <h2>Hii🖐️, I am Sarvesh Kumar Sharma</h2>
                <p>{this.state.content}</p>
                <button id="final" onClick={this.viewMore}>{this.state.description}</button>
            </div>
        )
    }
}
