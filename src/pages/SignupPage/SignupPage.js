
import React, { Component } from 'react'
import UserService from '../../services/UserService'

import './SignupPage.css'


class SignupPage extends Component {
    state = {
        user: null
    }
    handleChange = e => {
        this.setState({ user: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();
        await UserService.signup(this.state.user);
        this.props.onSignup(this.state.user)
        const { history } = this.props;
        history.push('/');
    };

    render() {
        const {user} = this.state
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={user||''} onChange={this.handleChange} />
                <button>Signup</button>
                </form>
            </div>
        )
    }
}

export default SignupPage
