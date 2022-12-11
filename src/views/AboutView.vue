<template>
  <div class="about">
    <div class="divfoto">
      <img class="foto" src="@/assets/img/foto.jpeg" />
      <p>Cleiton Do Carmo</p>
    </div>
    <div class="descricao">
      <p>
        Eu me chamo Cleiton Aparecido Do Carmo Silva, nasci em 28 de Junho de 1995, na cidade de São Bernardo Do Campo -
        SP. Entretanto, atualmente resido com minha família em Urandi, uma pequena cidade do interior da Bahia, com
        pouco mais de 16 mil habitantes. Sou graduado em Análise e Desenvolvimento de Sistemas pelo Instituto Federal
        Baiano Campus Guanambi - BA e atuo atualmente como Desenvolvedor de Software.
      </p>
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  justify-content: center;
  padding: 30px;
}

.divfoto {
  width: 300px;
  min-height: 300px;
  text-align: center;
  border-right: 1px solid green;
  padding: 40px 20px 0px 20px;
}

.foto {
  width: 250px;
  height: 300px;
  text-align: center;
}

.descricao {
  width: 300px;
  height: 320px;
  padding: 35px 20px;
  text-align: justify;
}

p {
  font-weight: 600;
  font-size: 16px;
  font-family: sans-serif;
}


@media (max-width: 900px) {
  .about {
    padding: 0px 10px;
    width: 100%;
  }

  .foto {
    max-width: 80%;
    max-height: 200px;
    text-align: center;
  }

  .divfoto {
    width: 50%;
    min-height: 200px;
    padding: 40px 0px;
  }

  .descricao {
    width: 50%;
    padding: 5px;
    margin: 0px;
    display: flex;
    align-items: center;
  }

  p {
    font-size: 12px;
    font-family: sans-serif;
  }
}
</style>
