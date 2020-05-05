<template>
  <div>
    <form @submit.prevent="sendMessage"
      class="message-input"
    >
      <input type="text" v-model="inputText" placeholder="메시지를 입력해주세요">
      <button>보내기</button>
    </form>
    <!-- style은 v-bind:style="(var name)"과 같이-->
  </div>
</template>

<script>
export default {
  methods: {
    alertMessage() {
      window.alert("test success!");
    },
    sendMessage() {
      if (this.inputText !== "") {
        this.$store.commit("pushMessage", {
          is_DF: false,
          content: this.inputText,
        });
        this.inputText="";
      }
    },

    // sendMessage() {
    //   if (inputText === '') {
    //     return;
    //   }
    //   this.$store.commit("sendMsg", { inputText });
    //   inputText = '';
    // },
  },
  data: () => {
    return {
      inputText: "",
    };
  },
};
</script>
