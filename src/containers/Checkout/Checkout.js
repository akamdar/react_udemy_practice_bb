import React, { Component } from "react";
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {},
        price: 0
    }

    componentWillMount() {
        const ingredients = this.props.location.state.ingredients;
        const price = this.props.location.state.price;
        this.setState({ ingredients: ingredients, price: price});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route path={this.props.match.url + '/contact-data'} 
                    render={() => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...this.props}/>)}/>
            </div>
        )
    }
}

export default Checkout;