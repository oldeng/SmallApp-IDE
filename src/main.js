import Vue from 'vue'
import App from './App.vue'
import ipcRenderer  from './msg/index.js';
// import router from './router'
// import "./styles/index.less";
// import store from './store'
// Vue.config.productionTip = false
// if (process.env.NODE_ENV !== 'production') {
//   require('@/mock');
// }

Vue.use(ipcRenderer);
Vue.prototype.$bus = new Vue();
//渲染进程接收消息
ipcRenderer.ipc.on('newFile', function (event) {
});
Vue.prototype.ipc.on('closeFile',function(event){
  console.log('======');
});
Vue.prototype.ipc.on('openFolder', function(event,structure){
});
Vue.prototype.ipc.on('openDoubleClickFile', function(event,data,filepath) {

});

Vue.prototype.ipc.on('currentWorkingFile', function(event){
});

Vue.prototype.ipc.on('themeChanged', function(event){
});

Vue.prototype.ipc.on('getDirectroyForSpecificDirpath', function(event, structure){
  openSpecificDirectory(structure);
});

Vue.prototype.ipc.on('saveAs', function(event){
})

Vue.prototype.ipc.on('save', function(event){
});

Vue.prototype.ipc.on('data-saved',function(event,filepath, data){
})

Vue.prototype.ipc.on('change-mod', function(event, filename){
})

Vue.prototype.ipc.on('runProgramStatus',function(event,output){
});

Vue.prototype.ipc.on('error', function(event, message){
});

Vue.prototype.ipc.on('editorSettingsSaved', function(event){
});

Vue.prototype.ipc.on('discordSettingsSaved', function(event){
});

Vue.prototype.ipc.on('openAbout', function(event){
});


Vue.prototype.ipc.on('openConsole',function(event){
});


Vue.prototype.ipc.on('openHtmlPreview', function(event){
});

Vue.prototype.ipc.on('openUpdateDownloadSection', function(event){
});

Vue.prototype.ipc.on('updateAvailable', function(event, version){
})

Vue.prototype.ipc.on('updateNotAvailable', function(event){

});

Vue.prototype.ipc.on('downloadProgress', function(event, percent){
});

Vue.prototype.ipc.on('updateDownloaded', function(event){
});

Vue.prototype.ipc.on('updateError', function (event, error){
});

Vue.prototype.ipc.on('openMarkdownPreview', function(event){
});

// change Theme
Vue.prototype.ipc.on('changeTheme', function (event) {
});

Vue.prototype.ipc.on('openProjectStructure', function(event){
});

Vue.prototype.ipc.on('refreshPreview', function(event){
})

Vue.prototype.ipc.on('increaseFontSize', function(event){
});

Vue.prototype.ipc.on('decreaseFontSize', function(event){
});


const app = new Vue({
//   router,
//   store,
  render: h => h(App)
}).$mount('#app');
//全局变量
Vue.prototype.filecount = 1;
Vue.prototype.tabs = {};
Vue.prototype.files = {};



