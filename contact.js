import React, {Component} from 'react'; 
export class Contact extends Component{
    render(){
        return(
            <div>
                <h3>This is the contact component. </h3>
                <h5>Welcome {this.props.match.params.email}</h5>
            </div>
        )
    }
}