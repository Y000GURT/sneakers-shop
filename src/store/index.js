import {createStore} from 'vuex';

export default createStore( {
    state: {
        basketSneakers: [],
        favoritesSneakers: [],
    },
    getters: {
        getPrice(state) {
            let sumPrice = 0;
            for(let item of state.basketSneakers) {
                sumPrice += item.price * item.quantity;
            }
            return sumPrice;
        },
        getCount(state) {
            let count = 0;
            for(let item of state.basketSneakers) {
                count += item.quantity;
            }
            return count;
        }
    },
    mutations: {
        addBasket(state, sneaker){
            let foundedSneaker = state.basketSneakers.find(item => item.id === sneaker.id)
            if(foundedSneaker){
                foundedSneaker.quantity++;
            }
            else {
                let temp = {
                    id: sneaker.id,
                    title: sneaker.title,
                    price: sneaker.price,
                    imageUrl: sneaker.imageUrl,
                    quantity: 1,
                    totalPrice: this.price * this.quantity,
                }
                state.basketSneakers.push(temp)
            }
        },
        removeBasket(state, sneaker) {
            state.basketSneakers = state.basketSneakers.filter(item => {
                if (item.id === sneaker.id) {
                    if (item.quantity - 1 > 0) {
                        item.quantity--;
                        return true;
                    } 
                    else {
                        return false
                    }
                } 
                else {
                    return true;
                }
            })
        },
        removeBasket2(state, sneaker) {
            state.basketSneakers = state.basketSneakers.filter(item => item.id != sneaker.id)
        },
        addFavorites(state, sneaker) {
            state.favoritesSneakers.push(sneaker);
        },
        removeFavorites(state, sneaker) {
            state.favoritesSneakers = state.favoritesSneakers.filter(item => item.id != sneaker.id)
        },
    }
})