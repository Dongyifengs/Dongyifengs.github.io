<template>
  <div class="home">
    <div class="titleText">
      <h1>AtlasTools解析工具</h1>
    </div>
    <div class="atlasToolsDiv">
      <n-input class="atlasInputText" type="text" placeholder="请输入需要解析的Atlas参数或者将文件拖入此网页中" clearable /><n-button type="primary">搜索</n-button>
    </div>
    <div class="container">
      <div class="leftPanel"></div>
      <div class="rightPanel"></div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { NInput, NButton } from "naive-ui";
</script>

<style scoped>
.home {
  background-image: url(../public/Background/background.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  flex-wrap: wrap;
  justify-content: center;
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}

.home {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
}

.atlasInputText {
  width: 500px;
}

.container {
  display: flex;
  width: 98%;
  margin: 15px;
  height: 80vh;
}

.leftPanel {
  background-color: rgba(255, 255, 255, 0.3);
  width: 60%;
  margin: 15px;
  border-radius: 10px;
}

.rightPanel {
  background-color: rgba(255, 255, 255, 0.3);
  width: 40%;
  margin: 15px;
  border-radius: 10px;
}
</style>