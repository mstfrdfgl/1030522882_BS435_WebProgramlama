const path=require("path")
const TerserPlugin = require("terser-webpack-plugin");

module.exports={
    entry:'./code.js',
    output: {
        filename:"bundle.js",
        path: path.resolve(__dirname,'public'),
        libraryTarget:"var",
        library:"findCat"
    },
    devServer:{
        static:'./'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}
