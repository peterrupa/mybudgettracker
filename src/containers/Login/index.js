import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

// @TODO: hardcoded url

class Login extends Component {
    checkUser = user => {
        const { push } = this.props.history;

        if (user) {
            push('/home');
        }
    };

    componentWillMount() {
        const { user } = this.props.user;
        const { checkUser } = this;

        checkUser(user);
    }

    componentWillReceiveProps(newProps) {
        const { user } = newProps.user;
        const { checkUser } = this;

        checkUser(user);
    }

    render() {
        return (
            <div className="Login">
                <a href="http://dev.mybudgettracker.com:8000/auth/google">
                    Sign in with Google
                </a>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
