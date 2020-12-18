<template>
    <div>
        <by-input :placeholder="'提示文字'" type="password" :rows="3" name="sex" v-model="value" show-password="true"></by-input>
    </div>
</template>

<script>
export default {
    name: 'Input',
    data() {
        return {
            value: ''
        }
    },
    methods: {
        change(val) {
            this.value = val
        }
    },
}
</script>

<style>

</style>