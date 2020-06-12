<template>
<div class="user-message-line">
  <p class="user-message">
    {{ msg.content }} <span class="time">{{ msg.time}}</span> 
  </p>
</div>
</template>
<script>
export default {
  props: ["msg"],
};
</script>
<style>
.user-message {
  color: rgb(85, 85, 85);
  position:relative;
  display: inline-block;
  background-color: rgb(143, 243, 129);
  border-radius: 5px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 15px;
  max-width: 40%;
  word-break:keep-all;
  padding: 3px;
}
.user-message:after {
 border-top:10px solid rgb(143, 243, 129);
 border-left: 0px solid transparent;
 border-right: 10px solid transparent;
 border-bottom: 0px solid transparent;
 content:"";
 position:absolute;
 top:5px;
 right:-10px;
}
.user-message-line{
  width:100%;
  text-align: right;
}
.time{
  word-break:keep-all;
}
</style>
