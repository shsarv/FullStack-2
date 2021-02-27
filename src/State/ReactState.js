import React, { Component } from 'react'

export default class ReactState extends Component {
    constructor(){
        super();
        this.state={
            id:1,
            name:"Sarvesh",
        }
    }
    updateMe=()=>{
            this.setState({
                id:10,
                name:"Sarvesh Kumar Sharma",
            })
                
            
    }
    render() {
        return (
            <div>
                <h1>My id is - {this.state.id} and my name is {this.state.name}</h1>
                <button onClick={this.updateMe}>Click Me</button>
            </div>
        )
    }
}
