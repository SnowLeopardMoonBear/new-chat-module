<template>
  <div class="input-bar">
    <form @submit.prevent="sendMessage" class="message-input">
      <input class="input"
        type="text"
        v-model="inputText"
        placeholder="메시지를 입력해주세요"
      />
      <button class="send-button">보내기</button>
    </form>
    <!-- style은 v-bind:style="(var name)"과 같이-->
  </div>
</template>

<script>
export default {
  methods: {
    getCurrentTime() {
      var d = new Date();
      var hours = d.getHours();
      var minutes = d.getMinutes();
      return `${hours > 9 ? `${hours}` : `0${hours}`}시 
      ${minutes > 9 ? `${minutes}` : `0${minutes}`}분`;
    },
    alertMessage() {
      window.alert("test success!");
    },
    sendMessage() {
      if (this.inputText !== "") {
        this.$store.commit("pushMessage", {
          is_DF: false,
          content: this.inputText,
          time: this.getCurrentTime()
        });
        this.inputText = "";
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
<style>
.input-bar{margin:1%; float: center; background-color: rgb(68, 240, 68); border-radius:5px;}
.send-button{width:15%; float:center}
.input{width:80%; margin:1%; float:center; border-radius: 3px;}

</style>