


// get userData path
const ipc  = require('electron').ipcRenderer;

function getUserDataPath () {
    let userDataPath = '';
    if(! userDataPath) userDataPath = ipc.sendSync('getUserDataPath');
    return userDataPath;
  }

module.exports = {
    getUserDataPath
  };
  