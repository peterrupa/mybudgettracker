export default {
    container: {
        position: 'fixed',
        right: '2em',
        bottom: '2em'
    },
    addTransactionButton: {
        position: 'relative',
        zIndex: '50'
    },
    addButtonChild: {
        position: 'absolute',
        left: '0.5em',
        top: '0',
        zIndex: '49',
        display: 'flex',
        flexDirection: 'row'
    },
    labelContainer: {
        width: '300px',
        height: '40px',
        position: 'absolute',
        right: '-20px',
        display: 'flex',
        alignItems: 'center',
        overflowX: 'hidden',
        userSelect: 'none',
        pointerEvents: 'none'
    },
    labelEdgeContainer: {
        position: 'absolute',
        width: '100%',
        left: '100%'
    },
    label: {
        display: 'inline-block'
    }
};
