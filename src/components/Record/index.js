import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import * as colors from 'material-ui/styles/colors';

import styles from './style';
import styleEnhancer from '../../util/styleEnhancer';
import text from './text';

class Record extends Component {
    RecordItem = props => {
        const { size } = this.props;
        const { type, amount, category } = props;
        const enhancedStyle = styleEnhancer(size);

        return (
            <ListItem
                backgroundColor="white"
                leftAvatar={
                    <Avatar
                        backgroundColor={
                            type === 'income' ? colors.green500 : colors.red500
                        }
                        icon={<FileFolder />}
                        style={styles.avatar}
                    />
                }
                primaryText={
                    <div
                        style={
                            type === 'income'
                                ? styles.incomeAmount
                                : styles.expenseAmount
                        }
                    >
                        {/* format */}
                        ₱{amount}.00
                    </div>
                }
                secondaryText={
                    <div style={styles.category}>
                        {category}
                    </div>
                }
                innerDivStyle={styles.listItem}
            />
        );
    };

    render() {
        const { RecordItem } = this;
        const { size } = this.props;
        const enhancedStyle = styleEnhancer(size);

        return (
            <div>
                <p style={styles.date}>This day</p>
                <List style={enhancedStyle(styles.list)}>
                    <RecordItem type="income" amount={500} category="Salary" />
                    <RecordItem type="expense" amount={100} category="Food" />
                    <RecordItem type="expense" amount={65} category="Food" />
                    <RecordItem type="income" amount={15} category="Others" />
                    <RecordItem
                        type="expense"
                        amount={20}
                        category="Entertainment"
                    />
                    <RecordItem type="income" amount={45} category="Loan" />
                </List>
            </div>
        );
    }
}

export default Record;
