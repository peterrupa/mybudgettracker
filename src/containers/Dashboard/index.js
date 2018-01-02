import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTransactionButton from '../../components/AddTransactionButton';
import CashOnHand from '../../components/CashOnHand';
import IncomeExpense from '../../components/IncomeExpense';
import styleEnhancer from '../../util/styleEnhancer';
import styles from './style';

class Dashboard extends Component {
    render() {
        const { size } = this.props.browser;
        const enhancedStyle = styleEnhancer(size);

        return (
            <div style={styles.componentContainer}>
                <AddTransactionButton />

                <div style={enhancedStyle(styles.topInfoContainer)}>
                    <CashOnHand size={size} />
                    <IncomeExpense size={size} />
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
