<template>
    <div class="checkbox-container" @click="change">
        <div class="checkbox-itself" :class="{'checked' : is_true}"></div>
    </div>
</template>

<script>
    export default {
        components: {},
        name: 'CheckBox',
        props: ['value'],
        data() {
            return {}
        },
        computed: {
            is_true() {
                if (!Array.isArray(this.value)) {
                    return this.value;
                }
                return this.value.includes(this.$attrs.value);
            }
        },
        methods: {
            change() {
                if (!Array.isArray(this.value)) {
                    this.$emit('input', !this.value);
                } else {
                    let index = this.value.indexOf(this.$attrs.value);
                    if (index >= 0) {
                        this.$emit('input', this.value.filter(item => item != this.$attrs.value));
                    } else {
                        let ret = this.value.map(e => e);
                        ret.push(this.$attrs.value);
                        this.$emit('input', ret);
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .checkbox-container {
        cursor: pointer;
        margin: 2px 5px 0 0;
        display: flex;
        white-space: nowrap;
        align-items: center;

        .checkbox-itself {
            display: block;
            float: left;
            flex-shrink: 0;
            height: 20px;
            width: 20px;
            position: relative;
            &.checked {
                background: url("../images/utils/checked.svg") no-repeat center;
                background-size: 70%;
            }

            &:not(.checked) {
                background: url("../images/utils/unchecked.svg") no-repeat center;
                background-size: 70%;
            }
        }

        .checkbox-itself + * {
            margin-left: 10px;
        }
    }

</style>
