<template>
  <div class="footer">
    <p>{{ currentTranslations.footer }}</p>
  </div>
</template>

<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import { useStore } from "vuex";
import { computed } from "vue";
import translation from "../translation";

const store = useStore();
const theme = computed(() => store.state.theme);

const currentLanguage = computed(() => store.state.language.currentLanguage);

const currentTranslations = computed(
  () => translation[currentLanguage.value] || {}
);

</script>

<style>
.footer{
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
}

.footer p{
    padding: 0px;
    margin: 0px;
    color: white
}
</style>
