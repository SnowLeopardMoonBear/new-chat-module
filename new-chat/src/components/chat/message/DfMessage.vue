<template>
<div class="message-line">
  <p class="df-message">
    {{ msg.content }} <span class="time">{{ msg.time }}</span>
  </p>
  <div/>
</div>
</template>
<script>
export default {
  props: ["msg"],
};
</script>
<style>
.message-line {
    /* width:100%; */
}
.df-message {
  color: rgb(85, 85, 85);
  /* float: left; */
  text-align:left;
  width:50%;
  border-radius: 5px;
  background-color: rgb(255, 253, 112);
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 3px;
}
</style>
