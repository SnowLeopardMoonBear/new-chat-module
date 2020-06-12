<template>
  <div class="message-line">
    <img class="kiwecon" src="../../../../public/kiwe_favicon.png" />
    <div class="df-message">
      {{ msg.content }} <span class="time">{{ msg.time }}</span>
    </div>
    <div />
  </div>
</template>
<script>
export default {
  props: ["msg"],
};
</script>
<style>
.message-line {
  width:100%;
  display: flex;
  text-align:left;
  vertical-align: middle;
}
.df-message {
  position: relative;
  display: inline-block;
  color: rgb(85, 85, 85);
  text-align: left;
  max-width: 40%;
  word-break: keep-all;
  border-radius: 5px;
  background-color: rgb(255, 253, 112);
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 5px;
  padding: 3px;
}
.df-message:after {
  border-top: 10px solid rgb(255, 253, 112);
  border-left: 10px solid transparent;
  border-right: 0px solid transparent;
  border-bottom: 0px solid transparent;
  content: "";
  position: absolute;
  top: 5px;
  left: -10px;
}
.kiwecon {
  display: inline-block;
  width: 5%;
  height: 5%;
  margin: 1%;
}
.time{
  text-align:right;
}
</style>
