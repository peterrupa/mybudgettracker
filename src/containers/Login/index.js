import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import ResponsiveCol from '../ResponsiveCol';
import ResponsiveStyle from '../ResponsiveStyle';
import styles from './style';
import texts from './text';
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

    logoColumn = (
        <ResponsiveStyle
            mobile={styles.logoColumn.mobile}
            desktop={styles.logoColumn.desktop}
        >
            <ResponsiveCol mobile={100} desktop={50}>
                <div style={styles.logoContainer}>
                    <img
                        src="/logo.png"
                        alt={texts.logoAlt}
                        style={styles.logo}
                    />
                </div>
            </ResponsiveCol>
        </ResponsiveStyle>
    );

    textLoginColumn = (
        <ResponsiveStyle
            mobile={styles.textLoginColumn.mobile}
            desktop={styles.textLoginColumn.desktop}
        >
            <ResponsiveCol mobile={100} desktop={50}>
                <ResponsiveStyle
                    mobile={styles.textLoginContainer.mobile}
                    desktop={styles.textLoginContainer.desktop}
                >
                    <div style={styles.textLoginContainer.shared}>
                        <ResponsiveStyle
                            mobile={styles.appName.mobile}
                            desktop={styles.appName.desktop}
                        >
                            <h1 style={styles.appName}>
                                {texts.appName}
                            </h1>
                        </ResponsiveStyle>
                        <ResponsiveStyle
                            mobile={styles.subtext.mobile}
                            desktop={styles.subtext.desktop}
                        >
                            <h2 style={styles.subtext.shared}>
                                {texts.subtext}
                            </h2>
                        </ResponsiveStyle>
                        {/* @TODO: hardcoded url */}
                        <a href="http://dev.mybudgettracker.com:8000/auth/google">
                            <RaisedButton
                                label={texts.signIn}
                                backgroundColor={colors.red500}
                                labelColor={colors.white}
                                buttonStyle={styles.signInButton.button.shared}
                                overlayStyle={
                                    styles.signInButton.overlay.shared
                                }
                                labelStyle={styles.signInButton.label.shared}
                                icon={<FontIcon className="fa fa-google" />}
                            />
                        </a>
                    </div>
                </ResponsiveStyle>
            </ResponsiveCol>
        </ResponsiveStyle>
    );

    render() {
        const { logoColumn, textLoginColumn } = this;

        return (
            <div style={styles.wrapper}>
                {logoColumn}
                {textLoginColumn}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
