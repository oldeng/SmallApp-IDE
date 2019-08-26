const electron = require('electron')
global.autoUpdater = require("electron-updater").autoUpdater;
const log = require('electron-log');
const dialog = require('electron').dialog;

let updater
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
autoUpdater.autoDownload = false
global.app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
global.mainWindow
function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800, height: 600,
    show: false,
    /*添加对渲染进程的node框架支持*/
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL('http://localhost:8081/#');
  // and load the index.html of the app.
  // mainWindow.loadURL(url.format({
  //   pathname: 'http://localhost:8081/#',//path.join(__dirname, '/dist/index.html'),
  //   // protocol: 'file:',
  //   slashes: true
  // }))
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
  mainWindow.webContents.openDevTools({ mode: 'right' });
  require('./menu/menu.js');
  // require('./assets/js/discord-rpc.js');
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function () {
  let promise = new Promise(function (resolve, reject) {
    createWindow();
    setTimeout(function () {
      resolve();
    }, 1000);
  }).then(function () {
    if (process.argv[1] != undefined) {
      require('./menu/functions.js').openDoubleClickFile(process.argv[1]);
    }
  });
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
  autoUpdater.checkForUpdates();

})
// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
// auto update
// auto updates

autoUpdater.on('error', (error) => {
  console.log(error);
  mainWindow.webContents.send('updateError', error.toString());
});

autoUpdater.on('update-available', (info) => {
  mainWindow.webContents.send('updateAvailable', info.version);
})

autoUpdater.on('update-not-available', () => {
  mainWindow.webContents.send('updateNotAvailable');
})

autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('updateDownloaded');
});

autoUpdater.on('download-progress', (progressObj) => {
  // if (mainWindow) mainWindow.webContents.send('downloadProgress', progressObj.percent);
  // let log_message = "Download speed: " + progressObj.bytesPerSecond;
  // log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
  // log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
  // console.log(log_message);
})

