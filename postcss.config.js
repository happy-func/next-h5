module.exports = {
    plugins: {
        'postcss-flexbugs-fixes': {},
        'postcss-preset-env': {
            autoprefixer: {
                flexbox: 'no-2009',
            },
            stage: 3,
            features: {
                'custom-properties': false,
            },
        },
        'postcss-plugin-px2rem': {
            rootValue: 75,
            unitPrecision: 5,
            mediaQuery: false,
            minPixelValue: 3,
            selectorBlackList: ['.m-style-', 'html', '.pageMain', '.qrcodeWrap'],
        },
    },
}
