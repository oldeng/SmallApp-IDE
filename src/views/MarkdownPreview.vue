<template>
    <div class="markdown-preview">
				<!-- <button onclick = "updateMarkdownPreview()">refresh</button> -->
				<iframe id=markdown-preview class="markdown-preview" sandbox="allow-same-origin"></iframe>
				<img style="position: relative;float: left;bottom:70;right:30;float:right;"
					onclick="updateMarkdownPreview()" src="../styles/icons/refresh-button.svg" width="40px"></img>
	</div>
</template>