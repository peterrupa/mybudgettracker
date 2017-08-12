import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
                <h1>Hi, am dashboard</h1>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
