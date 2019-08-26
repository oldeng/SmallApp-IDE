import { ipcRenderer }  from 'electron';

const ipc = ipcRenderer
const install = function (Vue, options) {
    Vue.prototype.ipc = ipcRenderer;
}

export default {
    ipc,
    install
};
