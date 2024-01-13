<template>
  <header>
    <router-link to="/" class="header__left" >
        <div class="header__logo">
            <img src="/img/logo.png" alt="" class="logo">
        </div>
        <div class="header__info">
            <h2>Sheakers Shop</h2>
            <p>Онлайн магазин кроссовок</p>
        </div>
    </router-link>
    <div class="header__right">
        <div class="header__item">
            <img src="/img/cart.svg" alt="">
            <router-link to="/basket" class="header__text">{{$store.getters.getPrice}} руб.</router-link >
        </div>
        <div class="header__item">
            <img src="/img/heart.svg" alt="">
            <router-link to="/favorites" class="header__text">Закладки</router-link>
        </div>
        <div class="header__item">
            <img src="/img/profile.svg" alt="">
            <p class="header__text">Профиль</p>
        </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo{
    height: 60px;
}
header{
    display: flex;
    justify-content: space-between;

    background-color: white;
    height: 120px;
    width: 100%;
    padding: 0 30px;
    border-radius: 15px 15px 0 0;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.379);
    border-bottom: 1px solid rgba(209, 232, 255, 0.789);
}
.header__left{
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: black;
}
.header__info{
    display: flex;
    flex-direction: column;
}
.header__info > p {
    color: rgb(172, 172, 172);
}
.header__right {
    display: flex;
    align-items: center;
    gap: 30px;

    font-size: 18px;
}
.header__item:first-child {
    font-weight: bold;
}
.header__item {
    display: flex;
    gap: 5px;

    color: rgb(140, 140, 140);
    cursor: pointer;
}
.header__text {
    color: rgb(140, 140, 140);
    text-decoration: none;
}
.header__text:hover {
    color: rgb(106, 106, 106);
}
</style>