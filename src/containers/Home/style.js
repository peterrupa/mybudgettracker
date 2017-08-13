import * as colors from 'material-ui/styles/colors';

export default {
    wrapper: {
        height: '100%',
        background: colors.blueGrey900
    },
    bottomPart: {
        height: 'calc(100% - 64px)'
    },
    contentContainer: {
        shared: {
            display: 'inline-block',
            verticalAlign: 'top',
            height: '100%',
            overflow: 'auto'
        },
        mobile: {
            width: '100%'
        },
        desktop: {
            width: 'calc(100% - 150px)'
        }
    }
};
