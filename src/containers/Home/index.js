import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import Dashboard from '../Dashboard';
import MyDay from '../MyDay';
import Settings from '../Settings';
import NavBar from '../../components/NavBar';
import Menu from '../../components/Menu';

import styleEnhancer from '../../util/styleEnhancer';
import styles from './style';

class Home extends Component {
    state = {
        menuIsOpen: false
    };

    openMenu = () => {
        this.setState({
            menuIsOpen: true
        });
    };

    closeMenu = () => {
        this.setState({
            menuIsOpen: false
        });
    };

    checkUser = user => {
        const { push } = this.props.history;

        if (!user) {
            push('/');
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

    render() {
        const { openMenu, closeMenu } = this;
        const { browser, history, location } = this.props;
        const { menuIsOpen } = this.state;
        const { size } = browser;
        const enhancedStyle = styleEnhancer(size);

        return (
            <div className="Home" style={styles.wrapper}>
                <NavBar
                    location={location}
                    browser={browser}
                    menuIsOpen={menuIsOpen}
                    openMenu={openMenu}
                    closeMenu={closeMenu}
                />

                <div style={styles.bottomPart}>
                    <Menu
                        browser={browser}
                        open={menuIsOpen}
                        closeMenu={closeMenu}
                        history={history}
                    />
                    <div style={enhancedStyle(styles.contentContainer)}>
                        <Route
                            exact
                            path="/home"
                            component={Dashboard}
                            title="Dashboard"
                        />
                        <Route exact path="/home/myday" component={MyDay} />
                        <Route path="/home/settings" component={Settings} />
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
