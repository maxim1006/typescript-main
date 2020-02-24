/* на всякий случай оставляю зависимости
*  "devDependencies": {
    "awesome-typescript-loader": "3.4.1",
    "typescript": "2.6.2",
    "webpack": "3.10.0",
    "webpack-dev-server": "2.9.7"
  },
*
* также в index.html надо убрать dist, так как output в настройках вебпак виртуальный
* */
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: {
        main: './main.ts',
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname),
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    mode: isProduction ? "production" : "development",
    module: {
        rules: [
            // кастомный ts-loader с доп настройками, по умолчанию использую как в доках
            // {test: /\.ts$/, use: 'awesome-typescript-loader'},
            // так как в доках
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        port: 3000,
    }
};
