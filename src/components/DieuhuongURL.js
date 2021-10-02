import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import {AnimatePresence,motion } from "framer-motion"
import Home from './Home';
import ProductDesktop from './ProductDesktop';
import ProductItem from './ProductItem';
import ProductLaptop from './ProductLaptop';
import ProductSmartphone from './ProductSmartphone';
import LaptopitemDetail from './LaptopitemDetail';
import LaptopContainer from '../containers/LaptopContainer';
import ProductCart from './ProductCart';
import CartContainer from '../containers/CartContainer';
import LaptopDetail from '../containers/LaptopDetail';
import NewsTech from './NewsTech';

class DieuhuongURL extends Component {
    render() {
        return (
            <AnimatePresence exitBeforeEnter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/ProductLaptop" component={LaptopContainer} />
                <Route exact path="/ProductDesktop" component={ProductDesktop} />
                <Route exact path="/ProductSmartphone" component={ProductSmartphone} />
                <Route exact path="/ProductItem" component={ProductItem} />
                <Route exact path="/LaptopitemDetail/:slug.:id.html" component={LaptopDetail} />
                <Route exact path="/CartContainer" component={CartContainer} />
                <Route exact path="/Technews" component={NewsTech} />
            </Switch>
            </AnimatePresence>
        );
    }
}


export default DieuhuongURL;