module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}], // Target the current version of Node
        '@babel/preset-react' // If you're using React
    ],
};
