#! /usr/bin/env node

const path = require('path');
const app = require('../src/index.js');

function download(path) {
    app(path).download()
}

module.exports = download