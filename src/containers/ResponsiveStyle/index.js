import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

class ResponsiveStyle extends Component {
    render() {
        const { size } = this.props.browser;

        const { children, mobile = {}, tablet = {}, desktop = {} } = this.props;

        let style =
            size === 'DESKTOP' ? desktop : size === 'TABLET' ? tablet : mobile;

        if (!children) {
            return <div />;
        }

        return React.cloneElement(children, {
            style: {
                ...style,
                ...children.props.style
            }
        });
    }
}

const mapStateToProps = state => {
    return {
        browser: state.browser
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ResponsiveStyle);
