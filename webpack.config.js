module.exports = {
    entry: "./scripts/index",
    mode: "development",
    output: {
        filename: "app.js",
        path: __dirname + '/dist'
    },
    module:{
        rules:[{
            test: /\.js/,
            exclude:/(node_modules)/,
            use:{
                loader:"babel-loader",
            }
        }]
    },
};