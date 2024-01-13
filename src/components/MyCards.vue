<template>
  <div class="cards">
    <MyItem 
      v-for="card in cards" 
      :key="card.id"
      :card="card"
    />
  </div>
</template>

<script>
import MyItem from '@/components/MyItem.vue'

export default {
  components: {
    MyItem,
  },
  props: {
    cards: Array,
  },
}
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(4, 280px);
  justify-content: space-between;
}

</style>