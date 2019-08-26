<template>
  <div class="panel-middle" data-target="editors">
    <ul class="nav nav-tabs" id="code_mirror_editors">
      <li v-for="(tab, index) in tabs" :id="'file_tab'+tab.file_id">
        <a href :data-target="'#'+tab.file_id" role="tab" data-toggle="tab">
          <span :id="'filename_'+tab.file_id" onclick="opentab(this)">{{tab.filename}}</span>
          <span onclick="closeAnyFile(this)" class="close black"></span>
        </a>
      </li>
    </ul>
    <div class="tab-content" id="editors">
      <div class="tab-pane" id="file_id">
        <codemirror :options="options"></codemirror>
        <!-- <textarea id="code-editor" ref="editor" autofocus></textarea> -->
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Session from "../session/index.js";
import { codemirror } from "vue-codemirror";
// import 'codemirror/lib/codemirror.css';

require("codemirror/mode/python/python.js");
require("codemirror/addon/fold/foldcode.js");
require("codemirror/addon/fold/foldgutter.js");
require("codemirror/addon/fold/brace-fold.js");
require("codemirror/addon/fold/xml-fold.js");
require("codemirror/addon/fold/indent-fold.js");
require("codemirror/addon/fold/markdown-fold.js");
require("codemirror/addon/fold/comment-fold.js");

export default {
  name: "editor",
  data() {
    return {
      tabs: [],
      options: {
        // codemirror options
        tabSize: 4,
        mode: "text/javascript",
        theme: "one-dark",
        smartIndent: true,

        lineNumbers: true,
        line: true,
        lineNumbers: true, //显示行号
        lineWrapping: true, //代码折叠
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        matchBrackets: true //括号匹配
        // more codemirror options, 更多 codemirror 的高级配置...
      }
    };
  },
  methods: {
    createTab() {
      let tab = {
        file_id: "new" + this.filecount,
        filename: "undefined"
      };
      this.tabs.push(tab);

      // let editor = this.initEditor(this.$refs["editor"]);
      // editor.setValue(data);
      // chagneEditorMode(filename, editor);
      // editor.refresh();
      // addPanel("bottom", editor, file_id);
      // files["#" + file_id] = {
      //   path: filepath,
      //   name: filename,
      //   remote_path: remote_path,
      //   id: file_id,
      //   editor: editor
      // };
      // editor.on("change", function() {
      //   Session.changeLastSessionFilesContent(file.id, editor.getValue());
      //   closeToDot();
      // });
    }
    // initEditor(editorDom) {
    //   let configuration = {
    //     // lineNumbers: true,
    //     theme: 'one-dark',//settings_file.theme ? settings_file.theme.split(".")[0] : "one-dark",
    //     // styleActiveLine: true,
    //     keyMap: "sublime",
    //     // lineWrapping: true,
    //     // foldGutter: true,
    //     // autoCloseBrackets: true,
    //     // autoCloseTags: true,
    //     // showTrailingSpace: true,
    //     // matchBrackets: true,
    //     mode: "text/text",
    //     gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    //     extraKeys: {
    //       "Ctrl-Space": "autocomplete",
    //       "Ctrl-Q": function(cm) {
    //         cm.foldCode(cm.getCursor());
    //       }
    //     },
    //     highlightSelectionMatches: { annotateScrollbar: true },
    //     // hintOptions: {hint: synonyms},
    //     // scrollbarStyle: "simple"
    //     // indentWithTabs: true
    //   };
    //   // for (let i in settings_file.editor) {
    //   //   configuration[i] = settings_file.editor[i];
    //   // }
    //   let editor = CodeMirror.fromTextArea(editorDom, configuration);

    //   editor.focus();
    //   editor.on("keyup", function(cm, event) {
    //     if (
    //       !cm.state.completionActive &&
    //       event.keyCode != 13 &&
    //       event.keyCode != 9 &&
    //       event.keyCode != 16 &&
    //       event.keyCode != 37 &&
    //       event.keyCode != 38 &&
    //       event.keyCode != 39 &&
    //       event.keyCode != 40 &&
    //       event.keyCode != 219 &&
    //       event.keyCode != 221 &&
    //       event.keyCode != 57 &&
    //       event.keyCode != 48 &&
    //       event.keyCode != 186 &&
    //       event.keyCode != 27 &&
    //       event.keyCode != 8 &&
    //       event.keyCode != 32 &&
    //       event.keyCode != 17
    //     ) {
    //       CodeMirror.commands.autocomplete(cm, null, { completeSingle: false });
    //     }
    //   });
    //   return editor;
    // }
  },

  mounted() {
    this.$nextTick(() => {
      // Session.checkLastSessionFilesAndOpen();
    });
    this.$bus.$on("new-file", event => {
      this.createTab();
    });
  },
  components: {
    codemirror
  }
};
</script>
<style lang="less" scopped>
.tab-content {
  border: 5px solid green;
  width: 100%;
  height: 100%;
  position: relative;
  .tab-pane {
    border: 10px solid red;
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>