<template>
    <button :class="['by-button', `by-button-${this.type}`, {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
    }]" :disabled="disabled" @click="doButtonClick">
        <span><slot></slot></span>
    </button>
</template>

<script>
export default {
    name: 'ByButton',
    props: {
        type: {
            type: String,
            defalut: 'default'
        },
        plain: {
            type: [Boolean, String],
            defalut: false
        },
        round: {
            type: [Boolean, String],
            defalut: false
        },
        circle: {
            type: [Boolean, String],
            defalut: false
        },
        disabled: {
            type: [Boolean, String],
            defalut: false
        }
    },
    data() {return {}},
    methods: {
        doButtonClick() {
            this.$emit('click')
        }
    },
}
</script>

<style scoped lang="scss">
    .by-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        outline: none;
        border: solid 1px #dcdfe6;
        color: #606266;
        text-align: center;
        margin: 0;
        transition: 0.1s;
        font-weight: 500;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
        -webkit-appearance: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        &:hover, 
        &:focus {
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }
    }
    .by-button.is-plain {
        &:hover,
        &:focus {
            background: #fff;
            border-color: #409eff;
            color: #409eff;
        }
    }
    .by-button.is-disabled {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
    }
    .by-button-primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover,
        &:focus {
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
        }
    }
    .by-button-primary.is-plain {
        color: #409eff;
        background: #ecf5ff;
        border-color: #b3d8ff;
        &:hover,
        &:focus {
            background: #409eff;
            border-color: #409eff;
            color: #fff;
        }
    }
    .by-button-primary.is-disabled {
        color: #8cc5ff;
        background-color: #ecf5ff;
        border-color: #d9ecff;
    }
    .by-button-success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
        &:hover,
        &:focus {
            background: #85ce61;
            border-color: #85ce61;
            color: #fff;
        }
    }
    .by-button-success.is-plain {
        color: #67c23a;
        background: #f0f9eb;
        border-color: #c2e7b0;
        &:hover,
        &:focus {
            background: #67c23a;
            border-color: #67c23a;
            color: #fff;
        }
    }
    .by-button-success.is-disabled {
        color: #a4da89;
        background-color: #f0f9eb;
        border-color: #e1f3d8;
    }
    .by-button-info {
        color: #fff;
        background-color: #909399;
        border-color: #909399;
        &:hover,
        &:focus {
            background: #a6a9ad;
            border-color: #a6a9ad;
            color: #fff;
        }
    }
    .by-button-info.is-plain {
        color: #909399;
        background: #f4f4f5;
        border-color: #d3d4d6;
        &:hover,
        &:focus {
            background: #909399;
            border-color: #909399;
            color: #fff;
        }
    }
    .by-button-info.is-disabled {
        color: #bcbec2;
        background-color: #f4f4f5;
        border-color: #e9e9eb;
    }
    .by-button-warning {
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
        &:hover,
        &:focus {
            background: #ebb563;
            border-color: #ebb563;
            color: #fff;
        }
    }
    .by-button-warning.is-plain {
        color: #e6a23c;
        background: #fdf6ec;
        border-color: #f5dab1;
        &:hover,
        &:focus {
            background: #e6a23c;
            border-color: #e6a23c;
            color: #fff
        }
    }
    .by-button-warning.is-disabled {
        color: #f0c78a;
        background-color: #fdf6ec;
        border-color: #faecd8;
    }
    .by-button-danger {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        &:hover,
        &:focus {
            background: #f78989;
            border-color: #f78989;
            color: #fff;
        }
    }
    .by-button-danger.is-plain {
        color: #f56c6c;
        background: #fef0f0;
        border-color: #fbc4c4;
        &:hover,
        &:focus {
            background: #f56c6c;
            border-color: #f56c6c;
            color: #fff;
        }
    }
    .by-button-danger.is-disabled {
        color: #f9a7a7;
        background-color: #fef0f0;
        border-color: #fde2e2;
    }
    /**
        控制圆角与圆形按钮
     */
     .is-round {
         border-radius: 20px;
     }
     .is-circle {
         border-radius: 50%;
     }
</style>