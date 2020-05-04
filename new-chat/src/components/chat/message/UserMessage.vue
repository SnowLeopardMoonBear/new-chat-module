<template>
  <div id="user-message">
    {{ msg.content }}
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
    text-align: right;
};
</style>