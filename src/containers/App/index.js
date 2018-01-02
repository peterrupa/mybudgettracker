import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { history } from '../../redux';

import UserActions from '../../redux/user';

import Home from '../Home';
import Login from '../Login';

import Loading from '../../components/Loading';

const wrapperStyle = {
    height: '100%'
};

class App extends Component {
    componentDidMount() {
        const { requestWhoAmI } = this.props;

        requestWhoAmI();
    }

    render() {
        const { isStarted } = this.props.app;

        if (!isStarted) {
            return <Loading />;
        }

        return (
            <ConnectedRouter history={history}>
                <div style={wrapperStyle}>
                    <Route exact path="/" component={Login} />
                    <Route path="/home" component={Home} />
                </div>
            </ConnectedRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        app: state.app
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestWhoAmI: () => {
            dispatch(UserActions.requestWhoAmI());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
