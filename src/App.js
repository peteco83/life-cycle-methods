import React, { Component } from 'react'
import Child from './Child';

export default class App extends Component {


  constructor(props){
    super(props);

    this.state={
      count: 0,
      status:true,
      data:[]
    }

  }


  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(convertedData=>{
        this.setState({
          data:convertedData
        })
    })
    console.log("Fetching data in app")
  }
/*  
  shouldComponentUpdate(nextProps,nextState){
    console.log("ShouldComponentUpdate in App")
    return true
  }

  componentDidUpdate(prevProps,preState){
    console.log("updated in App")
  }
  componentWillUnmount(){
    console.log("componentWillUnmount in App")
  } */
  render() {
   /*  console.log("render in App") */
 
    return (
      <div>
        <h1>Lifecycles in React</h1>
        {this.state.status?<Child data={this.state.data}count={this.state.count}/>: null } 
        <button onClick={()=>this.setState({count:this.state.count+1})}>Click</button>
        <button onClick={()=>this.setState({status:!this.state.status})}>Mount and unMount Child</button>
      </div>
    )
  }
}
