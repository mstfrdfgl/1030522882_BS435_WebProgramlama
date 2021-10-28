const path=require("path")

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
}