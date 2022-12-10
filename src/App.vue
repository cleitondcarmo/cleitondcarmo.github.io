<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="divLogo">
          <!-- <img class="logo" src="@/assets/logo.svg"/> -->
          <h1 style="font-size: 60px; color:green">C</h1>
        </div>
        <div class="routersLink">
            <RouterLink class="btn btn-outline-secondary" to="/">Início</RouterLink>
            <RouterLink class="btn btn-outline-secondary" to="/about">Sobre</RouterLink>
            <RouterLink class="btn btn-outline-secondary" to="/contacts">Contatos</RouterLink>
        </div>
      </nav>
    </div>
  </header>
  <body>
    <RouterView />
  </body>
</template>

<style scoped>
.divLogo{
  width: 80px;
  height: 80px;
  margin: 10px;
  margin-left: 150px;
  display: inline;
  float: left;
  border: 1px solid green;
}

.logo {
  width: 80px;
  height: 80px;
}

.routersLink{
  width: auto;
  height: 100px;
  margin-right: 100px;
  display: flex;
  float: right;
  text-align: center;
  align-items: center;
}

.routersLink a{
  margin: auto 30px;
  font-size: 18px;
  width: 140px;
  color: rgb(194, 197, 199);
  padding: 4px;
  border: 1px solid green;
}

nav {
  width: 100%;
  height: 100px;
  font-size: 12px;
  text-align: center;
  align-items: center;
  background-color: black;
}

@media (min-width: 1024px) {
}
</style>
