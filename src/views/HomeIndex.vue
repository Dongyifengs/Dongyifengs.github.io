<template>
  <aside class="card">
    <div class="home">
      <div class="titleText">
        <h1>MoYi的小工具</h1>
      </div>
      <div class="toolsList">
        <div class="toolsListItem">
          <div class="toolsListItemDivCard" ref="GetAtlasText" @click="router.push('/atlastools')">
            <img src="../public/ToolsIcon/Genshin.jpg" alt="GetAtlasText"/>
          </div>
          <div class="toolsListItemDivCard" ref="GetHarResources" @click="router.push('/harresources')">
            <img src="../public/ToolsIcon/Genshin.jpg" alt="GetHarResources"/>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import VanillaTilt from 'vanilla-tilt';
import router from "../routers";

const GetAtlasText = ref();
const GetHarResources = ref();


onMounted(() => {
  VanillaTilt.init(GetAtlasText.value, {
    max: -20,
    speed: 1000
  });
  VanillaTilt.init(GetHarResources.value, {
    max: -20,
    speed: 1000
  });
});
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
  align-items: center;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.toolsListItem{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.toolsListItemDivCard {
  width: 120px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s;
}

.toolsListItemDivCard img {
  max-width: 80%;
  max-height: 80%;
  border-radius: 10px;
}
</style>