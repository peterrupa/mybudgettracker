import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class MyDay extends Component {
    render() {
        return (
            <div className="MyDay">
                <h1>Tis ur day</h1>
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
