<template>
    <img v-if="!isIncludeInFavorite(card)" :src="urlLike" @click="plusOrMinusToFavorite" alt="" class="card__heart">
    <img v-else :src="urlLike" @click="plusOrMinusToFavorite" alt="" class="card__heart">
</template>

<script>
export default {
    data() {
        return {
            urlLike: '/img/like-1.svg'
        }
    },
    props: {
        card: Object,
    },
    methods: {
        plusOrMinusToFavorite() {
            if(!this.isIncludeInFavorite(this.card)){
                this.$store.commit('addFavorites', this.card)
            }else {
                this.$store.commit('removeFavorites', this.card)
            }
        },
        isIncludeInFavorite(card) {
            for(let item of this.$store.state.favoritesSneakers){
                if(item.id === card.id){
                    this.urlLike = '/img/like-2.svg'
                    return true;
                }
            }
            this.urlLike = '/img/like-1.svg'
            return false;
        }
    }
}
</script>

<style>

</style>