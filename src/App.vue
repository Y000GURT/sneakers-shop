<template >
  <div class="mypage">
    <MyHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'

export default {
  components: { 
    MyHeader, 
  },

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
body{
  background-color: rgb(195, 239, 255);
  padding: 80px 10% 0;
}
.mypage{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
