import React, { Component } from 'react';

class Admin extends Component {

    state = {
        category: null
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            category: e.target.value
        })
    }

    onSubmit = () => {

    }

    render() {
        return (
            <form>
                <p>Enter Category:</p>
                <input
                    type='text'
                    onChange={this.handleChange}
                /><br />
                <button onClick={this.Submit}>Submit</button>
            </form>
        )
    }

}

export default Admin;