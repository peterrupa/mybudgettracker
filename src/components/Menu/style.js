import * as colors from 'material-ui/styles/colors';

export default {
    drawer: {
        shared: {
            background: colors.blueGrey800,
            position: 'relative',
            display: 'inline-block'
        },
        mobile: {
            width: '100px'
        },
        desktop: {
            width: '150px'
        }
    },
    drawerRoot: {
        shared: {
            height: '100%',
            display: 'inline-block'
        },
        mobile: {
            position: 'fixed'
        },
        desktop: {
            position: 'relative'
        }
    },
    menuItem: {
        shared: {
            color: colors.white
        },
        mobile: {
            textAlign: 'center',
            fontSize: '90%',
            lineHeight: '1em',
            padding: '1em 0'
        },
        desktop: {
            padding: '0.5em 0'
        }
    },
    menuItemInner: {
        mobile: {
            padding: '1em 0'
        },
        desktop: {
            paddingLeft: '54px'
        }
    },
    menuItemIcon: {
        shared: {
            color: colors.white
        },
        mobile: {
            position: 'relative',
            display: 'inline-block',
            lineHeight: '0px',
            margin: '0',
            left: '0',
            fontSize: '35px',
            width: 'initial'
        }
    }
};
