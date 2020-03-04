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
    this.fetchData()
  }

  fetchData = async () => {
    try {
      const data = await fetch("http://newsapi.org/v2/top-headlines?country=ar&apiKey=f7485d2167cc493f9d605461d0779042")
  
      const jsonedData = await data.json()
      this.setState({
        data: jsonedData.articles
      })
  
      console.log(jsonedData)
     } catch(err) {
       console.log(err)
     }
  }
    
/*  
  shouldComponentUpdate(nextProps,nextState){
    console.log("ShouldComponentUpdate in App")
    return true
  }

  componentDidUpdate(prevProps,preState){
    console.log("updated in App")
  }*/
  componentWillUnmount(){
    console.log("componentWillUnmount in App")
  } 

  render() {
   /*  console.log("render in App") */
 
    return (
      <div>
        <h1>Lifecycles in React</h1>
        {this.state.status?<Child data={this.state.data}count={this.state.count}/>: null } 
        <button onClick={()=>this.setState({status:!this.state.status})}>Mount and unMount Child</button>
      </div>
    )
  }
}
