
import React, { Component } from 'react'
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import './SignupPage.scss'

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
            <div className="signupPage">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Your Name" name="name" value={user} onChange={this.handleChange} />
                    <button className="button button1">Signup</button>
                </form>
            </div>
        )
    }
}

export default SignupPage
