<template>
<div>
  <span id="user-message">
    {{ msg.content }}
  </span><br>
</div>
</template>
<script>
export default {
  props: ['msg'],
};
</script>
<style scoped>
#user-message{
    color: red;
    float: right;
};
</style>