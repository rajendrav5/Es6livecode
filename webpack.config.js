
module.exports = {
    entry: "./scripts/index",
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
    }
};