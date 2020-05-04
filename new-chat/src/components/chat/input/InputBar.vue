<script>
export default {
  methods: {
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
<template>
  <div>
    <!-- style은 v-bind:style="(var name)"과 같이-->
  </div>
</template>
