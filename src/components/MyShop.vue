<template>
  <div class="shop">
    <div class="shop__info">
        <h1>Все кроссовки</h1>
        <div class="shop__search">
            <select v-model="selectedSort" class="shop__select" name="" id="">
                <option default value="name">По названию</option>
                <option value="cheep">По цене (дешевые)</option>
                <option value="expensive">По цене (дорогие)</option>
            </select>
            <input v-model="searchQuery" class="shop__input" type="text" placeholder="Поиск...">
        </div>
    </div>

    <MyLoader v-if="isLoading"/>

    <div v-else-if="searchedCards.length === 0" class="empty-search">
      <h1>По вашему запросу ничего не найдено</h1>
      <img src="/img/empty-search.svg" alt="">
    </div>

    <MyCards v-else v-bind:cards="searchedCards"/>

  </div>
</template>

<script>
import MyCards from '@/components/MyCards.vue'
import MyLoader from '@/components/UI/MyLoader.vue'
import axios from 'axios'

export default {
  components: { 
    MyCards,
    MyLoader,
  },
  data() {
    return {
        cards: [],
        searchQuery: '',
        selectedSort: 'name',
        totalPrice: 0,
        isLoading: true,
    }
  },
  methods: {
    async fetchCards() {
      try {
        const response = await axios.get('https://308ccce0ffbaa19f.mokky.dev/items');
        this.cards = response.data;
        this.isLoading = false;
      }
      catch(e) {
        this.isLoading = false;
        alert('Ошибка: ' + e)
      }
    },
  },
  mounted() {
    this.fetchCards();
  },
 computed: {
    sortedCards() {
        const sorted = [...this.cards]

        if (this.selectedSort === 'name') {
            sorted.sort((card1, card2) => {
                return card1.title.localeCompare(card2.title)
            })
        } else if (this.selectedSort === 'cheep') {
            sorted.sort((card1, card2) => {
                return card1.price - card2.price
            })
        } else if (this.selectedSort === 'expensive') {
            sorted.sort((card1, card2) => {
                return card2.price - card1.price
            })
        }
        return sorted;
    },
    searchedCards() {
        return this.sortedCards.filter(item => item.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
 }
}
</script>

<style scoped>
.shop {
    width: 100%;
    height: auto;
    padding: 40px 30px;
    border-radius: 0 0 15px 15px;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.379);
    background-color: white;
}
.shop__info{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.shop__search{
    display: flex;
    gap: 20px;
}
.shop__select{
    height: 40px;
    font-size: 15px;
    padding: 0 10px;
    border: 1px solid rgba(220, 220, 220, 0.784);
    border-radius: 5px;
    outline: none;
}
.shop__select:focus{
    border: 1px solid rgba(220, 220, 220, 0.784);
}
.shop__select > option {
  font-size: 16px;
}
.shop__input{
    height: 40px;
    font-size: 16px;
    padding: 0 32px;
    border-radius: 5px;
    border: 1px solid rgba(220, 220, 220, 0.784);
    outline: none;
    background: url(../../public/img/search.svg) no-repeat center left 10px;
}
.shop__input:focus{
    border: 1px solid rgba(220, 220, 220, 0.784);
}

.empty-search {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 50px;
}
</style>