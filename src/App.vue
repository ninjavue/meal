<template>
  <HeaderItem />
  <div class="bg-gray-100 app">
    <router-view />
  </div>
  <FooterItem />
</template>

<script>
import FooterItem from "./components/lib/FooterItem.vue";
import HeaderItem from "./components/lib/HeaderItem.vue";

export default {
  components: { HeaderItem, FooterItem },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 75vh;
}
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>