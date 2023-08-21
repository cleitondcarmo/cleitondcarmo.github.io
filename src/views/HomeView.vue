<template>
  <div class="backgroundHome">
    <div class="divBodyHome">
      <div class="nome" :style="dynamicStyles">
        <h1 class="h1One" :style="{ color: theme.primaryColor }">
          Cleiton Do Carmo
        </h1>
        <h1 class="h1Two">
          {{ currentTranslations.developerHome }}
        </h1>
        <RouterLink to="/about">
          <CButton class="buttonLearn">
            {{currentTranslations.learn}}
          </CButton>
        </RouterLink>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import { useStore } from "vuex";
import { computed } from "vue";
import translation from "@/translation";
import Footer from "../components/footer.vue";
import { CButton } from "@coreui/vue";

const store = useStore();
const theme = computed(() => store.state.theme);

const currentLanguage = computed(() => store.state.language.currentLanguage);

const currentTranslations = computed(
  () => translation[currentLanguage.value] || {}
);

const dynamicStyles = computed(() => ({
  "--primary-color": theme.value.primaryColor,
  "--secondary-color": theme.value.secondaryColor,
  "--third-color": theme.value.thirdColor,
}));
</script>

<style>
.backgroundHome{
  min-height: calc(100vh - 60px);
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/background.jpg);
  background-size: 100% 100%;
}

.divBodyHome {
  min-width: 100%;
  height: calc(100% - 20px);
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
}

.nome {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 100%;
  min-height: 100%;
  padding-top: 150px;
  background-color: rgba(0, 0, 0, 0.5);
}

.h1One {
  font-family: Jazz LET, fantasy;
  font-size: 50px;
}

.h1Two {
  font-family: Lucida Console;
  font-weight: 800;
  font-size: 45px;
}

.painel,
.logo {
  width: 100%;
  height: 100vh;
}

.buttonLearn, .buttonLearn:hover {
  margin-top: 20px;
  background-color: transparent;
  border: 1px solid var(--primary-color);
  border-radius: 1px;
  color: white;
}

.buttonLearn:hover {
  transform: scale(1.1);
}

#ihome {
  min-width: 30px;
  min-height: 30px;
  color: #008000 !important;
}

@media (max-width: 450px) {
  .h1One{
    font-size: 30px;
  }
  .h1Two{
    font-size: 25px;
  }
}
</style>
