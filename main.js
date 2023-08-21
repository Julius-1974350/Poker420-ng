const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

function onReady () {
 win = new BrowserWindow({width: 600, height: 670, frame: false })
 win.loadURL(url.format({
 pathname: path.join(
 __dirname,
 'dist/Poker420/index.html'),
 protocol: 'file:',
 slashes: true
 }))
}
app.on('ready', onReady);