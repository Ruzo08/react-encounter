import React, { Component } from 'react';
import {storeCourse,detailCourse} from './data';

const CourseContext = React.createContext();

class CourseProvider extends Component {
    state={
        course:[],
        detailCourse:detailCourse,
        cart:[],
        modalOpen : false,
        modalCourse : detailCourse,
        cartSubtotal : 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount(){
        this.setCourse();
    }

    setCourse = () => {
        let tempCourses=[];
        storeCourse.forEach(item =>{
            const singleItem = {...item};
            tempCourses = [...tempCourses, singleItem];
        });
        this.setState(() =>{
            return {course:tempCourses};
        });
    }

    getItem = id => {
        const courses = this.state.course.find(item => item.id === id);
        return courses;
    }

    handleDetail = id => {
        const courses = this.getItem(id);
        this.setState(() => {
                return {detailCourse:courses}
            }
        )
    }

    addToCart = id => {
        let tempCourse = [...this.state.course];
        const index = tempCourse.indexOf(this.getItem(id));
        const courses = tempCourse[index];
        courses.inCart = true;
        courses.count = 1;
        const price = courses.price;
        courses.total = price;
        this.setState(() => {
                return {course:tempCourse, cart:[...this.state.cart, courses]};
            },
            () => {
                this.addTotals();
            }
        )
    }

    openModal = id => {
        const courses = this.getItem(id);
        this.setState(() => {
                return {modalCourse:courses, modalOpen: true}
            }
        )
    }

    closeModal = id => {
        this.setState(() => {
                return{modalOpen:false}
            }
        )
    }

    increase = id => {
        let tempCart = [...this.state.cart];
        const selectedCourse = tempCart.find(item => item.id === id)
        const index =  tempCart.indexOf(selectedCourse);
        const courses = tempCart[index];

        courses.count = courses.count+1;
        courses.total = courses.count * courses.price;

        this.setState(() => {
                return {cart : [...tempCart]}
            }, () => {
                this.addTotals();
            }
        )
    }

    decrease = id => {
        let tempCart = [...this.state.cart];
        const selectedCourse = tempCart.find(item => item.id === id)
        const index =  tempCart.indexOf(selectedCourse);
        const course = tempCart[index];

        course.count = course.count-1;
        if (course.count===0){
            this.removeItem(id);
        } else {
            course.total = course.count * course.price;
            this.setState(() => {
                    return {cart : [...tempCart]}
                }, () => {
                    this.addTotals();
                }
            )
        }
    }

    removeItem = id => {
        let tempCourses = [...this.state.course];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id != id);

        const index = tempCourses.indexOf(this.getItem(id));
        let removeCourse = tempCourses[index];
        removeCourse.inCart = false;
        removeCourse.count = 0;
        removeCourse.total = 0;

        this.setState (()=> {
                return {
                    cart : [...tempCart],
                    course: [...tempCourses]
                };
            }, () => {
                this.addTotals();
            }
        )
    }

    clearCart = () => {
            this.setState(() => {
                return {cart:[]};
            }, () => {
                this.setCourse();
                this.addTotals();
            }
        );
    }

    addTotals = () => {
        let subtotal = 0;
        this.state.cart.map(item => (subtotal += item.total));
        const tempTax = subtotal * 0.1;
        const tax = parseFloat (tempTax.toFixed(2));
        const total = subtotal + tax;
        this.setState(() => {
                return {
                    cartSubtotal : subtotal,
                    cartTax : tax,
                    cartTotal : total
                }
            }
        )
    }

    jmlhProduct = id =>{
        let tempCart = [...this.state.cart];
        const selectedCourse = tempCart.find(item => item.id === id)
        const index =  tempCart.indexOf(selectedCourse);
        const course = tempCart[index];

        let jmlh = course.count;
        jmlh += jmlh
        
    }

    render() {
        return (
           <CourseContext.Provider value={{...this.state, handleDetail:this.handleDetail, addToCart:this.addToCart,
            openModal:this.openModal, closeModal:this.closeModal, increase:this.increase, decrease:this.decrease,
            removeItem:this.removeItem, clearCart:this.clearCart}}>
               {this.props.children}
           </CourseContext.Provider>
        );
    }
}

const CourseConsumer = CourseContext.Consumer;

export {CourseProvider,CourseConsumer};