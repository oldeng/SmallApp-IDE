<template>
<div class="console-container">
				<div>
					<span class="vertical-align-middle">Input</span>
					<img id="run-button" onclick="run()" src="../styles/icons/run-button.svg" width="40px;"
						class="vertical-align-middle run-button"></img>
					<img id="stop-button" onclick="stop()" src="../styles/icons/stop-button.svg" width="40px;"
						class="vertical-align-middle stop-button hide"></img>
				</div>
				<textarea id="input" class="console"></textarea><br>
				<div><span>Output</span><br><br>
					<span id="output" class="console"></span>
				</div>
			</div>
</template>