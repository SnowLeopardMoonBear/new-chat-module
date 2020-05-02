<template>
  <div id="app">
    <user-message />
    <input-bar />
  </div>
</template>

<script>
import UserMessage from "./components/chat/message/UserMessage.vue";
import InputBar from "./components/chat/input/InputBar.vue";

export default {
  name: "App",
  components: {
    UserMessage, InputBar
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
