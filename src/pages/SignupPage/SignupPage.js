
import React, { Component } from 'react'
import UserService from '../../services/UserService'
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';


import './SignupPage.css'

@inject('store')
@observer
class SignupPage extends Component {
    userStore = this.props.store.userStore

    @observable
    user = ''

    handleChange = e => {
        this.user = e.target.value;
    };

    handleSubmit = e => {
        e.preventDefault();
        UserService.signup(this.user);
        this.userStore.fetchUser()
        const { history } = this.props;
        history.push('/');
    };

    render() {
        const user = this.user
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={user} onChange={this.handleChange} />
                    <button>Signup</button>
                </form>
            </div>
        )
    }
}

export default SignupPage
