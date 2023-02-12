<script setup lang="ts">
</script>

<template>
  <div class="divBodyHome">
    <div class="nome">
      <h1 class="h1One">
        CLEITON
      </h1>
      <h1 class="h1Two">
        DO CARMO
      </h1>
      <h1 class="h1Tree">
        Desenvolvedor de Software
      </h1>
    </div>
  </div>
</template>

<style>
.divBodyHome {
  min-width: 100%;
  min-height: 100%;
  background-image: url(../assets/img/background3.jpg);
  background-size: 100% 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
}

.nome {
  color: white;
  margin: 0px 50px;
}

.h1One {
  font-family: Arial Narrow, sans-serif;
}

.h1Two {
  font-family: Jazz LET, fantasy;
  font-size: 50px;
}

.h1Tree {
  font-family: cursive;
  font-size: 30px;
  text-shadow: 3px 3px green;
}

.painel,
.logo {
  width: 100%;
  height: 100vh;
}

#ihome {
  min-width: 30px;
  min-height: 30px;
  color: #008000 !important;
}

@media (max-width: 800px) {
  .divBodyHome {
    display: flex;
    align-items: flex-start;
    background-image: url(../assets/img/background6.jpg);
  }

  .h1Tree {
    font-family: cursive;
    font-size: 30px;
    text-shadow: 1px 1px green;
  }

  .nome {
    color: white;
    margin: 50px 50px;
  }
}
</style>