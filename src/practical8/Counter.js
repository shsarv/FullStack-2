import React, { Component } from 'react'
import '../CSS/practical8.css'

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            value:props.value,
        }
    }
    decrement=()=>{
        if(Number(this.state.value)>0){
            this.setState({
                value:Number(this.state.value)-1,
            });
        }
        else{
            this.setState({
                value:0,
            });
        }     
    }
    increment=()=>{
        this.setState({
            value:Number(this.state.value)+1,
        });      
}
reset=()=>{
    this.setState({
        value:0,
    });      
}
    render() {
        return (
            
        <div id="practical8">
            <h1 className="heading1">Question-1</h1>
            <hr id="hrtag"/>
            <h1 className="heading2" id="countshow">{this.state.value}</h1>
            <div>
                <button onClick={this.increment} id="increment">Increase</button>
                <button onClick={this.reset} id="reset">Reset</button>
                <button onClick={this.decrement} id="decrement">Decrease</button>
            </div>
        </div>
        )
    }
}
