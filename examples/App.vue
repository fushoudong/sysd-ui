<template>
    <div id="app">
        <main-header></main-header>
        <div class="container">
            <side-bar></side-bar>
        </div>
    </div>
</template>

<script>
import mainHeader from './components/header.vue'
import SideBar from './components/side-nav.vue'
export default {
    name: "App",
    components: {
        mainHeader,
        SideBar
    },
    data() {
        return {
        }
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
    .container {
        margin: 48px auto;
        width: 90%;
        background-color: #fff;
        box-shadow: 0 40px 30px 0 rgba(223, 225, 230, .5);
        .nav {
            
        }
    }
</style>
