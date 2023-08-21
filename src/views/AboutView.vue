<template>
  <scroll-container class="scrollAbout">
    <scroll-page>
      <div class="about" :style="dynamicStyles">
        <div class="title-page">
          <div
            class="bar-details"
            :style="{ backgroundColor: theme.secondaryColor }"
          ></div>
          <div
            class="circle-details"
            :style="{ backgroundColor: theme.secondaryColor }"
          ></div>
          <div class="text-one-title-page">
            {{ currentTranslations.textOneTitlePageAbout }}
          </div>
          <div class="text-two-title-page">
            {{ currentTranslations.textTwoTitlePageAbout }}
          </div>
        </div>

        <div class="about-me">
          <div class="title-description">
            {{ currentTranslations.titleDescriptionAbout }}
          </div>
          <div class="description-me">
            {{ currentTranslations.descriptionAbout }}
          </div>
          <CButton
            class="btn buttonPDF"
            component="a"
            color="primary"
            target="_blank"
            href="https://drive.google.com/file/d/11P8A8OJ27TEontPLfLaGL3PgUOHQLThZ/view?usp=sharing"
            role="button"
            :style="{
              backgroundColor: theme.primaryColor,
              color: theme.secondaryColor,
            }"
          >
            <i class="bi bi-eye"></i>
            {{ currentTranslations.pdfButtonTextAbout }}
          </CButton>
        </div>

        <div class="divfoto">
          <img
            class="foto"
            :style="{ borderImage: borderGradientRight }"
            src="@/assets/img/foto.jpeg"
          />
        </div>
      </div>

      <div class="skills" :style="dynamicStyles">
        <div class="experienceSkills">
          <div class="titleSkills">
            {{ currentTranslations.experienceSkill }}
          </div>
          <div class="divTechnologiesSkills">
            <div
              class="technologiesSkills"
              v-for="(technology, index) in technologies"
              :key="index"
            >
              <div class="iconTechnologiesSkills">
                <img
                  class="styleIconTech"
                  :src="technology.icon"
                  :alt="technology.name"
                />
              </div>
              <div class="technologySkills">
                <div class="nameTechnologySkills">
                  {{ technology.name }}
                </div>
                <div class="descriptionTechnologySkills">
                  {{ technology.description }}
                  {{ currentTranslations[technology.unit] }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="conhecimentoSkills">
          <div>
            <div class="titleSkills">
              {{ currentTranslations.knowledgeSkill }}
            </div>
            <div class="subTitleSkills">
              {{ currentTranslations.subTitleSkill }}
            </div>
          </div>
          <div class="languagesSkills">
            <div class="languageSkill">
              <div class="nameSkill">Java</div>
              <CProgress
                :value="progressValue"
                :max="100"
                :showPercentage="true"
                class="levelSkill"
              />
            </div>
            <div class="languageSkill">
              <div class="nameSkill">PHP</div>
              <CProgress
                :value="progressValue2"
                :max="100"
                :showPercentage="true"
                class="levelSkill2"
              />
            </div>
            <div class="languageSkill">
              <div class="nameSkill">Python</div>
              <CProgress
                :value="progressValue3"
                :max="100"
                :showPercentage="true"
                class="levelSkill3"
              />
            </div>
            <div class="languageSkill">
              <div class="nameSkill">C</div>
              <CProgress
                :value="progressValue4"
                :max="100"
                :showPercentage="true"
                class="levelSkill4"
              />
            </div>
            <div class="languageSkill">
              <div class="nameSkill">Node</div>
              <CProgress
                :value="progressValue5"
                :max="100"
                :showPercentage="true"
                class="levelSkill5"
              />
            </div>
            <div class="languageSkill">
              <div class="nameSkill">SQL</div>
              <CProgress
                :value="progressValue6"
                :max="100"
                :showPercentage="true"
                class="levelSkill6"
              />
            </div>
            <div class="languageSkill">
              <div class="nameSkill">NoSQL</div>
              <CProgress
                :value="progressValue7"
                :max="100"
                :showPercentage="true"
                class="levelSkill7"
              />
            </div>
          </div>
        </div>
        <div class="title-page-skill">
          <div
            class="bar-details"
            :style="{ backgroundColor: theme.primaryColor }"
          ></div>
          <div
            class="circle-details"
            :style="{ backgroundColor: theme.secondaryColor }"
          ></div>
          <div class="text-one-title-page">
            {{ currentTranslations.textOneTitlePageSkills }}
          </div>
          <div
            class="text-two-title-page"
            :style="{ color: theme.primaryColor }"
          >
            {{ currentTranslations.textTwoTitlePageSkills }}
          </div>
        </div>
      </div>

      <div class="education">
        <div class="title-page">
          <div
            class="bar-details"
            :style="{ backgroundColor: theme.secondaryColor }"
          ></div>
          <div
            class="circle-details"
            :style="{ backgroundColor: theme.secondaryColor }"
          ></div>
          <div class="text-one-title-page">
            {{ currentTranslations.textOneTitlePageEducation }}
          </div>
          <div class="text-two-title-page">
            {{ currentTranslations.textTwoTitlePageEducation }}
          </div>
        </div>
        <div class="graduation">
          <h5>
            {{ currentTranslations.graduationEducation }}
          </h5>
          <p>Instituto Federal Baiano</p>
          <p>2019 - 2024</p>
        </div>
        <div class="certification">
          <CCarousel controls dark>
            <CCarouselItem>
              <img
                class="imgCertification"
                src="../assets/img/certification/certificado-javascript.png"
                alt="certificado javascript"
              />
            </CCarouselItem>
            <CCarouselItem>
              <img
                class="imgCertification"
                src="../assets/img/certification/certificado-jest.png"
                alt="certificado jest"
              />
            </CCarouselItem>
            <CCarouselItem>
              <img
                class="imgCertification"
                src="../assets/img/certification/certificado-node.jpeg"
                alt="certificado node"
              />
            </CCarouselItem>
          </CCarousel>
        </div>
      </div>
      <Footer></Footer>
    </scroll-page>
  </scroll-container>
</template>

<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import { CButton, CProgress, CCarousel, CCarouselItem } from "@coreui/vue";
import { useStore } from "vuex";
import { computed, onMounted, ref, reactive } from "vue";
import translation from "@/translation";
import Footer from "../components/footer.vue";

import javascriptIcon from "@/assets/img/technologies/javascript.svg";
import quasarIcon from "@/assets/img/technologies/quasar.svg";
import reactIcon from "@/assets/img/technologies/react.svg";
import vueIcon from "@/assets/img/technologies/vue.svg";
import cssIcon from "@/assets/img/technologies/css3.svg";
import htmlIcon from "@/assets/img/technologies/html5.svg";

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

const gradientRight = computed(() => theme.value.gradientRight);
const borderGradientRight = computed(() => gradientRight.value);

const getTechnologyDescription = (technologyName) => {
  return currentTranslations.value[technologyName];
};

const currentTechnologyDescriptions = computed(() => {
  return technologies.map((technology) => ({
    ...technology,
    description: `${technology.description} ${getTechnologyDescription(
      technology.name.toLowerCase()
    )}`,
  }));
});

const baseIconPath = "../assets/img/technologies"; // Replace with actual absolute path

onMounted(() => {
  store.dispatch("initializeLanguage");
});

const progressValue = ref(80);
const progressValue2 = ref(65);
const progressValue3 = ref(60);
const progressValue4 = ref(50);
const progressValue5 = ref(50);
const progressValue6 = ref(90);
const progressValue7 = ref(80);

const technologies = reactive([
  {
    icon: javascriptIcon,
    name: "Javascript",
    description: "1",
    unit: "year",
  },
  {
    icon: quasarIcon,
    name: "Quasar",
    description: "8",
    unit: "months",
  },
  {
    icon: reactIcon,
    name: "React",
    description: "6",
    unit: "months",
  },
  {
    icon: vueIcon,
    name: "Vue",
    description: "8",
    unit: "months",
  },
  {
    icon: cssIcon,
    name: "CSS",
    description: "1",
    unit: "year",
  },
  {
    icon: htmlIcon,
    name: "HTML",
    description: "1",
    unit: "year",
  },
]);
</script>

<style>
.scrollAbout {
  background-image: url(../assets/img/background.jpg);
  background-size: 100% 100%;
}
/* SOBRE */
/* title */
.about,
.education {
  width: 100%;
  height: 400px;
  background-color: rgba(133, 133, 133, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px;
}

.bar-details {
  width: 4px;
  height: 200px;
  margin: 10px auto;
}

.text-one-title-page {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
}

.text-two-title-page {
  font-size: 20px;
  font-weight: 800;
  color: black;
}

/* sobre mim */
.about-me {
  width: 40%;
  height: 300px;
  margin: 0px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title-description {
  color: #000000;
  width: 260px;
  font-weight: 800;
  font-size: 17px;
}

.description-me {
  font-weight: 600;
  font-size: 16px;
  color: #000000;
}

.buttonPDF {
  margin-top: 10px;
  width: 130px;
  height: 40px;
  font-weight: 600;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  border: 1px solid var(--secondary-color);
  transition: transform 0.3s ease-in-out;
}

.buttonPDF:hover {
  border: 1px solid var(--secondary-color);
  transform: scale(1.1);
}

.buttonPDF .bi-eye {
  font-size: 18px;
}

/* foto */
.divfoto {
  min-height: 300px;
}

.foto {
  width: 250px;
  height: 300px;
  position: relative;
  border-width: 5px;
  border-style: solid !important;
}

/* SKILLS */
.skills {
  width: 100%;
  height: 420px;
  background-color: #212121;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.experienceSkills {
  width: 40%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.titleSkills {
  width: 100%;
  color: #ffffff;
  height: 50px;
}

.titleSkills {
  font-size: 20px;
  font-weight: 800;
}

.divTechnologiesSkills {
  width: 100%;
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.technologiesSkills {
  width: 250px;
  height: 50px;
  margin: 10px;
  display: flex;
  flex-direction: row;
}

.technologySkills {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.styleIconTech {
  width: 50px;
  height: 50px;
}

.nameTechnologySkills,
.descriptionTechnologySkills {
  color: #ffffff;
}

.nameTechnologySkills {
  font-weight: 800;
  font-size: 16px;
}
/* Conhecimento */
.conhecimentoSkills {
  background-color: rgba(0, 0, 0, 0.5);
  width: 35%;
  height: 100%;
  padding: 20px;
}

.title-page-skill {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: calc(20% - 40px);
  height: 100%;
}

.subTitleSkills {
  color: #ffffff;
  font-weight: 700;
  width: 100%;
  height: 80px;
}

.nameSkill {
  color: #ffffff;
}

.levelSkill .progress-bar,
.levelSkill2 .progress-bar,
.levelSkill3 .progress-bar,
.levelSkill4 .progress-bar,
.levelSkill5 .progress-bar,
.levelSkill6 .progress-bar,
.levelSkill7 .progress-bar {
  border-radius: 1px;
}

.levelSkill,
.levelSkill2,
.levelSkill3,
.levelSkill4,
.levelSkill5,
.levelSkill6,
.levelSkill7 {
  height: 5px;
  border-radius: 1px;
  --bs-progress-bg: #292828 !important;
}

.levelSkill .progress-bar {
  background-color: #fe0000;
}
.levelSkill2 .progress-bar {
  background-color: #fe5d00;
}
.levelSkill3 .progress-bar {
  background-color: #fea800;
}
.levelSkill4 .progress-bar {
  background-color: #adfe00;
}
.levelSkill5 .progress-bar {
  background-color: #00fe56;
}
.levelSkill6 .progress-bar {
  background-color: #00feef;
}
.levelSkill7 .progress-bar {
  background-color: #006efe;
}

/* EDUCATION */
/* graduation */
.graduation {
  margin: 0px 20px;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.graduation h5 {
  font-weight: 800;
  font-size: 17px;
}

.graduation p {
  font-weight: 600;
  font-size: 16px;
}

/* certification */
.certification .carousel-item.active,
.carousel-item-next,
.carousel-item-prev,
.certification .carousel-item {
  min-height: 100% !important;
}

.certification {
  width: 500px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 40px 0px;
}

.imgCertification {
  width: 100%;
  min-height: 100%;
}

@media (max-width: 599px) {
  .about,
  .education {
    padding: 20px 20px !important;
    flex-direction: column;
    height: auto;
  }
  .about-me {
    margin: 0px;
    order: 2;
    margin-top: 20px;
    text-align: center;
    align-items: center;
    height: 250px;
  }
  .divfoto{
    order: 1;
  }
  .title-description{
    font-size: 14px;
  }
  .description-me{
    font-size: 12px;
  }
  .subTitleSkills, .nameTechnologySkills{
    font-size: 12px;
  }
  .titleSkills{
    font-size: 14px;
  }
  .title-page-skill, .title-page{
    display: none;
  }
  .experienceSkills{
    padding: 20px 0px 0px 0px;
  }
  .about-me{
    width: 80%;
  }
  .experienceSkills, .conhecimentoSkills{
    width: 100%;
  }
  .skills{
    height: 530px;
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
  .conhecimentoSkills{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
  }
  .technologiesSkills {
    width: 150px;
  }
  .divTechnologiesSkills{
    flex-direction: row;
    justify-content: space-around;
  }
  .certification{
    width: 100%;
  }
}

@media (min-width: 600px) and (max-width: 800px) {
  .about,
  .education {
    padding: 0px 20px !important;
  }
  .about-me {
    margin: 0px;
  }
  .title-page-skill, .title-page{
    display: none;
  }
  .title-description{
    font-size: 16px;
  }
  .subTitleSkills, .nameTechnologySkills{
    font-size: 14px;
  }
  .titleSkills{
    font-size: 18px;
  }
  .description-me{
    font-size: 14px;
  }
  .about-me{
    width: 50%;
  }
  .experienceSkills, .conhecimentoSkills{
    width: 50%;
  }
  .skills{
    height: 450px;
  }
  .experienceSkills{
    padding: 20px 0px 0px 0px;
  }
  .conhecimentoSkills{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .technologiesSkills {
    width: 150px;
  }
}

@media (min-width: 801px) and (max-width: 1050px) {
  .about,
  .education {
    padding: 0px 20px !important;
  }
  .technologiesSkills {
    width: 150px;
  }
  .about-me {
    margin: 0px;
  }
  .skills{
    height: 430px;
    padding: 10px;
  }
  .conhecimentoSkills{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .certification{
    padding: 0px;
  }
}
</style>
