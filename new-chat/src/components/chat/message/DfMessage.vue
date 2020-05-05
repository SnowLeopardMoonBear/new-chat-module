<template>
  <div id="df-message">
    {{ msg.content }}
  </div>
</template>
<script>
export default {
  props: ["msg"],
};
</script>
<style scoped>
#df-message {
  color: rgb(187, 187, 187);
  float: left;
  border-radius: 5px;
  background-color: rgb(255, 253, 112);
  margin-top: 5px;
  margin-left: 5px;
}
</style>
