import React, { Component } from 'react';
import { connect } from 'react-redux';

class ResponsiveStyle extends Component {
    render() {
        const { size } = this.props.browser;
        const parentStyle = this.props.style || {};

        const {
            children,
            mobile = 'initial',
            tablet = 'initial',
            desktop = 'initial'
        } = this.props;

        let style = {
            display: 'block',
            verticalAlign: 'top',
            boxSizing: 'border-box',
            width:
                size === 'DESKTOP'
                    ? desktop
                    : size === 'TABLET' ? tablet : mobile,
            ...parentStyle
        };

        if (style.width !== 'initial') {
            style.width = `${style.width}%`;
            style.display = 'inline-block';
        }

        return (
            <div style={style}>
                {children}
            </div>
        );
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
