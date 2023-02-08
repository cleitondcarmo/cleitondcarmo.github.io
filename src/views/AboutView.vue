<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
import { CButton } from '@coreui/vue';
</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
  <div class="about">
    <div class="containerAbout">
      <div class="divfoto">
        <img class="foto" src="@/assets/img/foto.jpeg" />
      </div>
      <div class="descricao">
        <div>
          <h1 class="aboutStyle">Sobre mim</h1>
          <p>
            Eu me chamo Cleiton Aparecido Do Carmo Silva. Sou graduado em Análise e Desenvolvimento de Sistemas pelo
            Instituto Federal
            Baiano Campus Guanambi - BA e atualmente atuo como Desenvolvedor de Software.
          </p>
        </div>
        <div class="infoDiv">
          <div class="infoSubDiv">
            <p><span class="negrito">Nome:</span> Cleiton</p>
            <p><span class="negrito">Endereço:</span> Urandi - BA</p>
            <p><span class="negrito">Naturalidade:</span> São Bernardo - SP</p>
            <p><span class="negrito">Data de Nasc.:</span> 28/06/1995</p>
          </div>
          <div class="infoSubDiv">
            <p><span class="negrito">Experiência:</span> 8 meses</p>
            <p><span class="negrito">Primeira linguagem:</span> C</p>
            <p><span class="negrito">Linguagem favorita:</span> Javascript</p>
            <p><span class="negrito">Área mais desenvolvida:</span> Front-End</p>
          </div>
        </div>
        <CButton class="btn btn-danger buttonPDF" component="a" color="primary" target="_blank" href="https://drive.google.com/file/d/1rKRyXEmOa4c97nTRRBmaIWzF3-gvmp-t/view?usp=sharing" role="button">
          <i class="bi bi-eye"></i>
            Currículo
        </CButton>
      </div>
    </div>

  </div>
</template>

<style>
body {
  background-image: url(../assets/img/background6.jpeg);
  background-size: auto;
  background-repeat: no-repeat;
  margin: 0px;
  padding: 0px;
}

.aboutStyle{
    width: 100%;
    text-align: start;
    color: rgb(253, 253, 253);
    animation: flicker 1.5s infinite alternate;
    padding: 0px;
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

.about {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.containerAbout {
  width: 720px;
  height: 390px;
  display: flex;
  margin: 20px;
  transform: translate(-0%);
}

.divfoto {
  min-height: 300px;
  padding: 40px 20px 0px 0px;
}

.foto {
  width: 250px;
  height: 300px;
  text-align: center;
  padding: 5px;
  position: relative;
  background: linear-gradient(to right, rgb(0, 0, 0), rgb(0, 128, 0));
}

.descricao {
  width: 450px;
  height: 320px;
  padding: 35px 0px;
  text-align: justify;
  color: white;
}

.descricao h1 {
  font-size: 24px;
  color: green;
  font-family: FreeMono, monospace;
  font-weight: 700;

}

.descricao p {
  font-size: 12px;
  font-weight: 600;
  font-family: sans-serif;
}

.negrito {
  font-weight: 700;
  font-size: 14px;
}

.infoDiv {
  width: 100%;
  height: 150px;
  border: 1px solid green;
  border-radius: 10px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.infoSubDiv {
  margin: auto;
}

.infoSubDiv p {
  margin: 6px;
}

.download {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 600;
}

.download:hover {
  color: black;
}

.buttonPDF {
  margin-top: 10px;
}

@media (max-width: 800px) {
  body {
    height: 850px;
  }

  .containerAbout {
    display: grid;
  }

  .divfoto {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    padding: 0px;
  }

  .descricao {
    width: 450px;
    display: grid;
    text-align: center;
    margin: auto;
  }

  .infoSubDiv p {
    text-align: left;
  }
}

@media (max-width: 550px) {
  body {
    height: 900px;
  }

  .descricao {
    width: 300px;
    display: grid;
    text-align: center;
    margin: auto;
  }

  .infoDiv {
    height: 250px;
  }

  .infoSubDiv p {
    text-align: left;
  }

  .infoSubDiv {
    padding: 0px 10px;
    width: 100%;
  }
}
</style>
