import * as colors from 'material-ui/styles/colors';

export default {
    container: {
        shared: {
            display: 'flex'
        },
        mobile: {
            marginTop: '2em',
            justifyContent: 'space-between'
        },
        desktop: {
            marginTop: '0',
            justifyContent: 'initial'
        }
    },
    expense: {
        desktop: {
            marginLeft: '3em'
        }
    },
    money: {
        shared: {
            margin: '0',
            fontWeight: '100'
        },
        desktop: {
            fontSize: '2em'
        },
        mobile: {
            fontSize: '1.75em',
            textAlign: 'center'
        }
    },
    desc: {
        shared: {
            margin: '0',
            fontSize: '0.9em'
        }
    },
    get incomeDesc() {
        return {
            ...this.desc,
            desktop: {
                textAlign: 'right'
            },
            mobile: {
                textAlign: 'left'
            }
        };
    },
    get expensesDesc() {
        return {
            ...this.desc,
            desktop: {
                textAlign: 'right'
            },
            mobile: {
                textAlign: 'right'
            }
        };
    },
    arrowIcon: {
        fontSize: '1em',
        marginRight: '0.25em'
    },
    get incomeIcon() {
        return {
            ...this.arrowIcon,
            color: colors.green500
        };
    },
    get expenseIcon() {
        return {
            ...this.arrowIcon,
            color: colors.red500
        };
    }
};
