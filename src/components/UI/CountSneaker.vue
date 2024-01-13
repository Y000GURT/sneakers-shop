<template>
    <div class="count">
        <button class="count__minus" :disabled='!isDisabled' @click="minusCount" :class="{'count__minus-disabled' : !isDisabled}">
            <img src="/img/minus.png" alt="" class="count__img">
        </button>

        <input readonly type="text" class="count__amount" maxlength="3" v-model="getCount">

        <button class="count__plus" @click="plusCount">
            <img src="/img/plus.png" alt="" class="count__img">
        </button>
    </div>
</template>

<script>
export default {
    props: {
        card: Object,
        inShop: Boolean,
    },
    methods: {
        minusCount() {
            this.$store.commit('removeBasket', this.card)
        },
        plusCount() {
            this.$store.commit('addBasket', this.card)
        },
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
            if (this.inShop) {
                return this.getCount > 0;
            } else {
                return this.getCount > 1;
            }
        },
    }
}
</script>

<style>
.count {
    display: flex;
    align-items: center;
    gap: 5px;
}
.count__minus, .count__plus {
    border: none;
    background: none;
}.count__minus-disabled {
    opacity: 0.5;
}
.count__img {
    height: 15px;
}
.count__amount {
    outline: none;
    border: none;
    width: 40px;
    height: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}
</style>