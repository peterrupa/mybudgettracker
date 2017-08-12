import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import ResponsiveCol from '../ResponsiveCol';
import styles from './style';
import texts from './text';
import styleEnhancer from '../../util/styleEnhancer';
import * as colors from 'material-ui/styles/colors';

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

    logoColumn = () => {
        const { size } = this.props.browser;
        const enhancedStyle = styleEnhancer(size);

        return (
            <ResponsiveCol
                mobile={100}
                desktop={50}
                style={enhancedStyle(styles.logoColumn)}
            >
                <div style={styles.logoContainer}>
                    <img
                        src="/logo.png"
                        alt={texts.logoAlt}
                        style={styles.logo}
                    />
                </div>
            </ResponsiveCol>
        );
    };

    textLoginColumn = () => {
        const { size } = this.props.browser;
        const enhancedStyle = styleEnhancer(size);

        return (
            <ResponsiveCol
                mobile={100}
                desktop={50}
                style={enhancedStyle(styles.textLoginColumn)}
            >
                <div style={enhancedStyle(styles.textLoginContainer)}>
                    <h1 style={enhancedStyle(styles.appName)}>
                        {texts.appName}
                    </h1>
                    <h2 style={enhancedStyle(styles.subtext)}>
                        {texts.subtext}
                    </h2>
                    {/* @TODO: hardcoded url */}
                    <a href="http://dev.mybudgettracker.com:8000/auth/google">
                        <RaisedButton
                            label={texts.signIn}
                            backgroundColor={colors.red500}
                            labelColor={colors.white}
                            buttonStyle={styles.signInButton.button.shared}
                            overlayStyle={styles.signInButton.overlay.shared}
                            labelStyle={styles.signInButton.label.shared}
                            icon={<FontIcon className="fa fa-google" />}
                        />
                    </a>
                </div>
            </ResponsiveCol>
        );
    };

    render() {
        const { logoColumn, textLoginColumn } = this;

        return (
            <div style={styles.wrapper}>
                {logoColumn()}
                {textLoginColumn()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        browser: state.browser
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
