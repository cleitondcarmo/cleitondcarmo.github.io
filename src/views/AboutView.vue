<script setup lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
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
          <h1>Sobre mim</h1>
          <p>
            <!--           Eu me chamo Cleiton Aparecido Do Carmo Silva, nasci em 28 de Junho de 1995, na cidade de São Bernardo Do Campo -
            SP. Entretanto, atualmente resido com minha família em Urandi, uma pequena cidade do interior da Bahia, com
            pouco mais de 16 mil habitantes. Sou graduado em Análise e Desenvolvimento de Sistemas pelo Instituto Federal
            Baiano Campus Guanambi - BA e atuo atualmente como Desenvolvedor de Software. -->
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
        <button type="button" class="btn btn-danger buttonPDF">
          <a class="download" href="cleitondcarmo.github.io/public/curriculo.pdf" download="Currículo-Cleiton-Do-Carmo.pdf"><i class="bi bi-download"></i>
            Baixar currículo</a>
        </button>
        <button type="button" class="btn btn-danger buttonPDF" download v-on:click="download()">
          <i class="bi bi-download"></i> Baixar currículo 2
        </button>
        <button type="button" class="btn btn-danger buttonPDF" download v-on:click="clickedDownload()">
          <i class="bi bi-download"></i> Baixar currículo 3
        </button>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue';

export default defineComponent({
  el: "#app",
  methods: {
        clickedDownload(){
        const link = document.createElement('a');
      link.href = 'cleitondcarmo.github.io/public/curriculo.pdf';
      link.setAttribute('download', 'file.pdf'); //or any other extension
      document.body.appendChild(link);
      link.click();
    }
  }
})

function download() {
  axios({
    url: 'cleitondcarmo.github.io/public/test.pdf',
    method: 'GET',
    responseType: 'arraybuffer'
  })
    .then(response => {
      const url = window.URL
        .createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.download = 'file.pdf';
      link.href = url;
      link.click();
    })
}

</script>

<style>
body {
  background-image: url(../assets/img/background4.jpg);
  background-size: auto;
  background-repeat: no-repeat;
  margin: 0px;
  padding: 0px;
}

.about {
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.containerAbout {
  width: 800px;
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
  color: black;
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
