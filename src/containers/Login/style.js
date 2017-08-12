import * as colors from 'material-ui/styles/colors';

export default {
    wrapper: {
        height: '100%',
        background: colors.blueGrey900
    },
    logoColumn: {
        mobile: {
            height: '50%'
        },
        desktop: {
            height: '100%'
        }
    },
    logoContainer: {
        padding: '0 20%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '100%'
    },
    textLoginColumn: {
        mobile: {
            height: '50%',
            paddingTop: '5%'
        },
        desktop: {
            height: '100%'
        }
    },
    textLoginContainer: {
        shared: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        mobile: {
            alignItems: 'center',
            textAlign: 'center'
        },
        desktop: {
            justifyContent: 'center',
            paddingLeft: '5%'
        }
    },
    appName: {
        mobile: {
            fontSize: '200%'
        },
        desktop: {
            fontSize: '250%'
        }
    },
    subtext: {
        shared: {
            fontWeight: 'lighter',
            marginBottom: '2em'
        },
        mobile: {
            fontSize: '125%'
        },
        desktop: {
            fontSize: '150%'
        }
    },
    signInButton: {
        button: {
            shared: {
                height: '54px',
                lineHeight: '54px'
            }
        },
        overlay: {
            shared: {
                height: '54px',
                lineHeight: '54px',
                paddingLeft: '0.5em',
                paddingRight: '0.5em'
            }
        },
        label: {
            shared: {
                fontWeight: 'bold',
                paddingLeft: '1em'
            }
        }
    }
};
