<template>
    <div>
        <div class="blacking"></div>
        <div class="callback-loading">
            <div class="cssload-container">
                <div class="cssload-whirlpool"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        directives: {},
        mixins: [],
        props: [''],
        data() {
            return {}
        },
        computed: {},
        methods: {}
    }
</script>

<style scoped lang="scss">

    .cssload-container {
        position: relative;
    }

    .cssload-whirlpool,
    .cssload-whirlpool::before,
    .cssload-whirlpool::after {
        position: absolute;
        top: 50%;
        left: 50%;
        border: 1px solid rgb(255, 255, 255);
        border-left-color: rgb(0, 0, 0);
        border-radius: 974px;
        -o-border-radius: 974px;
        -ms-border-radius: 974px;
        -webkit-border-radius: 974px;
        -moz-border-radius: 974px;
    }

    .cssload-whirlpool {
        margin: -24px 0 0 -24px;
        height: 49px;
        width: 49px;
        animation: cssload-rotate 1150ms linear infinite;
        -o-animation: cssload-rotate 1150ms linear infinite;
        -ms-animation: cssload-rotate 1150ms linear infinite;
        -webkit-animation: cssload-rotate 1150ms linear infinite;
        -moz-animation: cssload-rotate 1150ms linear infinite;
    }

    .cssload-whirlpool::before {
        content: "";
        margin: -22px 0 0 -22px;
        height: 43px;
        width: 43px;
        animation: cssload-rotate 1150ms linear infinite;
        -o-animation: cssload-rotate 1150ms linear infinite;
        -ms-animation: cssload-rotate 1150ms linear infinite;
        -webkit-animation: cssload-rotate 1150ms linear infinite;
        -moz-animation: cssload-rotate 1150ms linear infinite;
    }

    .cssload-whirlpool::after {
        content: "";
        margin: -28px 0 0 -28px;
        height: 55px;
        width: 55px;
        animation: cssload-rotate 2300ms linear infinite;
        -o-animation: cssload-rotate 2300ms linear infinite;
        -ms-animation: cssload-rotate 2300ms linear infinite;
        -webkit-animation: cssload-rotate 2300ms linear infinite;
        -moz-animation: cssload-rotate 2300ms linear infinite;
    }

    @keyframes cssload-rotate {
        100% {
            transform: rotate(360deg);
        }
    }

    @-o-keyframes cssload-rotate {
        100% {
            -o-transform: rotate(360deg);
        }
    }

    @-ms-keyframes cssload-rotate {
        100% {
            -ms-transform: rotate(360deg);
        }
    }

    @-webkit-keyframes cssload-rotate {
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @-moz-keyframes cssload-rotate {
        100% {
            -moz-transform: rotate(360deg);
        }
    }

    .blacking {
        position: fixed;
        z-index: 500;
        top: -100vh;
        left: -100vw;
        bottom: -100vw;
        right: -100vh;
        background: #000;
        opacity: 0.5;
        cursor: default;
    }

    .callback-loading {
        position: fixed;
        z-index: 1200;
        top: calc(50% - 160px);
        left: calc(50% - 80px);
        height: 160px;
        width: 160px;
        padding: 40px 20px;
        cursor: default;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
