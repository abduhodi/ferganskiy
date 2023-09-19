<template>
  <HomeView />
</template>

<script setup>
import HomeView from "./views/HomeView.vue";
</script>

<style lang="scss" scoped>
.container {
  width: 940px;
}
@media (max-width: 1200px) {
  .container {
    width: 740px;
  }
}
@media (max-width: 768px) {
}
</style>
