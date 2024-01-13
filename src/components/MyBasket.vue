<template>
    <div class="basket">
        <h1>Моя корзина</h1>
        <div class="basket-content">
            <h2 v-if="baskets.length === 0" >Корзина пуста</h2>
            <div v-else class="basket__items-order">
                <div class="basket__items">
                    <BasketItem v-for="basket in baskets" :key="basket.id" :basket="basket" />
                </div>
                <div class="basket__order">
                    <div class="basket__order-content">
                        <h3 class="basket__order-count">Товары ({{$store.getters.getCount}})</h3>
                        <h3 class="basket__order-price">{{$store.getters.getPrice}} руб.</h3>
                    </div>
                    <button>Перейти к оформлению</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BasketItem from '@/components/BasketItem.vue'

export default {
    components: {
        BasketItem,
    },
    computed: {
        baskets() {
            return this.$store.state.basketSneakers
        },
    }
}
</script>

<style scoped>
.basket {
    width: 100%;
    height: auto;
    padding: 40px 30px;
    border-radius: 0 0 15px 15px;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.379);
    background-color: white;
}
.basket-content {
    display: flex;
    flex-direction: column;

    margin-top: 40px;
}
.basket-content > h2{
    margin-top: 20px;
}
.basket__items {
    display: flex;
    flex-direction: column;
    flex-basis: 60%;
} 
.basket__order {
    flex-basis: 10%;
    margin-top: 30px;
}
.basket__order-content {
    display: flex;
    justify-content: space-between;
}
.basket__items-order {
    display: flex;
    justify-content: space-between;
}
.basket__order > button {
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 15px;
    background-color: rgb(41, 182, 253);
    color: white;
    font-size: 17px;
    font-weight: bold;
    margin-top: 10px;
    transition: all 0.3s ease;
}
.basket__order > button:hover {
    background-color: rgb(9, 170, 250);
}
</style>