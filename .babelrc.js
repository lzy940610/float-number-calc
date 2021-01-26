module.exports = {
    presets: [
        require('@babel/preset-env'),
        // require('babel-preset-flow-vue')
    ],
    ignore: [
        'dist/*.js',
        'packages/**/*.js'
    ]
}