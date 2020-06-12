import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newChat: {
      messageList: [
        {
          is_DF: true,
          content: "안녕하세요, 함께하는 키오스크 키위입니다. 어느 식당에서 주문하시겠어요?",
          time: "18시30분"
        },
      ],
    },
    style: {}
  },
  getters: {

  },
  mutations: {
    pushMessage: function (state, Message) {
      return state.newChat.messageList.push(Message);
    }
  },
});
