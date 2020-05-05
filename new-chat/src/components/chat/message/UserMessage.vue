<template>
<div>
  <span id="user-message">
    {{ msg.content }}
  </span>
  <br>
</div>
</template>
<script>
export default {
  props: ['msg'],
};
</script>
<style scoped>
#user-message{
    color: rgb(163, 163, 163);
    float: right;
    background-color: rgb(143, 243, 129);
    border-radius: 5px;
    margin-top: 5px;
    margin-right: 5px;
};
</style>