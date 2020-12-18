<template>
    <div id="app">
        <div class="row">
            <!-- <button-view></button-view> -->
            <!-- <dialog-view></dialog-view> -->
            <!-- <input-view></input-view> -->
            <!-- <by-button type="primary">按钮</by-button> -->
            {{switchData}}
             <by-switch v-model="switchData" active-color="red" inactive-color="green" @change="handleSwitch"></by-switch>
        </div>
    </div>
</template>

<script>
// // import ButtonView from './examples/button'
// import DialogView from './views/dialog'
// import InputView from './views/input'
export default {
    name: "App",
    components: {
        // ButtonView,
        // DialogView,
        // InputView
    },
    data() {
        return {
            switchData: false
        }
    },
    methods: {
        handleSwitch(e) {
            console.log(e)
        }
    }
};
</script>

<style lang="scss" scoped>
    
</style>
