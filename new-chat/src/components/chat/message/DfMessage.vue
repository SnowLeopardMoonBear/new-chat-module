<template>
  <p id="df-message">
    {{ msg.content }} <span class="time">{{ msg.time }}</span>
  </p>
</template>
<script>
export default {
  props: ["msg"],
};
</script>
<style scoped>
#df-message {
  color: rgb(85, 85, 85);
  float: left;
  border-radius: 5px;
  background-color: rgb(255, 253, 112);
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 3px;
}
</style>
