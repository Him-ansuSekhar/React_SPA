import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 

import { InvalidUrl } from './InvalidUrl';
import { Contact } from './contact';
import { Catalog } from './catalog';
import { Cart } from './cart';
import { Header } from './header';

import { Profile } from './profile';
import { Client } from './client';



ReactDOM.render(
  <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/cart" component={Cart}></Route>
      <Route path="/catalog" component={Catalog}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route path="/contact/:email" component={Contact}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/client" component={Client}></Route>
      <Route component={InvalidUrl}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));
