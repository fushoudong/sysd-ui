<template>
    <!-- 模态框区域 -->
    <transition name="dialog-fade">
        <div v-show="visible">
            <div class="by-dialog__wrapper" style="z-index: 2001" @click.self="handleClose">
                <div class="by-dialog" :style="{width: width, top: top}">
                    <div class="by-dialog__header">
                    <slot name="title">
                            <span class="by-dialog__title">{{title}}</span>
                    </slot>
                        <button class="by-dialog__headerbtn" @click="handleClose">
                            <i class="by-icon-close"></i>
                        </button>
                    </div>
                    <div class="by-dialog__body">
                        <slot></slot>
                    </div>
                    <div class="by-dialog__fotter" v-if="$slots.footer">
                        <slot name="footer">
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'ByDialog',
    props: {
        title: {
            type: String,
            default: '提示'
        },
        width: {
            type: String,
            default: '50%'
        },
        top: {
            type: String,
            default: '15vh'
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        handleClose() {
            this.$emit('update:visible', false)
        }
    },
    created() {
    }
}
</script>

<style lang='scss' scoped>
    .dialog-fade-enter-active {
        animation: fade 0.2s;
    }
    .dialog-fade-leave-active {
        animation: fade 0.2s reverse;
    }
    .by-dialog__wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: auto;
        background: rgba($color: #000000, $alpha: 0.5);
        .by-dialog {
            position: relative;
            background: #fff;
            border-radius: 2px;
            margin: 0 auto 50px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 3);
            box-sizing: border-box;
            .by-dialog__header {
                padding: 20px 20px 10px;
                .by-dialog__title {
                    line-height: 24px;
                    font-size: 18px;
                    color: #303133;
                }
                .by-dialog__headerbtn {
                    position: absolute;
                    outline: none;
                    border: none;
                    background-color: transparent;
                    top: 20px;
                    right: 20px;
                    cursor: pointer;
                    line-height: 20px;
                    font-size: 16px;
                }
            }
            .by-dialog__body {
                padding: 30px 20px;
                color: #606266;
                font-size: 14px;
                word-break: break-all;
            }
            .by-dialog__fotter {
                padding: 10px 20px 20px;
                text-align: right;
                box-sizing: border-box;
                * {
                    margin-left: 20px;
                }
            }
        }
    }
    @keyframes fade {
        0% {
            transform: translate3d(0, -20px, 0);
            opacity: 0;
        }
        100% {
            transform: translate3d(0, 0, 0);
            opacity: 1;
        }
    }
</style>