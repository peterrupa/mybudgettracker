import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import Settings from '../Settings';

import './style.css';

class Home extends Component {
    checkUser = user => {
        const { push } = this.props.history;

        if (!user) {
            push('/');
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
            <div className="Home">
                <Link to="/home">Dashboard</Link>
                <Link to="/home/myday">My Day</Link>
                <Link to="/home/settings">Settings</Link>

                <Route exact path="/home" render={() => <div>Dashboard</div>}/>
                <Route exact path="/home/myday" render={() => <div>My Day</div>}/>
                <Route path="/home/settings" component={Settings}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
