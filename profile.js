import React, {Component} from 'react'; 
import {Switch, Link, Route} from 'react-router-dom'; 
import { BusinessProfile } from './business';
import { PersonalProfile } from './personal';

export class Profile extends Component{
    render(){
        return (
            <div>
                <h2>Profile Component</h2>
                <ul>
                    <li><Link to="/profile/business">Business</Link></li>
                    <li><Link to="/profile/personal">Personal</Link></li>
                </ul>
                <Switch>
                    <Route path='/profile/business' component={BusinessProfile}/>
                    <Route path='/profile/personal' component={PersonalProfile}/>
                </Switch>
            </div>

        )
    }
}