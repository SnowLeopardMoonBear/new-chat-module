<template>
<div>
  <div
    v-for="(message, index) in feed"
    :key="index">
    <user-message v-if="message.is_DF" :msg="message"/>
    <df-message v-if="!message.is_DF" :msg="message"/>
  </div>
</div>

</template>
<script>
// props 어떻게 전달하는지 다시 보기
import UserMessage from './UserMessage.vue';
import DfMessage from './DfMessage.vue';
export default {
  components: {UserMessage, DfMessage},
  methods: {},
  data: function () {
      return {
          feed: this.$store.messageList
      }
  },
};
</script>
<style scoped>
</style>
