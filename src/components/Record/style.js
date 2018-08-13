import * as colors from 'material-ui/styles/colors';

export default {
    date: {
        marginBottom: '0'
    },
    list: {
        shared: {
            margin: '0 -1.25em'
        },
        mobile: {
            width: 'calc(100% + 2.5em)'
        },
        desktop: {
            width: '40%'
        }
    },
    listItem: {
        paddingLeft: '5em'
    },
    avatar: {
        left: '1.25em'
    },
    amount: {
        fontSize: '1.25em',
        fontWeight: '300'
    },
    get incomeAmount() {
        return {
            ...this.amount,
            color: colors.green500
        };
    },
    get expenseAmount() {
        return {
            ...this.amount,
            color: colors.red500
        };
    },
    category: {
        color: 'white'
    }
};
