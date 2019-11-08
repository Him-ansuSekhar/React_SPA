import React, {Component} from 'react'; 
export class Cart extends Component{
    render(){
        return(
           <div> 
                <h3>This is the Cart component. </h3>
                <button onClick={()=>this.props.history.push('/')}>Home</button>
                <button onClick={()=>this.props.history.push('/contact')}>Contact</button>
           </div>
        )
    }
}