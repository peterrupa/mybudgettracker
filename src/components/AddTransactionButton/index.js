import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import * as colors from 'material-ui/styles/colors';

import styles from './style';

class AddTransactionButton extends Component {
    state = {
        open: false
    };

    openButton = () => {
        this.setState({
            open: true
        });
    };

    closeButton = () => {
        this.setState({
            open: false
        });
    };

    Label = ({ label, y }) => {
        return (
            <div style={styles.labelContainer}>
                <div style={styles.labelEdgeContainer}>
                    <span
                        style={{
                            ...styles.label,
                            transform: `translateX(${y}%)`
                        }}
                    >
                        {label}
                    </span>
                </div>
            </div>
        );
    };

    TransactionBaseButton = ({ openY, color, icon, label }) => {
        const { open } = this.state;
        const { Label } = this;

        const animationConfig = {
            stiffness: 300,
            damping: 30
        };

        return (
            <Motion
                style={{
                    x: spring(open ? openY : 0.5, animationConfig),
                    y: spring(open ? -140 : 0, animationConfig)
                }}
            >
                {({ x, y }) =>
                    <div
                        style={{
                            ...styles.addButtonChild,
                            transform: `translateY(${x}em)`
                        }}
                    >
                        <Label label={label} y={y} />
                        <FloatingActionButton
                            backgroundColor={color}
                            mini={true}
                            style={{
                                position: 'absolute'
                            }}
                        >
                            <FontIcon className={icon} />
                        </FloatingActionButton>
                    </div>}
            </Motion>
        );
    };

    AddIncomeButton = () => {
        const { TransactionBaseButton } = this;

        return (
            <TransactionBaseButton
                openY={-7}
                color={colors.greenA400}
                icon="fa fa-dollar"
                label="Add Income"
            />
        );
    };

    AddExpenseButton = () => {
        const { TransactionBaseButton } = this;

        return (
            <TransactionBaseButton
                openY={-3.5}
                color={colors.redA400}
                icon="fa fa-dollar"
                label="Add Expense"
            />
        );
    };

    render() {
        const {
            AddExpenseButton,
            AddIncomeButton,
            openButton,
            closeButton
        } = this;
        const { open } = this.state;

        const icon = `fa fa-${open ? 'times' : 'plus'}`;

        return (
            <div style={styles.container}>
                <FloatingActionButton
                    backgroundColor={colors.blueA400}
                    style={styles.addTransactionButton}
                    onTouchTap={open ? closeButton : openButton}
                >
                    <FontIcon className={icon} />
                </FloatingActionButton>
                <AddIncomeButton />
                <AddExpenseButton />
            </div>
        );
    }
}

export default AddTransactionButton;
