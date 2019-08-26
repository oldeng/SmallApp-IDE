<template>
    <div class="app panel-container">
        <side-bar></side-bar>
        <project></project>
		<div class="splitter"></div>
        <editor></editor>
		<div class="splitter2"></div>
		<div class="panel-right column">
			<input-output></input-output>
            <terminal></terminal>
            <html-preview></html-preview>
			<markdown-preview></markdown-preview>
            <updater></updater>
            <settings-panel></settings-panel>
            <code-share></code-share>
            <theme-panel></theme-panel>
		</div>
    </div>
</template>
<script>
import Bench from './views/Bench.vue';
import SideBar from './components/navbar';
import Project from './views/Project';
import Editor from './views/editor';
import InputOutput from './views/InputOutput';
import Terminal from './views/Termnal';
import HtmlPreview from './views/HtmlPreview';
import MarkdownPreview from './views/MarkdownPreview';
import Updater from './views/Updater';
import SettingsPanel from './views/SettingsPanel';
import CodeShare from './views/CodeShare';
import ThemePanel from './views/ThemePanel';
import './styles/css/editor.css';
export default {
    name: 'app',
    components: {
        Bench,
        SideBar,
        Project,
        Editor,
        InputOutput,
        Terminal,
        HtmlPreview,
        MarkdownPreview,
        Updater,
        SettingsPanel,
        CodeShare,
        ThemePanel
    }
}
</script>
<style lang="less" scoped>
.app {
    position: absolute;
    left: 0;
    top:0;
    right: 0;
    bottom: 0;
}
</style>