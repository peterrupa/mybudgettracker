import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTransactionButton from '../../components/AddTransactionButton';
import './style.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
                <AddTransactionButton />
                Dashboard!
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
