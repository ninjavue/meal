<template>
  <div class="search">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search..."
      @change="searchMeals"
    />
  </div>
  <div class="row">
   <MealItem  v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
const route = useRoute()
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value){

    }
})
</script>

<style lang="css">
.search{
    padding: 60px 20px;
}
.product-box {
  width: 100%;
  padding: 20px;
}
.box {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 50%);
}
.box:hover {
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 30%);
}

.box-body{
    padding: 20px 10px;
}
.box-img {
  width: 100%;
  height: 200px;
}
.box-title{
    font-weight: 600;
    font-size: 18px;
}

.box-img img {
  width: 100%;
  height: 100%;
}
.box-link{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.box-link a{
    border-radius: 5px;
    padding: 5px 10px;
    background-color: #8eb3bd;
    color: red;
    font-weight: bold;
}

.box-link .view{
    color: blue;
    background-color: #c3e6de;
}
</style>