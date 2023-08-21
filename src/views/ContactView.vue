<template>
  <div class="background">
    <div class="divBody">
      <div class="contactDiv">
        <div class="contactMe">
          <h1 class="contactMeh1">{{currentTranslations.contact}}</h1>
        </div>
        <div class="contact">
          <div class="perfil">
            <CButton
              class="btnHref"
              component="a"
              href="https://www.linkedin.com/in/cleitondcarmo/"
              role="button"
              target="_blank"
            >
              <img class="imgPerfil" src="@/assets/img/media_pack_gray/iconLinkedinCinza.svg" />
            </CButton>
          </div>
          <div class="perfil">
            <CButton
              class="btnHref"
              component="a"
              href="https://www.instagram.com/cleitondcarmo/"
              role="button"
              target="_blank"
            >
              <img class="imgPerfil" src="@/assets/img/media_pack_gray/iconInstagramCinza.svg" />
            </CButton>
          </div>
          <div class="perfil">
            <CButton
              class="btnHref"
              component="a"
              href="https://www.facebook.com/cleitondcarmosilva/"
              role="button"
              target="_blank"
            >
              <img class="imgPerfil" src="@/assets/img/media_pack_gray/iconFacebookCinza.svg" />
            </CButton>
          </div>
          <div class="perfil">
            <CButton
              class="btnHref"
              component="a"
              href="https://github.com/cleitondcarmo"
              role="button"
              target="_blank"
            >
              <img class="imgPerfil" src="@/assets/img/media_pack_gray/iconGithubCinza.svg" />
            </CButton>
          </div>
          <div class="perfil">
            <CButton
              class="btnHref"
              component="a"
              href="https://contate.me/cleitondcarmo"
              role="button"
              target="_blank"
            >
              <img class="imgPerfil" src="@/assets/img/media_pack_gray/iconWhatsappCinza.svg" />
            </CButton>
          </div>
        </div>
        <div class="contactTextDiv">
          <div class="contactText">
            <p><i class="bi bi-telephone"></i> (77) 992051960</p>
          </div>
          <div class="contactText">
            <p><i class="bi bi-envelope-at"></i> cleitondcarmo@hotmail.com</p>
          </div>
        </div>
        <div class="contact-form">
          <form @submit.prevent="submitForm">
            <input
              class="inputEmail"
              placeholder="E-mail"
              v-model="formData.email"
              type="email"
              name="email"
            />
            <textarea
              class="inputMenssage"
              placeholder="Message"
              v-model="formData.message"
              name="message"
            ></textarea>
            <CButton class="buttonSubmit" type="submit">{{currentTranslations.send}}</CButton>
          </form>
          <div v-if="showAlert" class="alert alert-success">
            {{ alertMessage }}
          </div>
        </div>
      </div>
      <div class="mapsDiv">
        <iframe
          class="dark-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.435672947905!2d-49.38326822212397!3d-20.814106416871848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad5740808e25%3A0x3bed5b8a6429f849!2sPrefeitura%20Municipal%20de%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto!5e0!3m2!1spt-PT!2sbr!4v1692577798298!5m2!1spt-PT!2sbr"
          width="100%"
          height="100%"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import "bootstrap/dist/css/bootstrap.css";
import { CButton } from "@coreui/vue";
import axios from "axios";
import { ref } from "vue";
import { useStore } from "vuex";
import { computed} from "vue";
import translation from "@/translation";
import Footer from "../components/footer.vue";

const store = useStore();
const theme = computed(() => store.state.theme);

const currentLanguage = computed(() => store.state.language.currentLanguage);

const currentTranslations = computed(
  () => translation[currentLanguage.value] || {}
);

const formData = ref({
  email: "",
  message: "",
});

const showAlert = ref(false); // Estado do alerta
const alertMessage = ref(""); // Mensagem do alerta

const submitForm = async () => {
  try {
    const response = await axios.post(
      "https://formspree.io/f/xleybgwg",
      formData.value
    );

    // Exibir o alerta de sucesso
    showAlert.value = true;
    if(currentLanguage.value === "English"){
      alertMessage.value = "Email successfully sent!";
    }
    else{
      alertMessage.value = "E-mail enviado com sucesso!";
    }
  } catch (error) {
    console.error("Erro ao enviar o e-mail:", error);
  }
};
</script>

<style>
body, .background {
  width: 100%;
  height: 100%;
}

.background{
  background-image: url(../assets/img/background.jpg);
  background-size: 100% 100%;
}

.divBody {
  width: 100%;
  min-height: calc(100vh - 20px);
  display: flex;
  flex-direction: row;
}

.contactDiv {
  color: white;
  width: 50%;
  min-height: 100%;
  background-color: #212121;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contactMe {
  margin: 40px 0px 20px 0px;
}

.contact {
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
}

.imgPerfil {
  max-width: 25px;
  max-height: 25px;
  min-width: 25px;
  min-height: 25px;
  margin: auto;
}

.btnHref {
  max-width: 25px;
  max-height: 25px;
  min-width: 25px;
  min-height: 25px;
  padding: 0px;
  display: flex;
  justify-content: center;
}

.perfil a {
  padding: 0px;
  margin: 0px;
  border: none;
}

.contactTextDiv {
  width: 80%;
}


.contact-form {
  width: 80%;
  height: 220px;
}

.inputEmail,
.inputMenssage {
  width: 100%;
  height: 35px;
  background-color: rgba(133, 133, 133);
  border: 0px;
  box-shadow: none;
  color: white !important;
  padding-left: 5px;
  border-radius: 1px;
}

.inputEmail::placeholder,
.inputMenssage::placeholder {
  color: rgb(219, 218, 218);
}

.inputMenssage {
  margin-top: 20px;
  height: 100px;
  max-height: 100px;
}

.buttonSubmit {
  margin-top: 10px;
  background-color: white;
  border-radius: 1px;
}

.alert {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #dff0d8;
  color: #3c763d;
  margin: 10px 0px;
  height: 30px;
  font-size: 14px;
  padding: 4px;
  width: 200px;
}

.mapsDiv {
  width: 50%;
  min-height: 100%;
}

.dark-map {
  width: 100%;
  min-height: 100%;
  filter: brightness(80%);
}

@media (max-width: 800px) {

}

@media (max-width: 570px) {
.divBody{
  flex-direction: column;
}
.mapsDiv{
  order: 1;
  width: 100%;
  height: 200px;
}
.contactDiv{
  width: 100%;
  order: 2;
  height: calc(100vh - 200px);
}
.contact{
  margin-bottom: 50px;
}
}
</style>
