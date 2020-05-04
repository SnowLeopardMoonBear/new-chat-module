<template>
  <div class="app">
    <message-window />
    <input-bar />
  </div>
</template>

<script>
import MessageWindow from "./components/chat/message/MessageWindow.vue";
import InputBar from "./components/chat/input/InputBar.vue";

export default {
  name: "App",
  components: {
    MessageWindow, InputBar
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
