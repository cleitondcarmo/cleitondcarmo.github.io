<template>
  <scroll-container class="scrollProject">
    <scroll-page>
      <div class="projectView" :style="dynamicStyles">
        <div class="divPrincipalProject">
          <CCarousel controls>
            <CCarouselItem>
              <div class="principalProject">
                <div class="divTitulo">
                  <div style="width: 50%">
                    <p>Meny</p>
                  </div>
                  <div style="width: 50%">
                    <a
                      class="btnVerPrincipais"
                      target="_blank"
                      href="https://github.com/cleitondcarmo/Meny"
                      >Github</a
                    >
                  </div>
                </div>
                <div class="divAboutProject">
                  <div class="imgProject">
                    <div class="divImgMeny" style="margin: 20px">
                      <img
                        class="imgPrincipalProject"
                        src="../assets/img/project-meny-img_1.jpeg"
                        alt="Imagem 1 projeto Meny"
                      />
                    </div>
                    <div class="divImgMeny" style="margin: 20px">
                      <img
                        class="imgPrincipalProject"
                        src="../assets/img/project-meny-img_2.jpeg"
                        alt="Imagem 2 projeto Meny"
                      />
                    </div>
                  </div>
                  <div class="descProject">
                    <div class="descProject2">
                      <p><span class="atributos">{{currentTranslations.name}}: </span>Meny</p>
                      <p><span class="atributos">{{currentTranslations.created}}: </span>12/2022</p>
                      <p><span class="atributos">{{currentTranslations.language}}: </span>Java</p>
                      <p><span class="atributos">{{currentTranslations.libraries}}: </span>ZXing</p>
                      <p>
                        <span class="atributos">{{currentTranslations.storage}}: </span>Firebase,
                        SQLite
                      </p>
                      <p><span class="atributos">IDE: </span>Android Studio</p>
                      <p><span class="atributos">{{currentTranslations.platform}}: </span>Android</p>
                    </div>
                    <div class="descProject2">
                      <p>
                        {{currentTranslations.meny}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CCarouselItem>
            <CCarouselItem>
              <div class="principalProject">
                <div class="divTitulo">
                  <div style="width: 50%">
                    <p>CPC</p>
                  </div>
                  <div style="width: 50%">
                    <a
                      class="btnVerPrincipais"
                      target="_blank"
                      href="https://github.com/cleitondcarmo/Calculadora-de-precos-para-churros"
                      >Github</a
                    >
                  </div>
                </div>
                <div class="divAboutProject">
                  <div class="imgProject">
                    <div class="divImgPrincipais">
                      <img
                        style="width: 100%; height: 280px"
                        src="../assets/img/project-cpc-img_1.jpeg"
                        alt="Imagem 1 projeto Meny"
                      />
                    </div>
                  </div>
                  <div class="descProject">
                    <div class="descProject2">
                      <p><span class="atributos">{{currentTranslations.name}}: </span>CPC</p>
                      <p><span class="atributos">{{currentTranslations.created}}: </span>12/2021</p>
                      <p><span class="atributos">{{currentTranslations.language}}: </span>Java</p>
                      <p><span class="atributos">{{currentTranslations.libraries}}: </span>{{currentTranslations.none}}</p>
                      <p><span class="atributos">{{currentTranslations.storage}}: </span>Local</p>
                      <p><span class="atributos">IDE: </span>Eclipse</p>
                      <p><span class="atributos">{{currentTranslations.platform}}: </span>PC</p>
                    </div>
                    <div class="descProject2">
                      <p>
                        {{currentTranslations.cpc}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CCarouselItem>
            <CCarouselItem>
              <div class="principalProject">
                <div class="divTitulo">
                  <div style="width: 50%">
                    <p>Web2-2021.1</p>
                  </div>
                  <div style="width: 50%">
                    <a
                      class="btnVerPrincipais"
                      target="_blank"
                      href="https://github.com/cleitondcarmo/web2-2021.1"
                      >Github</a
                    >
                  </div>
                </div>
                <div class="divAboutProject">
                  <div class="imgProject">
                    <div class="divImgPrincipais">
                      <img
                        style="width: 100%; height: 280px"
                        src="../assets/img/project-web2-img_1.jpeg"
                        alt="Imagem 1 projeto Web 2"
                      />
                    </div>
                  </div>
                  <div class="descProject">
                    <div class="descProject2">
                      <p><span class="atributos">{{currentTranslations.name}}: </span>Web2-2021.1</p>
                      <p><span class="atributos">{{currentTranslations.created}}: </span>12/2021</p>
                      <p>
                        <span class="atributos">{{currentTranslations.language}}: </span>PHP (Laravel),
                        HTML5, CSS3
                      </p>
                      <p><span class="atributos">{{currentTranslations.libraries}}: </span>{{currentTranslations.none}}</p>
                      <p>
                        <span class="atributos">{{currentTranslations.storage}}: </span>Postgresql
                      </p>
                      <p>
                        <span class="atributos">IDE: </span>Visual Studio Code
                      </p>
                      <p><span class="atributos">{{currentTranslations.platform}}: </span>PC/Mobile</p>
                    </div>
                    <div class="descProject2">
                      <p>
                        {{currentTranslations.web2}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CCarouselItem>
            <CCarouselItem>
              <div class="principalProject">
                <div class="divTitulo">
                  <div style="width: 50%">
                    <p>TCC</p>
                  </div>
                  <div style="width: 50%">
                    <a
                      class="btnVerPrincipais"
                      target="_blank"
                      href="https://doi.org/10.29327/4164411"
                      >{{currentTranslations.publication}}</a
                    >
                  </div>
                </div>
                <div class="divAboutProject">
                  <div class="imgProject">
                    <div class="divImgPrincipais">
                      <img
                        style="width: 100% !important; height: 280px"
                        src="../assets/img/project-tcc-img_1.png"
                        alt="Imagem 1 projeto Web 2"
                      />
                    </div>
                  </div>
                  <div class="descProject">
                    <div class="descProject2">
                      <p>
                        <span class="atributos">{{currentTranslations.name}}: </span>{{currentTranslations.tccName}}
                      </p>
                      <p><span class="atributos">{{currentTranslations.created}}: </span>12/2021</p>
                      <p>
                        <span class="atributos">{{currentTranslations.type}}: </span>{{currentTranslations.tccType}}
                      </p>
                      <p>
                        <span class="atributos">{{currentTranslations.committee}}: </span>MSc. João P. B.
                        Glória, Dr. Naidson C. S. Ferreira, Dra. Bárbara K. A. B.
                        Lessa
                      </p>
                      <p>
                        <span class="atributos">Doi: </span>
                        <a href="https://doi.org/10.29327/4164411">
                          <img
                            src="https://publicacoes.even3.com.br/badge/doi?c=10.29327/4164411"
                          />
                        </a>
                      </p>
                    </div>
                    <div class="descProject2">
                      <p>
                        {{currentTranslations.tcc}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CCarouselItem>
          </CCarousel>
        </div>
        <div class="todosProjetos">
          <div class="divProjeto" v-for="project of projects" :key="project.id">
            <div class="infoProject">
              <p><span class="atributos">{{currentTranslations.name}}: </span>{{ project.name }}</p>
              <p>
                <span class="atributos">{{currentTranslations.created}}: </span
                >{{ formataStringData(project.created_at) }}
              </p>
              <p>
                <span class="atributos">{{currentTranslations.language}}: </span>{{ project.language }}
              </p>
            </div>
            <div class="buttonProject">
              <a class="btnVer" target="_blank" :href="project.html_url">Github</a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </scroll-page>
  </scroll-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Project from "../services/projects";
import { CCarousel, CCarouselItem } from "@coreui/vue";
import { useStore } from "vuex";
import { computed } from "vue";
import translation from "@/translation";
import Footer from "../components/footer.vue";

const dynamicStyles = computed(() => ({
  "--primary-color": theme.value.primaryColor,
  "--secondary-color": theme.value.secondaryColor,
  "--third-color": theme.value.thirdColor,
}));

const store = useStore();
const theme = computed(() => store.state.theme);

const currentLanguage = computed(() => store.state.language.currentLanguage);

const currentTranslations = computed(
  () => translation[currentLanguage.value] || {}
);

interface ProjectType {
  id: string;
  name: string;
  imagem: string;
  created_at: string;
  language: string;
  html_url: string;
}

const projects = ref<ProjectType[]>([]);

const formataStringData = (data: string) => {
  const [ano, mes] = data.split("-");
  return `${mes}/${ano}`;
};

const listar = async () => {
  try {
    const resposta = await Project.listar();
    projects.value = resposta.data.items;
  } catch (e) {}
};

onMounted(listar);
</script>

<style>
body {
  max-width: 100% !important;
  min-width: 100% !important;
}

.scrollProject {
  background-image: url(../assets/img/background.jpg);
  background-size: 100% 100%;
}

.projectView{
  background-color: rgba(0, 0, 0, 0.5) !important;
  width: 100%;
  min-height: 100%;
  padding: 0px 50px;
}

.divTitulo {
  color: var(--primary-color);
  font-size: 20px;
  margin-left: 10px;
  font-weight: 600;
  border-bottom: white solid 1px;
  display: flex;
}

.btnVerPrincipais {
  float: right;
  width: 115px;
  height: 30px;
  border: 1px solid var(--primary-color);
  padding-top: 2px;
  background-color: transparent;
  border-radius: 5px;
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 500;
  font-size: 16px;
  text-align: center;
}

.divPrincipalProject {
  width: 100%;
  max-width: 1200px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
  margin: 0px auto;
}

.divPrincipalProject .carousel {
  width: 100%;
  margin: 20px;
}

.divPrincipalProject .carousel-control-prev{
  height: 50px;
  margin: auto 0px;
  left: -120px;
}
.divPrincipalProject .carousel-control-next{
  height: 50px;
  margin: auto 0px;
  right: -120px;
}

.divImgPrincipais {
  margin: 10px;
  min-width: 100%;
  max-width: 520px;
}

.principalProject {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  display: grid;
}

.divAboutProject {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.imgProject {
  display: flex;
  width: 50%;
  height: 300px;
}

.imgPrincipalProject {
  width: 235px;
  height: 100%;
}

.descProject {
  display: flex;
  flex-wrap: wrap;
  width: auto;
  height: 300px;
  justify-content: space-around;
}

.descProject2 {
  width: 250px;
  height: 300px;
  margin: 10px 0px 0px 10px;
  padding: 0px 0px 0px 10px;
}

.descProject2 p {
  margin: auto;
  color: white;
  text-align: justify;
}

::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  overflow: hidden;
}

.container {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

scroll-container {
  width: 100%;
  overflow-y: scroll;
  display: block;
  height: 100%;
  scroll-behavior: smooth;
}

scroll-page {
  display: block;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.todosProjetos {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: auto;
}

.divProjeto {
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  width: 250px;
  height: 170px;
  margin: 0px 10px 20px 10px;
  padding: 10px;
  display: grid;
  grid-template-rows: 90px 50px;
  background-color: rgba(133, 133, 133, 0.5);
}

.divProjeto p {
  margin: 0px;
  color: rgb(255, 255, 255);
}

.atributos {
  font-weight: 700;
  color: rgb(5, 5, 5);
}

.buttonProject {
  width: calc(100% - 10px);
  margin: 20px 5px 0px 5px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btnVer {
  margin: auto;
  width: calc(100% - 10px);
  height: 30px;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  border-radius: 5px;
  text-decoration: none;
  color: var(--secondary-color);
  font-weight: 600;
}

.btnVer:hover,
.btnVerPrincipais:hover {
  margin: auto;
  text-decoration: none;
  color: var(--primary-color);
  box-shadow: 2px solid var(--primary-color);
  background-color: black;
}

@media (max-width: 300px) {

  .descProject2 {
    font-size: 10px !important;
  }
}

@media (max-width: 399px) {
 
  .displayPage {
    display: none !important;
  }

  .divPrincipalProject {
    margin: auto;
    width: calc(100% - 4px);
  }

  .principalProject {
    width: 100%;
    margin: 10px 0px;
    padding: 4px;
  }

  .descProject {
    width: 100% !important;
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .descProject2 {
    font-size: 12px;
    margin: 0px;
    padding: 4px;
    width: 100%;
  }

  .divTitulo,
  .divAboutProject {
    max-width: calc(100% - 8px) !important;
    min-width: calc(100% - 8px) !important;
    margin: 0px 4px;
  }

  .imgProject {
    width: 100%;
    height: 200px;
    margin: auto;
    justify-content: center;
  }

  .divImgPrincipais img,
  .divImgMeny img {
    height: 100% !important;
  }

  .divImgMeny {
    margin: 4px !important;
  }

  .imgPrincipalProject {
    min-width: 100%;
    max-width: 100%;
  }

  .todosProjetos {
    margin: 4px;
    width: calc(100% - 8px);
    padding: 0px 0px 20px 0px;
    justify-content: center;
    font-size: 12px;
  }

  .divProjeto {
    width: 150px;
  }

}

@media (min-width: 400px) and (max-width: 619px) {
  .displayPage {
    display: none !important;
  }

  .divPrincipalProject {
    margin: auto;
    width: calc(100% - 4px);
  }

  .principalProject {
    width: 100%;
    margin: 10px 0px;
    padding: 4px;
  }

  .descProject {
    width: 100% !important;
    max-width: 500px;
    display: grid;
    margin: auto;
    grid-template-columns: 50% 50%;
  }

  .descProject2 {
    font-size: 14px;
    margin: 0px;
    padding: 4px;
    width: 100%;
  }

  .divTitulo,
  .divAboutProject {
    max-width: calc(100% - 8px) !important;
    min-width: calc(100% - 8px) !important;
    margin: 0px 4px;
  }

  .imgProject {
    width: 100%;
    margin: auto;
    justify-content: center;
  }

  .divImgMeny {
    margin: 4px !important;
  }

  .imgPrincipalProject {
    min-width: 100%;
    max-width: 100%;
  }

  .todosProjetos {
    margin: 4px;
    width: calc(100% - 8px);
    padding: 0px;
    justify-content: center;
    font-size: 14px;
  }

  .divProjeto {
    width: 170px;
  }
}

@media (min-width: 620px) and (max-width: 1125px) {
  .displayPage {
    display: none !important;
  }

  .divPrincipalProject {
    margin: auto;
    width: calc(100% - 10px);
  }

  .principalProject {
    width: 100%;
    margin: 10px 0px;
  }

  .divAboutProject {
    width: 100%;
  }

  .descProject {
    margin: auto;
  }

  .descProject2 {
    margin: 5px;
  }

  .imgProject {
    width: 100%;
    max-width: 520px;
    margin: auto;
    justify-content: center;
  }

  .divImgPrincipais {
    margin: auto;
  }

  .todosProjetos {
    margin: 5px;
    width: calc(100% - 10px);
    padding: 0px;
    justify-content: center;
  }
}

@media (min-width: 1126px) and (max-width: 1269px) {
  .displayPage {
    display: none !important;
  }

  .divPrincipalProject {
    margin: auto;
    width: calc(100% - 10px);
  }

  .principalProject {
    width: 100%;
    margin: 10px 0px;
  }

  .divAboutProject {
    width: 100%;
  }

  .descProject {
    margin: auto;
  }

  .descProject2 {
    margin: 5px;
  }

  .imgProject {
    width: 100%;
    max-width: 520px;
    margin: auto;
    justify-content: center;
  }

  .divImgPrincipais {
    margin: auto;
  }
}

@media (min-width: 1269px) {
  .divImgMeny {
    margin: 18px !important;
  }

  .divImgPrincipais img {
    max-width: 510px;
  }
}
</style>
