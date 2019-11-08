import React, {Component} from 'react'; 
import axios from 'axios'; 
export class Client extends Component{
    constructor(props){
        super(props); 
        this.state={clients: []}
        
        //Getting Request
        axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            //Success Callback
            console.log("Response Received"); 
            console.log(response); 
            this.setState({clients: response.data})
        }, (status)=>{
            //Failure Callback 
            console.log("Something went wrong....."+status); 
        });

        
    }

    render(){
        return (
            <div>
                <h3>Our Clients</h3>
                
            </div>

        )
    }
}