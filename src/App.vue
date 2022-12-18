<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CButton } from '@coreui/vue';
</script>

<template>
  <div class="app">
    <header>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
      <div class="divLogo">
        <img class="logo" src="@/assets/img/logo.jpg" />
      </div>
      <div class="divNav">
        <div class="routersLink">
          <RouterLink id="Home" class="btn btn-outline-secondary" to="/">
            <i id="iHome" class="bi bi-house-door-fill"></i>
          </RouterLink>
          <RouterLink id="About" class="btn btn-outline-secondary" to="/about">
            <i id="iAbout" class="bi bi-person-vcard-fill"></i>
          </RouterLink>
          <RouterLink id="Contact" class="btn btn-outline-secondary" to="/contacts">
            <i id="iContact" class="bi bi-phone-vibrate"></i>
          </RouterLink>
        </div>
        <div class="divMenu">
          <CDropdown variant="nav-item">
            <CDropdownToggle color="secondary"><img src="@/assets/img/menu.svg" /></CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">
                <RouterLink class="btn btn-outline-secondary" to="/"><i id="iHome" class="bi bi-house-door-fill"></i>
                </RouterLink>
              </CDropdownItem>
              <CDropdownItem href="#">
                <RouterLink class="btn btn-outline-secondary" to="/about"><i id="iAbout"
                    class="bi bi-person-vcard-fill"></i></RouterLink>
              </CDropdownItem>
              <CDropdownItem href="#">
                <RouterLink class="btn btn-outline-secondary" to="/contacts"><i id="iContact"
                    class="bi bi-phone-vibrate"></i></RouterLink>
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </div>
      </div>
      <div class="divMost">
        <div class="perfilApp">
          <CButton class="btnHref" component="a" href="https://www.facebook.com/cleitondcarmosilva/" role="button"
            target="_blank">
            <img class="imgPerfilApp" src="@/assets/img/face.svg" />
          </CButton>
        </div>
        <div class="perfilApp">
          <CButton class="btnHref" component="a" href="https://www.instagram.com/cleitondcarmo/" role="button"
            target="_blank">
            <img class="imgPerfilApp" src="@/assets/img/insta.svg" />
          </CButton>
        </div>
        <div class="perfilApp">
          <CButton class="btnHref" component="a" href="https://github.com/cleitondcarmo" role="button" target="_blank">
            <img class="imgPerfilApp" src="@/assets/img/github.svg" />
          </CButton>
        </div>
        <div class="perfilApp">
          <CButton class="btnHref" component="a" href="https://www.linkedin.com/in/cleitondcarmo/" role="button"
            target="_blank">
            <img class="imgPerfilApp" src="@/assets/img/linkedin.svg" />
          </CButton>
        </div>
      </div>
    </header>

    <body>
      <RouterView />
    </body>
  </div>
</template>

<style scoped>
#iHome,
#iAbout,
#iContact {
  font-size: 24px;
  color: #969494;
}

#Contact:hover,
#About:hover,
#Home:hover {
  background-color: #404140;
}

#Contact:hover #iContact,
#About:hover #iAbout,
#Home:hover #iHome {
  color: #008000;
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
  margin: 5px;
}

@media (min-width: 801px) {
  .btn{
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
    display: grid;
    grid-template-rows: 25% 50% 25%;
  }

  .perfilApp {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    padding: 0px;
    margin: 10px auto;
  }

  .imgPerfilApp {
    max-width: 20px;
    max-height: 20px;
    min-width: 20px;
    min-height: 20px;
    margin: auto;
  }

  .divLogo {
    grid-column-start: 2;
    grid-column-end: 2;
    width: 50px;
  }

  .logo{
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
    max-height: 100%;
    font-size: 12px;
    text-align: center;
    background-color: black;
    grid-column-start: 2;
    grid-column-end: 2;
    display: flex;
    align-items: center;
  }

  .divMost {
    grid-column-start: 2;
    grid-column-end: 3;
    margin: auto;
  }

  body {
    grid-column-start: 2;
    grid-column-end: 2;
  }
}

@media (max-width: 800px) {
  .app {
    display: grid;
    grid-template-rows: 80px 600px;
  }

  header {
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: black;
    display: grid;
    grid-template-columns: 80px calc(100% - 100px);
  }

  .routersLink {
    display: none;
    max-width: 0px;
  }

  .divLogo {
    width: 70px;
    height: 70px;
    margin: 5px;
  }

  .logo {
    width: 70px;
    height: 70px;
  }

  .divNav {
    width: 100%;
    max-height: 100%;
    font-size: 12px;
    text-align: center;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: black;
    float: right;
  }

  .divMenu {
    display: flex;
    justify-content: center;
    width: 50px;
    height: 80px;
  }

  .divMost {
    display: none;
  }

  .menu {
    width: 50px;
    height: 50px;
  }

  .btn-outline-secondary {
    width: 100%;
  }

  .divMenu img {
    width: 50px;
    height: 50px;
    margin: 15px 0px
  }

  .dropdown-toggle::after {
    border: none;
    content: none;
  }

  .divMenu a :hover {
    background-color: rgb(100, 102, 100);
    border-radius: 100%;
  }

  .divMenu a {
    color: green;
  }
}
</style>
