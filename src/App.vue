<template>
  <div class="app">
    <header>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"
      />
      <div
        class="divLogo border-right-gradient-top"
        :style="{ borderImage: borderGradientTop }"
      >
        <RouterLink
          id="Home"
          class="btn btn-outline-secondary"
          to="/"
          style="border: none; margin: 0px; padding: 0px"
        >
          <img class="logo" src="@/assets/img/logo.jpg" />
        </RouterLink>
      </div>
      <div class="divNav" :style="dynamicStyles">
        <div class="routersLink">
          <RouterLink
            id="Home"
            class="btn btn-outline-secondary"
            to="/"
            :class="{ active: isRouteActive('/') }"
          >
            <i id="iHome" class="bi bi-house-door-fill"></i>
          </RouterLink>
          <RouterLink
            id="About"
            class="btn btn-outline-secondary"
            to="/about"
            :class="{ active: isRouteActive('/about') }"
          >
            <i id="iAbout" class="bi bi-person-vcard-fill"></i>
          </RouterLink>
          <RouterLink
            id="Contact"
            class="btn btn-outline-secondary"
            to="/contacts"
            :class="{ active: isRouteActive('/contacts') }"
          >
            <i id="iContact" class="bi bi-phone-vibrate"></i>
          </RouterLink>
          <RouterLink
            id="Projects"
            class="btn btn-outline-secondary"
            to="/projects"
            :class="{ active: isRouteActive('/projects') }"
          >
            <i id="iProjects" class="bi bi-code-slash"></i>
          </RouterLink>
        </div>
      </div>

      <div
        class="sessionConfig border-right-gradient-bottom"
        :style="{ borderImage: borderGradientBottom }"
      >
        <div class="divMost">
          <div class="perfilApp">
            <CButton
              class="btnHref"
              component="a"
              href="https://www.facebook.com/cleitondcarmosilva/"
              role="button"
              target="_blank"
            >
              <img class="imgPerfilApp" src="@/assets/img/face.svg" />
            </CButton>
          </div>
          <div class="perfilApp">
            <CButton
              class="btnHref"
              component="a"
              href="https://www.instagram.com/cleitondcarmo/"
              role="button"
              target="_blank"
            >
              <img class="imgPerfilApp" src="@/assets/img/insta.svg" />
            </CButton>
          </div>
          <div class="perfilApp">
            <CButton
              class="btnHref"
              component="a"
              href="https://github.com/cleitondcarmo"
              role="button"
              target="_blank"
            >
              <img class="imgPerfilApp" src="@/assets/img/github.svg" />
            </CButton>
          </div>
          <div class="perfilApp">
            <CButton
              class="btnHref"
              component="a"
              href="https://www.linkedin.com/in/cleitondcarmo/"
              role="button"
              target="_blank"
            >
              <img class="imgPerfilApp" src="@/assets/img/linkedin.svg" />
            </CButton>
          </div>
        </div>
        <div class="theme">
          <CButton
            @click="
              () => {
                visibleModal = true;
              }
            "
          >
            <i
              class="bi bi-gear iconSetting"
              :style="{ color: theme.primaryColor }"
            ></i>
          </CButton>
          <CModal
            :visible="visibleModal"
            @close="
              () => {
                visibleModal = false;
              }
            "
          >
            <CModalHeader> </CModalHeader>
            <CModalBody>
              <div class="buttonsTema">
                <CButton @click="setThemeHandler('Verde')">
                  <img class="iconThema" src="@/assets/img/themaGreen.png" />
                </CButton>
                <CButton @click="setThemeHandler('Laranja')">
                  <img class="iconThema" src="@/assets/img/themaOrange.png" />
                </CButton>
                <CButton @click="setThemeHandler('Roxo')">
                  <img class="iconThema" src="@/assets/img/themaPurple.png" />
                </CButton>
              </div>
              <hr />
              <div class="buttonsLanguage">
                <CButton @click="setLanguageHandler('Portugues')">
                  <img class="iconLanguage" src="@/assets/img/brasilFlag.png" />
                </CButton>
                <CButton @click="setLanguageHandler('English')">
                  <img
                    class="iconLanguage"
                    src="@/assets/img/kingdomFlag.png"
                  />
                </CButton>
              </div>
            </CModalBody>
          </CModal>
        </div>
        <div class="divMenu">
          <CDropdown variant="nav-item">
            <CDropdownToggle color="secondary">
              <i class="bi bi-three-dots-vertical iconMenu" :style="{ color: theme.primaryColor }"></i>
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem>
                <RouterLink class="btn btn-outline-secondary" to="/">
                  <i id="iHome" class="bi bi-house-door-fill"></i>
                </RouterLink>
              </CDropdownItem>
              <CDropdownItem>
                <RouterLink class="btn btn-outline-secondary" to="/about">
                  <i id="iAbout" class="bi bi-person-vcard-fill"></i>
                </RouterLink>
              </CDropdownItem>
              <CDropdownItem>
                <RouterLink class="btn btn-outline-secondary" to="/contacts">
                  <i id="iContact" class="bi bi-phone-vibrate"></i>
                </RouterLink>
              </CDropdownItem>
              <CDropdownItem>
                <RouterLink
                  id="Projects"
                  class="btn btn-outline-secondary"
                  to="/projects"
                >
                  <i id="iProjects" class="bi bi-code-slash"></i>
                </RouterLink>
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </div>
      </div>
    </header>

    <body>
      <RouterView />
    </body>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import translation from "@/translation";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
} from "@coreui/vue";

const store = useStore();
const theme = computed(() => store.state.theme);

const dynamicStyles = computed(() => ({
  "--primary-color": theme.value.primaryColor,
  "--secondary-color": theme.value.secondaryColor,
  "--third-color": theme.value.thirdColor,
}));

const gradientTop = computed(() => theme.value.gradientTop);
const borderGradientTop = computed(() => `${gradientTop.value}`);

const gradientBottom = computed(() => theme.value.gradientBottom);
const borderGradientBottom = computed(() => `${gradientBottom.value}`);

const route = useRoute();

const visibleModal = ref(false);

const setThemeHandler = (themeName: string) => {
  store.dispatch("setThemeByName", themeName);
};

const currentLanguage = ref("Portugues");

const setLanguageHandler = (language) => {
  store.dispatch("setLanguage", language);
};

const currentTranslations = computed(() => {
  return translation[currentLanguage.value] || {};
});

function isRouteActive(path) {
  return route.path === path;
}
</script>

<style scoped>
#app {
  max-width: 100%;
  max-height: 100%;
}

.iconThema {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease-in-out;
}
.iconThema:hover {
  width: 50px;
  height: 50px;
  transform: rotate(360deg);
}

.iconSetting,
.iconLanguage {
  width: 60px;
  font-size: 35px;
  cursor: pointer;
}
.iconMenu{
  margin-top: 2px;
  font-size: 35px;
}
.iconSetting:hover {
  transform: rotate(45deg);
}

.iconLanguage:hover {
  transform: scale(1.1);
}

::v-deep(.modal-dialog) {
  max-width: 200px !important;
  margin: 0;
  position: fixed;
  bottom: 0;
  left: 50px;
}

.buttonsTema,
.buttonsLanguage {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.buttonsLanguage {
  margin: 0px 10px;
}

#iHome,
#iAbout,
#iContact,
#iProjects {
  font-size: 24px;
  color: #969494;
}

.logo {
  width: 40px;
  height: 40px;
}

.routersLink {
  max-width: 50px;
  max-height: 100%;
  text-align: center;
  align-items: center;
}

.routersLink a {
  width: 40px;
  height: 40px;
  border: 0px;
  padding: 0px;
  margin: 0px;
}

.theme {
  width: 100%;
  display: flex;
  justify-content: center;
}

.theme i {
  font-size: 25px;
}

@media (min-width: 801px) {
  #Contact:hover,
  #About:hover,
  #Home:hover,
  #Projects:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .routersLink .btn {
    border-right: 2px solid var(--primary-color);
    border-radius: 0;
    width: 46px;
    margin-right: 0px;
    margin-left: 4px;
  }

  /* Estilo para botões ativos */
  .routersLink .btn.active {
    background-color: var(--active-bg-color, rgba(0, 0, 0, 0.5));
    border: 2px solid var(--primary-color);
    border-radius: 4px 0px 0px 4px;
    border-right: transparent !important;
    padding-right: 4px;
  }

  .routersLink .btn.hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* Estilo para ícones quando botão está ativo*/
  .routersLink .btn.active #iHome,
  .routersLink .btn.active #iAbout,
  .routersLink .btn.active #iContact,
  .routersLink .btn.active #iProjects {
    color: var(--primary-color);
  }

  .border-right {
    border-right: 2px solid var(--primary-color);
  }

  .border-right-gradient-top {
    border-width: 2px;
    border-left: transparent !important;
    border-right-style: solid !important;
  }

  .border-right-gradient-bottom {
    border-width: 2px;
    border-left: transparent !important;
    border-right-style: solid !important;
  }

  .btn {
    display: block;
    padding: 0px;
  }

  .app {
    display: grid;
    grid-template-columns: 50px 100%;
    grid-template-rows: 100vh;
  }

  header {
    grid-column-start: 1;
    grid-column-end: 2;
    min-height: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .perfilApp {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    padding: 0px;
    margin: 5px auto;
  }

  .imgPerfilApp {
    max-width: 20px;
    max-height: 20px;
    min-width: 20px;
    min-height: 20px;
    margin: auto;
  }

  .divLogo {
    height: calc(50% - 80px);
    width: 50px;
  }

  .logo {
    margin: 5px;
  }

  .menu {
    display: none;
    width: 0px;
  }

  .divMenu {
    display: none;
    width: 0px;
  }

  .divNav {
    width: 50px;
    height: 160px;
    font-size: 12px;
    text-align: center;
    background-color: black;
    display: flex;
    align-items: center;
  }

  .divMost {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 20px;
  }

  .sessionConfig {
    height: calc(50% - 80px);
    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  body {
    grid-column-start: 2;
    grid-column-end: 2;
  }
}

@media (max-width: 800px) {
  ::v-deep(.modal-dialog) {
    max-width: 260px !important;
    top: 60px;
    right: 0px;
    left: unset;
  }
  .app {
    display: grid;
    grid-template-rows: 60px calc(100% - 60px) !important;
  }

  header {
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: black;
    display: flex;
    justify-content: space-between;
  }

  .routersLink {
    display: none;
    max-width: 0px;
  }

  .divLogo {
    width: 50px;
    height: 50px;
    margin: 5px;
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  .divNav {
    width: 0px;
  }

  .divMenu {
    display: flex;
    justify-content: center;
    width: 50px;
    height: 60px;
  }

  .divMost {
    display: none;
  }

  .sessionConfig {
    display: flex;
    margin-right: 10px;
  }

  .theme i{
    margin-top: 1px;
  }
  .menu {
    width: 50px;
    height: 50px;
  }

  .btn-outline-secondary {
    width: 100%;
  }

  .divMenu img {
    width: 30px;
    height: 30px;
    margin: auto;
    padding: auto;
  }

  .dropdown-toggle::after {
    border: none;
    content: none;
  }

  .divMenu a {
    color: var(--primary-color);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .dropdown-menu,
  .show {
    min-width: 50px !important;
  }
}
</style>
