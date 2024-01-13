<template>
    <div class="wrapper">
        <div class="wrapper__loader"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wrapper {
    margin-top: 50px;
}
.wrapper__loader {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    border-radius: 50%;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>