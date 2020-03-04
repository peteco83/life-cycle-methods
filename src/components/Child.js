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
      const mystyle={
        color:"black",
        
      }
      const data=this.props.data.map((post)=>{
          return(
            <div  key={post.url} style={{
              width: "400px",
              marginBottom: "20px",
              border: "1px solid black",
              padding: "10px"
            }}>
                <img src={post.urlToImage} width="400" height="300" alt="noticias de argentina"/>
                <li> {post.title}</li>
                <p>{post.content}</p>
                <button><a href={post.url}>Read More</a></button>
            </div>
          )
      })
          return (
            <div style={mystyle}>
              <h1>Child Component</h1>
            {/* <h2>{this.props.count}</h2> */}

            <ul style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              listStyle: "none"
      
    
            }}>
              {data}
            </ul>
            </div>
          )
        }
      }

