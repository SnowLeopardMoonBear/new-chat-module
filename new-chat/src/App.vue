<template>
  <div class="app" id="app">
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
    MessageWindow,
    InputBar,
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
}
#app {
  /* my code */
  float: center;
  height: 500px;
  background-color: #f8f6f6;
  border-radius: 10px;
}
.time {
  font-size: 10px;
}
</style>
