<template>
    <div class="by-input">
        <textarea
            v-if="type === 'textarea'"
            :class="['by-textarea__inner', { disabled: disabled }]"
            :rows="rows"
            :name="name"
            :disabled="disabled"
            :value="value"
            @input="handleValueChange">
        </textarea>
        <div v-else>
            <input            
                :type="type"
                :class="['by-input__inner', { disabled: disabled }]"
                :placeholder="placeholder"
                :name="name"
                :disabled="disabled"
                :value="value"
                @input="handleValueChange"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "ByInput",
    props: {
        placeholder: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "text",
        },
        rows: {
            type: Number,
            default: 1,
        },
        name: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        value: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleValueChange(event) {
            this.$emit('input', event.target.value)
        }
    },
};
</script>

<style lang="scss" scoped>
    .by-input {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
        .by-input__inner {
            line-height: 40px;
            padding: 0px;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            background: #fff;
            color: #606266;
            padding: 0 15px;
            cursor: pointer;
            transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            &:focus {
                outline: none;
                border: 1px solid #409eff;
            }
        }
        .by-textarea__inner {
            display: block;
            resize: vertical;
            padding: 5px 15px;
            line-height: 1.5;
            box-sizing: border-box;
            width: 100%;
            font-size: inherit;
            color: #606266;
            background-color: #fff;
            background-image: none;
            border: 1px solid #dcdfe6;
            border-radius: 4px;
            transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            min-height: 33px;
            font-family: inherit;
            &:focus {
                outline: none;
                border: 1px solid #409eff;
            }
        }
        .disabled {
            background-color: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
            &:focus {
                outline: none;
                border: none;
            }
        }
    }
</style>