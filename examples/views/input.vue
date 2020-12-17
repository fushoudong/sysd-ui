<template>
    <div>
        <by-input :placeholder="'提示文字'" type="input" :rows="3" name="sex" v-model="value"></by-input>
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