import { createStore } from 'vuex';

interface ThemeState {
  primaryColor: string;
  secondaryColor: string;
  thirdColor: string;
  gradientTop: string;
  gradientBottom: string;
  gradientLeft: string;
  gradientRight: string;
}

interface LanguageState {
  currentLanguage: string;
}

export default createStore({
  state: {
    theme: {
      // Definindo o tema Verde como padrão
      primaryColor: '#13BA19',
      secondaryColor: '#000000',
      thirdColor: '#ffffff',
      gradientTop: 'linear-gradient(to top, #13BA19, rgba(0, 0, 0, 0)) 1',
      gradientBottom: 'linear-gradient(to bottom, #13BA19, rgba(0, 0, 0, 0)) 1',
      gradientLeft: 'linear-gradient(to left, #13BA19, rgba(0, 0, 0, 0)) 1',
      gradientRight: 'linear-gradient(to right, #13BA19, #000000) 1',
    } as ThemeState,
    language: {
      currentLanguage: 'Portugues', // Idioma padrão
    } as LanguageState,
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    },
    setLanguage(state, language) {
      state.language.currentLanguage = language;
    },
  },
  actions: {
    setThemeByName({ commit }, themeName) {
      let theme: ThemeState = {
        primaryColor: '',
        secondaryColor: '',
        thirdColor: '',
        gradientTop: '',
        gradientBottom: '',
        gradientLeft: '',
        gradientRight: '',
      };

      if (themeName === 'Verde') {
        theme = {
          primaryColor: '#13BA19',
          secondaryColor: '#000000',
          thirdColor: '#ffffff',
          gradientTop: 'linear-gradient(to top, #13BA19, rgba(0, 0, 0, 0)) 1',
          gradientBottom: 'linear-gradient(to bottom, #13BA19, rgba(0, 0, 0, 0)) 1',
          gradientLeft: 'linear-gradient(to left, #13BA19, rgba(0, 0, 0, 0)) 1',
          gradientRight: 'linear-gradient(to right, #13BA19, #000000) 1',
        };
      } else if (themeName === 'Laranja') {
        theme = {
          primaryColor: '#ffae00',
          secondaryColor: '#000000',
          thirdColor: '#818181',
          gradientTop: 'linear-gradient(to top, #ffae00, rgba(0, 0, 0, 0)) 1',
          gradientBottom: 'linear-gradient(to bottom, #ffae00, rgba(0, 0, 0, 0)) 1',
          gradientLeft: 'linear-gradient(to left, #ffae00, rgba(0, 0, 0, 0)) 1',
          gradientRight: 'linear-gradient(to right, #ffae00, #000000) 1',
        };
      } else if (themeName === 'Roxo') {
        theme = {
          primaryColor: '#9370DB',
          secondaryColor: '#000000',
          thirdColor: '#ffffff',
          gradientTop: 'linear-gradient(to top, #9370DB, rgba(0, 0, 0, 0)) 1',
          gradientBottom: 'linear-gradient(to bottom, #9370DB, rgba(0, 0, 0, 0)) 1',
          gradientLeft: 'linear-gradient(to left, #9370DB, rgba(0, 0, 0, 0)) 1',
          gradientRight: 'linear-gradient(to right, #9370DB, #000000) 1',
        };
      }

      commit('setTheme', theme);
      localStorage.setItem('selectedTheme', JSON.stringify(theme));
    },
    initializeTheme({ commit }) {
      const savedTheme = localStorage.getItem('selectedTheme');
      if (savedTheme) {
        commit('setTheme', JSON.parse(savedTheme));
      }
    },
    setLanguage({ commit }, language) {
      commit('setLanguage', language);
      localStorage.setItem('selectedLanguage', language);
    },
    initializeLanguage({ commit }) {
      const savedLanguage = localStorage.getItem('selectedLanguage');
      if (savedLanguage) {
        commit('setLanguage', savedLanguage);
      }
    },
  },
  modules: {},
});
