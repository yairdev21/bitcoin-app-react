
import React, { Component } from 'react'
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import './SignupPage.css'

@inject('store')
@observer
class SignupPage extends Component {
    userStore = this.props.store.userStore

    @observable
    userName = ''

    handleChange = e => {
        this.userName = e.target.value;
    };

    handleSubmit = e => {
        e.preventDefault();
        this.userStore.signup(this.userName);
        this.props.history.push('/');
    };

    render() {
        const user = this.userName
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
