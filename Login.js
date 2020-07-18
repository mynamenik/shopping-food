import React, { Component } from 'react';



class Login extends Component {

    render() {
        return (

            <div className="container">
                <hr />
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="panel panel-primary">
                        <div className="panel-heading"><h3>Log in </h3></div>
                        <div className="panel-body">
                            <form onSubmit={this.submitLogin}>
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input type="text" className="form-control"
                                        name="name" onChange={this.handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type="password" className="form-control"
                                        name="password" onChange={this.handleInputChange} />
                                </div>
                                <button type="submit" className="btn btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );


    }

}

export default Login;