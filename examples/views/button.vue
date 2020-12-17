<template>
    <div class="row">
        <div>
            <by-button type="defalut">默认按钮</by-button>
            <by-button type="primary">主要按钮</by-button>
            <by-button type="success">成功按钮</by-button>
            <by-button type="info">信息按钮</by-button>
            <by-button type="warning">警告按钮</by-button>
            <by-button type="danger">危险按钮</by-button>
        </div>
        <div>
            <by-button type="defalut" disabled>默认按钮</by-button>
            <by-button type="primary" disabled>主要按钮</by-button>
            <by-button type="success" disabled>成功按钮</by-button>
            <by-button type="info" disabled> 信息按钮</by-button>
            <by-button type="warning" disabled>警告按钮</by-button>
            <by-button type="danger" disabled>危险按钮</by-button>
        </div>
        <div>
            <by-button type="defalut" plain>默认按钮</by-button>
            <by-button type="primary" plain="true">主要按钮</by-button>
            <by-button type="success" :plain='"true"'>成功按钮</by-button>
            <by-button type="info" plain>信息按钮</by-button>
            <by-button type="warning" plain>警告按钮</by-button>
            <by-button type="danger" plain>危险按钮</by-button>
        </div>
        <div>
            <by-button type="defalut" round>默认按钮</by-button>
            <by-button type="primary" round="true">主要按钮</by-button>
            <by-button type="success" round>成功按钮</by-button>
            <by-button type="info" round>信息按钮</by-button>
            <by-button type="warning" round>警告按钮</by-button>
            <by-button type="danger" round>危险按钮</by-button>
        </div>
        <div>
            <by-button type="defalut" circle>o</by-button>
            <by-button type="primary" circle="true">o</by-button>
            <by-button type="success" circle>o</by-button>
            <by-button type="info" circle>o</by-button>
            <by-button type="warning" circle>o</by-button>
            <by-button type="danger" circle>o</by-button>
        </div>
        <div>
            <by-button @click="handleButtonClick">
                添加点击
            </by-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ButtonExample',
    components: {

    },
    data() {
        return {}
    },
    methods: {
        handleButtonClick() {
            alert('点击按钮')
        }
    },
    created() {}
}
</script>

<style lang="scss" scoped>
    .row {
        width: fit-content;
        border: 1px solid #eee;
        padding: 5px;
        div {
            margin-top: 10px;
        }
        .by-button {
            margin-right: 10px;
        }
    }
</style>