<template>
  <div class="col-3 col-md-4 col-md-6 col-sm-12">
    <div class="product-box">
      <div class="box">
        <router-link
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          class="box-img"
        >
          <img :src="meal.strMealThumb" :alt="meal.strMeal" />
        </router-link>
        <div class="box-body">
          <div class="box-title">{{ meal.strMeal }}</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div class="box-link">
            <a :href="meal.strYoutube" target="_blank">Youtube</a>
            <router-link
              :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
              target="_blank"
              class="view"
              >View</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { meal } = defineProps({
  meal: {
    required: true,
    type: Object,
  },
});
</script>

<style>
</style>