<template>
		<div class="side-nav">
			<ul class="sidenav-simple h-auto">
				<li><a href="#" @click="newFile" title="New File">
						<span class="icon"><i class="fa fa-files-o" aria-hidden="true"></i></span>
					</a></li>
				<li><a href="#" onclick="openProjectStructure()" title="Project Structure">
						<span class="icon"><i class="fa fa-folder-o" aria-hidden="true"></i></span>
					</a></li>
				<li><a href="#" onclick="openConsole()" title="Console">
						<span class="icon"><i class="fa fa-play" aria-hidden="true"></i></span>
					</a></li>
				<li><a href="#" onclick="openTerminal()" title="Terminal">
						<span class="icon"><i class="fa fa-terminal" aria-hidden="true"></i></span>
					</a></li>
				<li><a href="#" onclick="openHtmlPreview()" title="Html Preview">
						<span class="icon"><i class="fa fa-television" aria-hidden="true"></i></span>
					</a></li>
				<li><a href="#" onclick="openMarkdownPreview()" title="Markdown Preview">
						<span class="icon"><i class="fa fa-desktop" aria-hidden="true"></i></span>
					</a></li>
				<li><a href="#" onclick="openUpdateDownloadSection()" title="Download Updates">
						<span class="icon"><i class="fa fa-download" aria-hidden="true"></i></span>
						<span id="update-badge" class="custom-badge hide">➊</span>
					</a></li>
				<li><a href="#" onclick="openCodeSharingPanel()" title="Code Sharing">
						<span class="icon"><i class="fa fa-share-square-o" aria-hidden="true"></i></span>
					</a></li>
				<li><a href="#" onclick="openSettingsPanel()" title="Settings">
						<span class="icon"><i class="fa fa-cog" aria-hidden="true"></i></span>
					</a></li>
			</ul>
		</div>
</template>
<script>

export default {
  name: "side-bar",
  methods: {
	  newFile () {
		  this.$bus.$emit('new-file');
	  }
  }
};
</script>
<style lang="less" scopped>
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.side-nav {
  overflow: auto;
  flex: 0 0 auto;
  white-space: nowrap;
}
</style>