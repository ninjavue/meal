<template>
  <header
    class="header bg-white shadow h-16 flex justify-between items-stretch"
  >
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 logo"
    >
      Great Food
    </router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'ByName' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
        <span class="ml-2"> Search</span>
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center transition-colors px-2 h-full hover:bg-purple-100"
      >
        <img
          class="icon"
          src="https://cdn-icons-png.flaticon.com/512/3563/3563990.png"
          alt=""
        />
        Letter
      </router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Roboto+Slab:wght@700&display=swap");

.icon {
  width: 16px;
  height: 16px;
  margin-right: 5px;
}
.logo {
  font-family: "Roboto Slab", serif;
  font-size: 20px;
  color: rgb(236, 116, 11);
  font-weight: 700;
}
</style>