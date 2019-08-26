<template>
  <div class="code-sharing-panel">
    <center>
      <div class="centered-box" id="code-sharing-box">
        <!-- <button class = "btn" id = "share-code" onclick="code_sharing.shareProject()">Share Project</button><br> -->
        <button class="btn" id="share-code" onclick="code_sharing.shareCode(true)">
          Share
          Code
        </button>
        <br />
        <button class="btn" id="connect" onclick="code_sharing.connect(false)">Connect</button>
        <!-- <br> -->
        <!-- <button class = "btn" id = "disconnect" onclick="disconnect()">Disconnect</button> -->
      </div>
    </center>
  </div>
</template>