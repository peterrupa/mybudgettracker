export default function(size) {
    return function(style, force) {
        const {
            shared = {},
            mobile = {},
            tablet = force ? {} : mobile,
            desktop = force ? {} : tablet
        } = style;
        const deviceStyle =
            size === 'MOBILE' ? mobile : size === 'TABLET' ? tablet : desktop;

        return {
            ...shared,
            ...deviceStyle
        };
    };
}
