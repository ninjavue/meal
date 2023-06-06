<template>
  <footer>
  <div class="container">
    <ul class="pt-5">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/">About</router-link></li>
      <li><router-link to="/">Contact</router-link></li>
    </ul>
    <p class="text-center pt-5">&copy;2023 My Website</p>
  </div>
</footer>
</template>

<script>
export default {

}
</script>

<style>
footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  margin-top: auto;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

p {
  margin: 0;
}

footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

footer ul li {
  display: inline-block;
  margin: 0 10px;
}

a {
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
</style>