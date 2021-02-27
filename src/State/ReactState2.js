import React, { Component } from 'react'

export default class ReactState2 extends Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.id,
            name:this.props.name,
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
