<template>
  <div>
    <input class="message-input" placeholder="메시지를 입력해주세요"/>
    <button @click="alertMessage"/>
    <!-- style은 v-bind:style="(var name)"과 같이-->
  </div>
</template>

<script>
export default {
  methods: {
    alertMessage() {
      window.alert('test success!');
    },
    sendMessage() {
      if (inputText === '') {
        return;
      }
      this.$store.commit("sendMsg", { inputText });
      inputText = '';
    },
  },
  data: () => {
    return {
      inputText: '',
    };
  },
};
</script>
