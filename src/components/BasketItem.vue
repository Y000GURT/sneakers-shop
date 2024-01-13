<template>
  <div class="basket__item">
      <img :src="basket.imageUrl" alt="" class="basket__img">
      <div class="basket__title-delete">
        <h3 class="basket__title">{{basket.title}}</h3>
        <img class="basket__delete" src="/img/close.svg" alt="" @click="removeBasket">
      </div>

      <div class="basket__price-count">
        <h3 class="basket__price">{{basket.price}} руб.</h3>
        <CountSneaker class="basket__count" :card='basket' :inShop="false"/>
      </div>
  </div>
</template>

<script>
import CountSneaker from '@/components/UI/CountSneaker.vue'

export default {
  props: {
    basket: Object,
  },
  components: {
    CountSneaker,
  },
  methods: {
    removeBasket() {
      this.$store.commit('removeBasket2', this.basket)
    }
  }
}
</script>

<style scoped>
.basket__item {
  border-bottom: 1px solid rgb(177, 177, 177);
  padding-bottom: 20px;
  margin-top: 30px;

  display: flex;
  justify-content: space-between;
}
.basket__img {
  width: 240px;
  height: 200px;
}
.basket__title-delete, .basket__price-count{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.basket__title-delete {
  align-items: start;

  width: 50%;
}
.basket__title {
  align-self: flex-start;
  flex-basis: 10%;
}
.basket__delete {
  height: 30px;
}
.basket__price, .basket__count {
  align-self: flex-end;
}
</style>