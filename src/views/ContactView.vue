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
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5274.231287652758!2d-49.362911299380826!3d-20.813741231390964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc52ce6910005f%3A0xb39d5c0e3b8c5675!2sS%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP!5e0!3m2!1spt-PT!2sbr!4v1691366038237!5m2!1spt-PT!2sbr" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      
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
  background-size: 100% 100%;
}

.contactMe {
  margin: 50px;
}

.contactMeh1 {
    width: 100%;
    text-align: start;
    color: rgb(253, 253, 253);
    animation: flicker 1.5s infinite alternate;
    padding: 10px;
    font-size: 25px;
}

@keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
        text-shadow:
            0 0 0px #fff,
            0 0 5px #fff,
            0 0 10px #fff,
            0 0 15px green,
            0 0 20px green,
            0 0 25px green,
            0 0 30px green,
            0 0 35px green;
    }

    20%,
    24%,
    55% {
        text-shadow: none;
    }
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

  .contactMeh1 h1{
    font-size: 25px !important;
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
    margin-bottom: 0px;
    margin-top: 20px;
  }

  .perfil {
    margin: 20px 5px;
  }
  .contactMeh1 {
    text-align: center;
  }
}
</style>
  
