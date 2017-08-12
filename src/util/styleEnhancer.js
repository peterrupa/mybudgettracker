export default function(size) {
    return function(style) {
        const {
            shared = {},
            mobile = {},
            tablet = mobile,
            desktop = tablet
        } = style;
        const deviceStyle =
            size === 'MOBILE' ? mobile : size === 'TABLET' ? tablet : desktop;

        return {
            ...shared,
            ...deviceStyle
        };
    };
}
