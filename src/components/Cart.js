import React, { Component } from 'react';
import Title from './Title';
import CartColumns from './CartColumns';
import Empty from './Empty';
import {CourseConsumer} from '../Context';
import CartList from './CartList';
import CartTotal from './CartTotal';

class Cart extends Component {
    render() {
        return (
            <section>
                <CourseConsumer>
                    {value => {
                            const {cart} = value;
                            if(cart.length>0){
                                return (
                                    <React.Fragment>
                                        <Title name="your" title="cart"/>
                                        <CartColumns/>
                                        <CartList value={value}/>
                                        <CartTotal value={value}/>
                                    </React.Fragment>
                                );
                            }else {
                                return(<Empty/>)
                            }
                        }
                    }
                </CourseConsumer>
            </section>
        );
    }
}

export default Cart;