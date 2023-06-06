<template>
  <div class="product">
    <h1 class="text-center">{{ meal.strMeal }}</h1>
    <div class="row">
      <div class="col-6 col-md-12">
        <div class="product-img">
          <a :href="meal.strYoutube" target="_blank">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" />
            <span class="youtub text-center"><p>Watch Youtube</p></span>
          </a>
        </div>
      </div>
      <div class="col-6 col-md-12">
        <div class="box-product">
          <div class="box-title">Meal Name: {{ meal.strMeal }}</div>

          <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
              <strong class="font-bold" v-if="meal.strCategory"
                >Category:</strong
              >
              {{ meal.strCategory }}
            </div>
            <div>
              <strong class="font-bold" v-if="meal.strArea">Area:</strong>
              {{ meal.strArea }}
            </div>
            <div>
              <strong class="font-bold" v-if="meal.strTags">Tags:</strong>
              {{ meal.strTags }}
            </div>
          </div>
          <div class="flex">
            <ul class="col-6">
              <div class="box-title">Ingredients</div>
              <template v-for="(el, index) of new Array(20)" :key="index">
                <li v-if="meal[`strIngredient${index + 1}`]">
                  {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
                </li>
              </template>
            </ul>
            <ul class="col-6">
              <div class="box-title">Measures</div>
              <template v-for="(el, index) of new Array(20)" :key="index">
                <li v-if="meal[`strMeasure${index + 1}`]">
                  {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 mb-20">
        <div class="box-title p-4">Discriptions</div>
        <div class="box-text">{{ meal.strInstructions }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`/lookup.php?i=${route.params.id}`).then(({ data }) => {
    debugger;
    meal.value = data.meals[0] || {};
  });
});
</script>

<style lang="css">
.product-img {
  margin: 60px 20px;
  border-radius: 10px;
  overflow: hidden;
  height: 450px;
  margin-right: 60px;
}
img {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  object-fit: contain;
  background-size: cover;
  background-position: center center;
}
.box-product {
  padding: 60px 20px;
  width: 100%;
}
.product h1 {
  font-weight: 600;
  font-size: 30px;
  padding: 30px;
  padding-bottom: 0px;
  color: rgb(230, 86, 20);
}
.box-product ul {
  margin-bottom: 30px;
}
.youtub {
  display: flex;
  z-index: 3;
  margin-top: 20px;
  text-align: center;
  background-color: red;
  color: aliceblue;
  padding: 10px 80px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: auto;
  justify-content: center;
  text-align: center;
}
.youtub:hover {
  background-color: darkred;
}
.box-text {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  color: rgb(48, 47, 47);
}

@media (max-width: 900px) {
  .box-product {
    padding: 15px;
  }
  .product-img {
    margin: 15px;
  }
}
</style>