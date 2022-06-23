import React from "react";

class Test extends React.Component {
    y=0
    constructor() {
        super();
        this.state = {
            data: "",
            image:"",
        }
    this.the_fetch=this.the_fetch.bind(this)
    }
   
    async the_fetch(){
       let random_number=Math.round((Math.random()*100)%57)
        let query=await fetch("https://www.breakingbadapi.com/api/characters/"+random_number)
        let resualt=await query.json()
  
        if(query.status===200){
            this.setState({data:resualt["0"].name,image:resualt["0"].img})
        }
        else{
            this.setState({data:"can't fetch the api"})
        }
        
    }
    render() {
        return (
            <div onClick={this.the_fetch}>
                <h1> hello {' ' + this.state.data}</h1>
                {!(this.state.image==="")&&<img src={this.state.image} width={200} height={200} alt='cast' hidden={false}></img>}
            </div>
        )
    }
}
export default Test