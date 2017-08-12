import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserActions from '../../redux/user';

import './style.css';

class Settings extends Component {
    logout = () => {
        const { requestLogout } = this.props;

        // @TODO: loading indicator
        requestLogout();
    };

    render() {
        const { logout } = this;

        return (
            <div className="Settings">
                <button onClick={logout}>Logout</button>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        requestLogout: () => {
            dispatch(UserActions.requestLogout());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
