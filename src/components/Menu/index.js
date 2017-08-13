import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

import styleEnhancer from '../../util/styleEnhancer';
import styles from './style';
import texts from './text';

class Menu extends Component {
    handleDrawerRequestChange = open => {
        const { closeMenu } = this.props;

        if (!open) {
            closeMenu();
        }
    };

    handleMenuTouch = to => {
        const { closeMenu } = this.props;
        const { push } = this.props.history;
        const { size } = this.props.browser;

        if (size !== 'DESKTOP') {
            closeMenu();
        }

        push(to);
    };

    MenuItem = ({ to, label, icon }) => {
        const { handleMenuTouch } = this;
        const { size } = this.props.browser;
        const enhancedStyle = styleEnhancer(size);

        return (
            <MenuItem
                style={enhancedStyle(styles.menuItem, true)}
                innerDivStyle={enhancedStyle(styles.menuItemInner, true)}
                leftIcon={
                    <FontIcon
                        className={`fa fa-${icon}`}
                        style={enhancedStyle(styles.menuItemIcon, true)}
                    />
                }
                to={to}
                primaryText={label}
                onTouchTap={() => {
                    handleMenuTouch(to);
                }}
            />
        );
    };

    render() {
        const { handleDrawerRequestChange, MenuItem } = this;
        const { open } = this.props;
        const { size } = this.props.browser;
        const enhancedStyle = styleEnhancer(size);

        return (
            <Drawer
                containerStyle={enhancedStyle(styles.drawer)}
                style={{
                    ...enhancedStyle(styles.drawerRoot),
                    pointerEvents: size === 'DESKTOP' || open ? '' : 'none'
                }}
                docked={size === 'DESKTOP'}
                disableSwipeToOpen={true}
                open={size === 'DESKTOP' ? true : open}
                onRequestChange={handleDrawerRequestChange}
            >
                <MenuItem icon="home" to="/home" label={texts.dashboard} />
                <MenuItem icon="sun-o" to="/home/myday" label={texts.myDay} />
                <MenuItem
                    icon="cog"
                    to="/home/settings"
                    label={texts.settings}
                />
            </Drawer>
        );
    }
}

export default Menu;
