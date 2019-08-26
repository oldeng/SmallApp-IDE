<template>
    			<div class="settings-panel">
				<div class="left-settings-panel">
					<ul id="menu">
						<li id="menu-themes" onclick="openSettingsRightPanel('themes')">Themes</li>
						<li id="menu-editor" onclick="openSettingsRightPanel('editor')">Editor</li>
						<li id="menu-discord-rpc" onclick="openSettingsRightPanel('discord-rpc')">Discord RPC</li>
					</ul>
				</div>
				<div class="right-settings-panel">
					<div id="themes">

						<div id="one-dark-theme" class="theme-container" onclick="setTheme('one-dark.css')">
							<center>
								<img class="theme-img" src="../styles/img/themes/one-dark.png"></img>
								<p>One Dark</p>
							</center>
						</div>

						<div id="ambiance-theme" class="theme-container" onclick="setTheme('ambiance.css')">
							<center>
								<img class="theme-img" src="../styles/img/themes/ambiance.png"></img>
								<p>Ambiance</p>
							</center>
						</div>

						<div id="darcula-theme" class="theme-container" onclick="setTheme('darcula.css')">
							<center>
								<img class="theme-img" src="../styles/img/themes/darcula.png"></img>
								<p>Darcula</p>
							</center>
						</div>

						<div id="dracula-theme" class="theme-container" onclick="setTheme('dracula.css')">
							<center>
								<img class="theme-img" src="../styles/img/themes/dracula.png"></img>
								<p>Dracula</p>
							</center>
						</div>

						<div id="eclipse-theme" class="theme-container" onclick="setTheme('eclipse.css')">
							<center>
								<img class="theme-img" src="../styles/img/themes/eclipse.png"></img>
								<p>Eclipse</p>
							</center>
						</div>

						<div id="gruvbox-dark-theme" class="theme-container" onclick="setTheme('gruvbox-dark.css')">
							<center>
								<img class="theme-img" src="../styles/img/themes/gruvbox-dark.png"></img>
								<p>Gruvbox Dark</p>
							</center>
						</div>

						<div id="hopscotch-theme" class="theme-container" onclick="setTheme('hopscotch.css')">
							<center>
								<img class="theme-img" src="../styles/img/themes/hopscotch.png"></img>
								<p>Hopscotch</p>
							</center>
						</div>

						<div id="monokai-theme" class="theme-container" onclick="setTheme('monokai.css')">
							<center>
								<img class="theme-img" src="../styles/img/themes/monokai.png"></img>
								<p>Monokai</p>
							</center>
						</div>

					</div>

					<div id="editor">

						<label for="lineNumbers" class="label-cbx">
							<input id="lineNumbers" type="checkbox" class="invisible">
							<div class="checkbox">
								<svg width="17px" height="17px" viewBox="0 0 20 20">
									<path
										d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
									</path>
									<polyline points="4 11 8 15 16 6"></polyline>
								</svg>
							</div>
							<span>Show Line Numbers</span>
							<p class="checkbox-description">Show line numbers in editor's gutter.</p>
						</label>
						<br>

						<label for="styleActiveLine" class="label-cbx">
							<input id="styleActiveLine" type="checkbox" class="invisible">
							<div class="checkbox">
								<svg width="17px" height="17px" viewBox="0 0 20 20">
									<path
										d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
									</path>
									<polyline points="4 11 8 15 16 6"></polyline>
								</svg>
							</div>
							<span>Highlight Active Line</span>
							<p class="checkbox-description">Highlight current active line.</p>
						</label><br>

						<label for="lineWrapping" class="label-cbx">
							<input id="lineWrapping" type="checkbox" class="invisible">
							<div class="checkbox">
								<svg width="17px" height="17px" viewBox="0 0 20 20">
									<path
										d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
									</path>
									<polyline points="4 11 8 15 16 6"></polyline>
								</svg>
							</div>
							<span>Soft Wrap</span>
							<p class="checkbox-description">Wraps line that exceed the width of the window.</p>
						</label><br>

						<label for="foldGutter" class="label-cbx">
							<input id="foldGutter" type="checkbox" class="invisible">
							<div class="checkbox">
								<svg width="17px" height="17px" viewBox="0 0 20 20">
									<path
										d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
									</path>
									<polyline points="4 11 8 15 16 6"></polyline>
								</svg>
							</div>
							<span>Fold Gutter</span>
							<p class="checkbox-description">Markers indicating the blocks that can be folded.</p>
						</label><br>

						<label for="autoCloseBrackets" class="label-cbx">
							<input id="autoCloseBrackets" type="checkbox" class="invisible">
							<div class="checkbox">
								<svg width="17px" height="17px" viewBox="0 0 20 20">
									<path
										d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
									</path>
									<polyline points="4 11 8 15 16 6"></polyline>
								</svg>
							</div>
							<span>Auto Close Brackets</span>
							<p class="checkbox-description">Auto-close brackets and quotes when typed.</p>
						</label><br>

						<label for="autoCloseTags" class="label-cbx">
							<input id="autoCloseTags" type="checkbox" class="invisible">
							<div class="checkbox">
								<svg width="17px" height="17px" viewBox="0 0 20 20">
									<path
										d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
									</path>
									<polyline points="4 11 8 15 16 6"></polyline>
								</svg>
							</div>
							<span>Auto Close Tags</span>
							<p class="checkbox-description">Auto-close XML tags when '>' or '/' is typed</p>
						</label><br>

						<label for="showTrailingSpace" class="label-cbx">
							<input id="showTrailingSpace" type="checkbox" class="invisible">
							<div class="checkbox">
								<svg width="17px" height="17px" viewBox="0 0 20 20">
									<path
										d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
									</path>
									<polyline points="4 11 8 15 16 6"></polyline>
								</svg>
							</div>
							<span>Show Trailing Space</span>
							<p class="checkbox-description">Show trailing of whitespace at the end of lines.</p>
						</label><br>

						<label for="matchBrackets" class="label-cbx">
							<input id="matchBrackets" type="checkbox" class="invisible">
							<div class="checkbox">
								<svg width="17px" height="17px" viewBox="0 0 20 20">
									<path
										d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
									</path>
									<polyline points="4 11 8 15 16 6"></polyline>
								</svg>
							</div>
							<span>Match Brackets</span>
							<p class="checkbox-description">Matching brackets to be highlighted whenever the cursor is
								next to them.</p>
						</label><br>

						<label for="indentWithTabs" class="label-cbx">
							<input id="indentWithTabs" type="checkbox" class="invisible">
							<div class="checkbox">
								<svg width="17px" height="17px" viewBox="0 0 20 20">
									<path
										d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
									</path>
									<polyline points="4 11 8 15 16 6"></polyline>
								</svg>
							</div>
							<span>Indent With Tabs</span>
							<p class="checkbox-description">When indenting, the first N*tabSize spaces should be
								replaced by N tabs. </p>
						</label><br>

						<label for="tabSize">
							<span>Tab Size</span>
							<p class="checkbox-description-input">Number of spaces used to represent a tab.</p>
							<input id="tabSize" type="number" class="input-field">
						</label>

						<br><br>

						<label for="indentUnit">
							<span>Indent Unit</span>
							<p class="checkbox-description-input">Number of spaces used to indent a block.</p>
							<input id="indentUnit" type="number" class="input-field">
						</label>

						<br><br>

						<button class="btn" onclick="saveEditorSettings()">Save Changes</button><br><br>
					</div>

					<div id="discord-rpc">

						<label for="discord-rpc-enable" class="label-cbx">
							<input id="discord-rpc-enable" type="checkbox" class="invisible">
							<div class="checkbox">
								<svg width="17px" height="17px" viewBox="0 0 20 20">
									<path
										d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
									</path>
									<polyline points="4 11 8 15 16 6"></polyline>
								</svg>
							</div>
							<span>Enable Discord RPC</span>
							<p class="checkbox-description">Enable Discord Status.</p>
						</label>
						<br>

						<label for="discord-status">
							<span>Discord Status</span>
							<p class="checkbox-description-input">Status to show on Discord.</p>
							<input id="discord-status" type="text" class="input-field">
						</label>
						<br><br>

						<button class="btn" onclick="saveDiscordSettings()">Save Changes</button><br><br>

					</div>
				</div>
			</div>
</template>