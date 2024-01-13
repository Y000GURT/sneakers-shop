<template>
  <div class="card">
    <MyLike :card='card' class="card__heart"/>
    <img :src="card.imageUrl" alt="" class="card__sneaker">
    <p>{{card.title}}</p>
    <div class="card__bottom">
      <div class="card__price">
        <p>Цена: <br> <strong>{{card.price}} руб.</strong></p>
      </div>

      <img v-if="!isDisabled" @click="addToBasket" src="/img/plus.svg" alt="" class="card__plus" >
      <CountSneaker v-else class="card_counter" :card='card' :inShop='true'/>
    </div>
  </div>
</template>

<script>
import MyLike from '@/components/UI/MyLike.vue'
import CountSneaker from '@/components/UI/CountSneaker.vue'

export default {
  props: {
    card: Object,
  },
  data() {
    return {
      urlLike: '/img/like-1.svg',
    }
  },
  components: {
    MyLike,
    CountSneaker,
  },
  methods: {
    addToBasket() {
            this.$store.commit('addBasket', this.card);
        },
  },
  computed: {
        getCount() {
            let founded = this.$store.state.basketSneakers.find(item => item.id === this.card.id)

            if(founded){
                return founded.quantity
            } else {
                return 0;
            }
        },
        isDisabled() {
            return this.getCount > 0;
        },
    }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  margin-top: 50px;
  padding: 30px;
  height: 380px;
  border: 1px solid rgba(220, 220, 220, 0.784);
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.379);
}
.card__sneaker {
  height: 200px;
}
.card__heart {
  align-self: flex-start;
}
.card__plus {
  height: 30px;
}
.card__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
}

</style>