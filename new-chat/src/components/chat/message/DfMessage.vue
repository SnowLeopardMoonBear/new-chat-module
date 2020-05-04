<template>
<div>
  <span id="df-message">
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
#df-message{
    color:blue;
    float:left;
    }
</style>
