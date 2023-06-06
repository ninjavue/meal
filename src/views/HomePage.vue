<template>
  <div class="home">
    <Splide
      :options="{ rewind: true, autoplay: true, type: loop }"
      aria-label="My Favorite Images"
    >
      <SplideSlide v-for="item of ingredients" :key="item.idCategory">
        <img
          class="pt-30"
          :src="item.strCategoryThumb"
          :alt="item.strCategory"
        />
        <h1 class="splide-title">{{ item.strCategory }}</h1>
        <p class="splide-text">
          {{ item.strCategoryDescription.substring(0, 100) }}
        </p>
      </SplideSlide>
    </Splide>

    <div class="row mt-20">
      <div
        class="col-3 col-md-4 col-md-6 col-sm-12"
        v-for="item of ingredients"
        :key="item.idCategory"
      >
        <div class="product-box">
          <div class="box">
            <div class="box-img">
              <img :src="item.strCategoryThumb" :alt="item.strCategory" />
            </div>
            <div class="box-body">
              <div class="box-title">{{ item.strCategory }}</div>
              <p>
                {{ item.strCategoryDescription.substring(0, 70) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";

const ingredients = ref([]);
onMounted(async () => {
  const response = await axiosClient.get("/categories.php");
  console.log(response.data);
  ingredients.value = response.data.categories;
});
</script>
 <!-- splide js add -->
<script>
export default {
  components: {
    components: {
      Splide,
      SplideSlide,
    },
  },
};
</script>

<style lang="css">
@import "@splidejs/vue-splide/css";

.splide__slide img {
  max-height: 400px;
}
.pt-30 {
  padding-top: 30px;
}

.splide {
  position: relative;
}

.splide-title {
  font-size: 40px;
  font-weight: 500;
  top: 100px;
  left: 200px;
  position: absolute;
  color: rgb(226, 137, 49);
}
.splide-text {
  font-size: 20px;
  font-weight: 400;
  top: 180px;
  left: 200px;
  color: rgb(226, 137, 49);
  position: absolute;
  width: 350px;
}

@media (max-width: 768px) {
  .splide-text,
  .splide-title {
    left: 160px;
  }
}
@media (max-width: 600px) {
  .splide-text,
  .splide-title {
    left: 100px;
    color: rgb(241, 43, 36);
  }
}
@media (max-width: 600px) {
  .splide-text,
  .splide-title {
    left: 40px;
    top: 15px;
    color: rgb(15, 15, 15);
  }
  .splide-text {
    width: 300px;
    display: none;
  }
}
</style>