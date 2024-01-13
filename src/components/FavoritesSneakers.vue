<template>
  <div class="favorites">
    <h1>Мои закладки</h1>
    <h2 v-if="this.$store.state.favoritesSneakers.length === 0">Закладки пусты</h2>
    <MyCards :cards="this.$store.state.favoritesSneakers"/>
  </div>
</template>

<script>
import MyCards from '@/components/MyCards.vue'

export default {
  components: { 
    MyCards,
  },
}
</script>

<style scoped>
.favorites {
    width: 100%;
    height: auto;
    padding: 40px 30px;
    border-radius: 0 0 15px 15px;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.379);
    background-color: white;
}
.favorites > h2 {
  margin-top: 30px;
}
</style>