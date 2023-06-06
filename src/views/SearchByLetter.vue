<template>
  <div class="row justify-center gap-2 mt-2">
    <router-link
      class="letter-btn"
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters.split('')"
      :key="letter"
      @click="submit(letter)"
    >
      {{ letter }}
    </router-link>
  </div>
  <div class="row">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import MealItem from "../components/MealItem.vue";
const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function submit(letter) {
  store.dispatch("searchMealsByLetter", letter);
}

const meals = computed(() => store.state.mealsByLetter);

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
  console.log(route.params.letter);
});
</script>

<style lang="css">
.letter-btn {
  padding: 5px 10px;
  background-color: #679ffa;
  color: white;
  border-radius: 4px;
}
</style>