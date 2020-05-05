<template>
<div class="message-window">
  <div
    v-for="(message, index) in feed"
    :key="index">
    <user-message v-if="!message.is_DF" :msg="message"/>
    <df-message v-if="message.is_DF" :msg="message"/>
  </div>
</div>

</template>
<script>
import UserMessage from './UserMessage.vue';
import DfMessage from './DfMessage.vue';
export default {
  components: {UserMessage, DfMessage},
  methods: {},
  data: function () {
      return {
          feed: this.$store.state.text.messageList
      }
  },
};
</script>
<style>
.message-window{
    float: center;
    width: 50%;
    height: 500px;
    background-color: #f3efef;
    border-radius: 10px;
}
</style>
