const path = require('path');

module.exports = {
    entry: './lib/videojs-ttml.js',
    entry: {
        app: './lib/videojs-ttml.js',
    },
    output: {
        filename: 'videojs-ttml.js',
        filename: 'videojs-ttml.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    externals: {
        'video.js': 'video.js'
    },
};