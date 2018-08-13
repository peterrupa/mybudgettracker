export default {
    componentContainer: {
        padding: '1.25em',
        height: '100%'
    },
    topInfoContainer: {
        shared: {
            display: 'flex'
        },
        desktop: {
            justifyContent: 'space-between'
        },
        mobile: {
            flexDirection: 'column-reverse'
        }
    },
    chart: {
        shared: {
            width: '100%'
        },
        desktop: {
            height: '275px',
            marginTop: '-4em'
        },
        mobile: {
            marginTop: '-3em',
            height: '200px'
        }
    },
    watermark: {
        top: 'initial',
        bottom: '50px',
        color: 'white',
        opacity: '0.6',
        fontFamily: 'Roboto',
        fontWeight: '300'
    }
};
