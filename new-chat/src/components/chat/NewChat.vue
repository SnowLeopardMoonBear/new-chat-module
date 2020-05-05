<template>
  <div class='chat-module'>
    <message-window />
    <input-bar />
  </div>
</template>
<script>
import MessageWindow from "./message/MessageWindow.vue";
import InputBar from "./input/InputBar.vue";
export default {
  components: { MessageWindow, InputBar },
};
</script>
<style>
.chat-module{
    height: 50%;
}
</style>
