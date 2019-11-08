import React, {Component} from 'react'; 
import {Link} from 'react-router-dom'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 


export class Header extends Component{
    render(){
        return (
            <div>
                <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/client">Client</Link>

                </nav>
            </div>
        )
    }
}