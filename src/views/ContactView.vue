<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
import { CButton } from '@coreui/vue';

</script>

<template>
  <div class="divBody">
    <div class="contactMe">
      <h1 class="contactMeh1">CONTATE-ME</h1>
    </div>
    <div class="contactDiv">
      <div class="mapsDiv">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15432.120127292892!2d-42.66760763908388!3d-14.767338235310786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75004f36a06e7a1%3A0x843bc7dd1ed6694c!2sUrandi%2C%20BA%2C%2046350-000!5e0!3m2!1spt-BR!2sbr!4v1671289492835!5m2!1spt-BR!2sbr"
          min-width="100%" min-height="100%" style="border:0;" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="contactPhone">

        <div class="contact">
          <div class="perfil">
            <CButton class="btnHref" component="a" href="https://www.facebook.com/cleitondcarmosilva/" role="button"
              target="_blank">
              <img class="imgPerfil" src="@/assets/img/face.svg" />
            </CButton>
          </div>
          <div class="perfil">
            <CButton class="btnHref" component="a" href="https://www.instagram.com/cleitondcarmo/" role="button"
              target="_blank">
              <img class="imgPerfil" src="@/assets/img/insta.svg" />
            </CButton>
          </div>
          <div class="perfil">
            <CButton class="btnHref" component="a" href="https://github.com/cleitondcarmo" role="button"
              target="_blank">
              <img class="imgPerfil" src="@/assets/img/github.svg" />
            </CButton>
          </div>
          <div class="perfil">
            <CButton class="btnHref" component="a" href="https://www.linkedin.com/in/cleitondcarmo/" role="button"
              target="_blank">
              <img class="imgPerfil" src="@/assets/img/linkedin.svg" />
            </CButton>
          </div>
          <div class="perfil">
            <CButton class="btnHref" component="a" href="https://contate.me/cleitondcarmo" role="button"
              target="_blank">
              <img class="imgPerfil" src="@/assets/img/whatsapp.svg" />
            </CButton>
          </div>
          <div class="perfil">
            <CButton class="btnHref" component="a" href="mailto:cleitondcarmo@hotmail.com" role="button"
              target="_blank">
              <img class="imgPerfil" src="@/assets/img/email.svg" />
            </CButton>
          </div>
        </div>
        <div class="contactTextDiv">
          <div class="contactText">
            <h5><i class="bi bi-telephone"></i> Celular</h5>
            <p>(77) 992051960</p>
          </div>
          <div class="contactText">
            <h5><i class="bi bi-envelope-at"></i> E-mail</h5>
            <p>cleitondcarmo@hotmail.com</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
  
<style>
body {
  background-image: url(../assets/img/background6.jpeg);
  background-size: auto;
  background-repeat: no-repeat;
}

.contactMe {
  margin: 50px;
}

.contactMeh1 {
  font-size: 40px;
  color: green;
  font-family: FreeMono, monospace;
  font-weight: 700;
}

.imgPerfil {
  max-width: 20px;
  max-height: 20px;
  min-width: 20px;
  min-height: 20px;
  margin: auto;
}

.btnHref {
  max-width: 20px;
  max-height: 20px;
  min-width: 20px;
  min-height: 20px;
  padding: 0px;
  display: flex;
  justify-content: center;
}

.perfil a {
  padding: 0px;
  margin: 0px;
  border: none;
}

@media (min-width: 801px) {
  .divBody{
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: 110px;
  }
  
  .contact {
    display: flex;
    width: 200px;
    height: auto;
    margin-bottom: 40px;
  }

  .contactDiv {
    width: 600px;
    height: 300px;
    margin: auto;
    display: grid;
    grid-template-columns: 70% 30%;
  }

  .contactText {
    color: rgb(255, 248, 248);
    margin-bottom: 40px;
  }

  .mapsDiv iframe {
    min-width: 400px;
    min-height: 300px;
    padding: 0px 10px;
  }

  .contactPhone {
    width: 300px;
    padding: 0px 10px;
  }

  .perfil {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    padding: 0px;
    margin: 0px 10px 20px 0px;
  }
}

@media (max-width: 800px) {
  .contactMe {
    margin: 20px;
  }

  .contactMeh1 {
    font-size: 25px;
  }

  .contact {
    display: flex;
    width: 100%;
    height: auto;
  }

  .contactDiv {
    width: 100%;
    height: 300px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .contactTextDiv {
    display: flex;
  }

  .contactText {
    color: rgb(255, 248, 248);
    margin-bottom: 40px;
    width: 50%;
  }

  .contactText p {
    font-size: 14px;
  }

  .contactText h5 {
    font-size: 18px;
  }

  .mapsDiv iframe {
    width: 400px;
    height: 300px;
  }

  .contactPhone {
    margin: auto;
    display: grid;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .perfil {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    padding: 0px;
    margin: 40px 20px;
  }
}

@media (max-width: 420px) {
  .mapsDiv iframe {
    width: 300px;
    height: 200px;
  }

  .contactTextDiv {
    display: block;
    text-align: center;
  }

  .contactText {
    width: 100%;
  }

  .perfil {
    margin: 20px 5px;
  }
}
</style>
  
