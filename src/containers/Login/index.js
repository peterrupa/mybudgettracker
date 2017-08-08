import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

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
                <a href="http://localhost:8000/auth/google">Sign in with Google</a>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
