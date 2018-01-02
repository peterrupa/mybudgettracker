import React, { Component } from 'react';

import FontIcon from 'material-ui/FontIcon';

import styles from './style';
import styleEnhancer from '../../util/styleEnhancer';
import text from './text';

class IncomeExpense extends Component {
    render() {
        const { size } = this.props;
        const enhancedStyle = styleEnhancer(size);

        return (
            <div style={enhancedStyle(styles.container)}>
                <div>
                    <p style={enhancedStyle(styles.money)}>
                        <FontIcon
                            className="fa fa-arrow-up"
                            style={styles.incomeIcon}
                        />
                        ₱150.00
                    </p>
                    <p style={enhancedStyle(styles.incomeDesc)}>
                        {text.income}
                    </p>
                </div>
                <div style={enhancedStyle(styles.expense)}>
                    <p style={enhancedStyle(styles.money)}>
                        <FontIcon
                            className="fa fa-arrow-down"
                            style={styles.expenseIcon}
                        />
                        ₱100.00
                    </p>
                    <p style={enhancedStyle(styles.expensesDesc)}>
                        {text.expenses}
                    </p>
                </div>
            </div>
        );
    }
}

export default IncomeExpense;
