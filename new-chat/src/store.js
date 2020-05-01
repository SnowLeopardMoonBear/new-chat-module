import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        text: {

        },
        style: {
            window__width: '100%',
            window__height: '50%',
            window__color: 'green',
            text__size:'100%',
        } // just an example
    },
    getters: {
        chatStyle: function(state) {
            return `width=${state.style.window__width};height=${window__height};`
        }
    },
    mutations: {

    }
})