<template>
    <div class="by-switch" :class="{ 'is-checked': value }" @click="handleClick">
        <input class="by-switch__input" type="checkbox" :name="name" ref="input" />
        <span class="by-switch__core" ref="core" @click="handleChange">
            <span class="by-switch__button"></span>
        </span>
    </div>
</template>

<script>
export default {
    name: "BySwitch",
    props: {
        value: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: "",
        },
        activeColor: {
            type: String,
            default: "",
        },
        inactiveColor: {
            type: String,
            default: "",
        },
    },
    methods: {
        async handleClick() {
            this.$emit('input', !this.value)
            await this.$nextTick()
            this.setColor()
        },
        setColor() {
            let color = this.value? this.activeColor: this.inactiveColor
            this.$refs.core.style.borderColor = color
            this.$refs.core.style.backgroundColor = color
        },
        handleChange() {
            this.$emit('change', !this.value)
        }
    },
    mounted() {
        this.setColor()
    }
};
</script>

<style lang="scss" scoped>
    .by-switch {
        display: flex;
        align-items: center;
        position: relative;
        font-size: 14px;
        line-height: 20px;
        height: 20px;
        vertical-align: middle;
        .by-switch__input {
            position: absolute;
            width: 0;
            height: 0;
            opacity: 0;
            margin: 0;
        }
        .by-switch__core {
            margin: 0;
            display: inline-block;
            position: relative;
            width: 40px;
            height: 20px;
            border: 1px solid #dcdfe6;
            outline: none;
            border-radius: 10px;
            box-sizing: border-box;
            background: #dcdfe6;
            cursor: pointer;
            transition: border-color 0.3s, background-color 0.3s;
            vertical-align: middle;
            .by-switch__button {
                position: absolute;
                top: 1px;
                left: 1px;
                border-radius: 100%;
                transition: all 0.3s;
                width: 16px;
                height: 16px;
                background-color: #fff;
            }
        }
        }
        .by-switch.is-checked {
        .by-switch__core {
            border-color: #409eff;
            background-color: #409eff;
            .by-switch__button {
                transform: translateX(20px);
            }
        }
    }
</style>