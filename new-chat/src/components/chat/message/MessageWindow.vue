<template>
<div>
  <div
    v-for="(message, index) in feed"
    :key="index">
    <user-message v-if="message.isDf" :msg="message"/>
    <df-message v-if="!message.isDF" :msg="message"/>
</div>
<div>

</template>
<script>
// import blah from 'blah'
import MyMessage from './MyMessage.vue';
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
