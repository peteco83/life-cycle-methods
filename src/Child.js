import React, { Component } from 'react'

export default class Child extends Component {


  constructor(props){
    super(props);
    this.state={
        date:new Date(),
    }
    console.log("constructor in Child")
  }
 

  componentDidMount(){
      /* this.interval = setInterval(()=>{
          console.log("interval is running")
        this.setState({
            date:new Date()
        })
      },1000) */
      
    console.log("componentDidMount in Child")
  }
/* 
  shouldComponentUpdate(nextProps,nextState){
   if(nextProps.count<5){
       return true  
   }else{
       return false
   }
  
  }

  componentDidUpdate(prevProps,preState){

    console.log("updated in child")
  }
*/
  componentWillUnmount(){
 /*    clearInterval(this.interval) */
    console.log("componentWillUnmount in Child")
  } 
  render() {
 /*    console.log("render in Child") */
 const Data=this.props.data.map(post=>{
     return(
     <li key={post.id}> {post.title}</li>
     )
 })
    return (
      <div style={mystyle}>
        <h1>Child Component</h1>
    <h2>{this.props.count}</h2>
       <ul>
        {Data}
       </ul>
      </div>
    )
  }
}

const mystyle={
    color:"white",
    backgroundColor:"blue"
}