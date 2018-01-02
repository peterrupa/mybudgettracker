import React, { Component } from 'react';

import styles from './style';
import styleEnhancer from '../../util/styleEnhancer';
import text from './text';

class CashOnHand extends Component {
    render() {
        const { size } = this.props;
        const enhancedStyle = styleEnhancer(size);

        return (
            <div>
                <p style={enhancedStyle(styles.cashOnHand)}>₱3,201.00</p>
                <div>
                    {text.cashOnHand}
                </div>
            </div>
        );
    }
}

export default CashOnHand;
