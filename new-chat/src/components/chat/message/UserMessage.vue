<template>
<div class="message-line">
  <p class="user-message">
    <span class="time">{{ msg.time}}</span> {{ msg.content }} 
  </p>
</div>
</template>
<script>
export default {
  props: ["msg"],
};
</script>
<style scoped>
.user-message {
  color: rgb(85, 85, 85);
  float: right;
  background-color: rgb(143, 243, 129);
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 3px;
}
.message-line{
  width:100%;
}
</style>
