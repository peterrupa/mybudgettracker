import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTransactionButton from '../../components/AddTransactionButton';
import './style.css';

class MyDay extends Component {
    render() {
        return (
            <div className="MyDay">
                <AddTransactionButton />
                Tis ur day
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

export default connect(mapStateToProps, mapDispatchToProps)(MyDay);
