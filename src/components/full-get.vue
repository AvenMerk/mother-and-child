<template>
    <div :class="[device_platform]"
         class="get-container">
        <div class="blacking"
             @click="hideSelf"></div>
        <div class="input-container">
            <div class="closer" @click="hideSelf">×</div>
            <div class="get-text cocon-font">
                <slot></slot>
            </div>
            <callback-input v-on="$listeners" :data="data">
                Отправить
            </callback-input>
        </div>
    </div>
</template>

<script>
    import Mask from '../common/mask';
    import Keyup from '../common/keyup';
    import CallbackInput from './callback-form/callback-input';
    import Mixin from '../common/mixin';

    export default {
        name: 'full-get',
        components: {CallbackInput},
        mixins: [Mixin],
        directives: {Mask, Keyup},
        props: ['data'],
        data() {
            return {
            }
        },
        methods: {
            hideSelf() {
                this.$emit('close');
            },
            getAgreement() {
                this.$emit('getAgreement');
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../styles/constants.scss';

    .tablet {

    }

    .mobile {
        .input-container {
            top: 1vh;
        }
    }

    .blacking {
        position: fixed;
        top: -100vh;
        left: -100vw;
        bottom: -100vw;
        right: -100vh;
        background: #000;
        opacity: 0.5;
        z-index: 20;
    }

    .input-container {
        position: fixed;
        top: 18vh;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 21;
        max-width: 450px;
        padding: 45px 35px 35px;
    }

    .closer {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 40px;
        cursor: pointer;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .offices-container {
        display: flex;
        flex-direction: column;
        align-items:center;
    }

    .get-text {
        text-align: center;
        margin-bottom: 30px;
        font-size: 24px;
        font-weight: 500;
    }
</style>
