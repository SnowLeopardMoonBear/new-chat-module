import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    text: {
      messageList: [
        {
          is_DF: true,
          content: "안녕하세요, 함께하는 키오스크 키위입니다.",
        },
        {
          is_DF: false,
          content:"안녕하세요, 저는 유저 메시지 샘플입니다."
        },
        {
          is_DF: false,
          content:"안녕하세요, 저는 어나더 유저 메시지 샘플입니다."
        }
      ],
    },
    style: {}
  },
  getters: {

  },
  mutations: {},
});
