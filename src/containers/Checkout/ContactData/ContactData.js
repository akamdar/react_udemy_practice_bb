import React, { Component } from "react";

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.scss';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component {

    state = {
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Ankit Kamdar',
                address: {
                street: 'Teststreet 1',
                zipcode: '411045',
                city: 'Pune',
                state: 'Maharashtra',
                country: 'India'
                },
                email: 'test1@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/order.json', order)
        .then(response => {
            this.setState({ loading: false });
            this.props.history.push("/");
        })
        .catch(error => {
            this.setState({ loading: false });
        });
    }

    render() {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Your Name"/>
                <input type="email" name="email" placeholder="Your Mail"/>
                <input type="text" name="street" placeholder="Street"/>
                <input type="text" name="postalCode" placeholder="Postal Code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if ( this.state.loading ) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                {form}      
            </div>
        )
    }
}

export default ContactData;