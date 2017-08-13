import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import styles from './style';
import texts from './text';

class NavBar extends Component {
    handleMenuTouch = () => {
        const { menuIsOpen, openMenu, closeMenu } = this.props;

        if (menuIsOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    render() {
        const { handleMenuTouch } = this;
        const { menuIsOpen } = this.props;
        const { size } = this.props.browser;
        const { pathname } = this.props.location;
        const icon = 'fa fa-' + (menuIsOpen ? 'times' : 'bars');

        const mobileTitle =
            pathname === '/home'
                ? texts.dashboard
                : pathname === '/home/myday'
                  ? texts.myDay
                  : pathname === '/home/settings'
                    ? texts.settings
                    : texts.appName;

        const title = size === 'DESKTOP' ? texts.appName : mobileTitle;

        return (
            <div>
                {/* @TODO: hardcoded title */}
                <AppBar
                    title={title}
                    style={styles.appBar}
                    onLeftIconButtonTouchTap={handleMenuTouch}
                    showMenuIconButton={size !== 'DESKTOP'}
                    iconClassNameLeft={icon}
                />
            </div>
        );
    }
}

export default NavBar;
