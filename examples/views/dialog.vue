<template>
    <div>
        <div>
            <by-button type="primary" @click="visible = true">显示</by-button>
        </div>
        <by-dialog title="对话框" :width="'60%'" :top="'20vh'" :visible.sync="visible">
            <template v-slot:title>

            </template>
            这是内容
            <template v-slot:footer>
                <by-button>取消</by-button>
                <by-button type='primary'>确定</by-button>
            </template>
        </by-dialog>
    </div>
</template>

<script>
export default {
    name: 'DialogView',
    data() {
        return {
            visible: false
        }
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>

</style>