<template>
  <p id="user-message">
    <span class="time">{{ msg.time}}</span> {{ msg.content }} 
  </p>
</template>
<script>
export default {
  props: ["msg"],
};
</script>
<style scoped>
#user-message {
  color: rgb(163, 163, 163);
  float: right;
  background-color: rgb(143, 243, 129);
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
}
</style>
