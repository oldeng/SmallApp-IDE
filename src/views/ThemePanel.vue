<template>
  <div id="themeChengePanel" class="center" style="display: none">
    <div style="width: 100%; height: auto;">
      <div class="x" onclick="document.getElementById('themeChengePanel').style.display ='none'"></div>
    </div>
    <div class="options" style="padding: 50px;">
      <div style="margin-bottom: 10px; cursor: pointer;" onclick="setTheme('one-dark.css')">one-dark</div>
      <div style="cursor: pointer;" onclick="setTheme('ambiance.css')">ambiance</div>
      <div style="cursor: pointer;" onclick="setTheme('darcula.css')">darcula</div>
      <div style="cursor: pointer;" onclick="setTheme('dracula.css')">dracula</div>
      <div style="cursor: pointer;" onclick="setTheme('eclipse.css')">eclipse</div>
      <div style="cursor: pointer;" onclick="setTheme('gruvbox-dark.css')">gruvbox-dark</div>
      <div style="cursor: pointer;" onclick="setTheme('hopscotch.css')">hopscotch</div>
      <div style="cursor: pointer;" onclick="setTheme('monokai.css')">monokai</div>
    </div>
  </div>
</template>