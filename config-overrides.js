const webpack = require('webpack');
const shell = require('shelljs');

module.exports = function override(config, env) {
    const LAST_TAG = String(shell.exec('git rev-parse HEAD')).trim();
    const STATUS = String(shell.exec('git status --short')).trim();
    const NOW = String(shell.exec('date')).trim();
    const BRANCH = String(shell.exec('git rev-parse --abbrev-ref HEAD')).trim();
    const STATUS_VERBOSE = String(
        shell.exec('git diff --quiet && echo ‘clean’ || echo "dirty"')
    ).trim();

    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.REACT_APP_GIT_LAST_TAG': JSON.stringify(LAST_TAG),
            'process.env.REACT_APP_GIT_STATUS': JSON.stringify(STATUS),
            'process.env.GIT_CURRENT_BRANCH': JSON.stringify(BRANCH),
            'process.env.NOW': JSON.stringify(NOW),
            'process.env.GIT_STATUS_VERBOSE': JSON.stringify(STATUS_VERBOSE),
        })
    );
    return config;
};
