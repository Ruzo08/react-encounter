import React, { Component } from 'react';

class Defaults extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <div className="display-3"> 404 </div>
                        <h1>error</h1>
                        <h2>Page Not Found</h2>
                        <h3>
                            The Requested URL
                            <span className="text-danger">{this.props.location.pathname}</span>{" "}
                            was not Found
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Defaults;