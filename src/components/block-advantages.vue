<template>
    <div class="block block-advantages-container" :class="device_platform">
        <div class="colored-rectangles-container">
            <div class="yellow-1 cell"></div>
            <div class="orange-1 cell"></div>
            <div class="orange-2 cell"></div>
        </div>
        <div class="content-container">
            <div class="header-text">Почему выбирают роды<br v-if="device_platform === 'mobile'"> в «Мать и дитя»</div>
            <div class="advantages-wrapper">
                <div class="advantage" v-for="advantage in advantages"
                     @click="getCall({type: 'sale', form:'callback', text: 'Заказать звонок'})">
                    <div class="advantage-img" :class="advantage.img"></div>
                    <div class="advantage-text" v-html="advantage.text"></div>
                </div>
            </div>
        </div>
        <div class="colored-rectangles-container">
            <div class="orange-3 cell"></div>
            <div class="orange-4 cell"></div>
            <div class="orange-5 cell"></div>
            <div class="orange-6 cell"></div>
            <div class="purple-1 cell"></div>
            <div class="purple-2 cell" v-if="device_platform !== 'mobile'"></div>
            <div class="purple-3 cell" v-if="device_platform !== 'mobile'"></div>
            <div class="purple-4 cell" v-if="device_platform !== 'mobile'"></div>
        </div>
    </div>
</template>

<script>
    import Mixin from '../common/mixin';
    import finance from '../common/finance';

    export default {
        name: "block-advantages",
        mixins: [Mixin, finance],
        data() {
            return {
                advantages: [
                    {
                        text: 'Абсолютная безопасность мамы и новорожденного',
                        img: 'ic1'
                    },
                    {
                        text: 'Обезболивание на любом этапе родов',
                        img: 'ic2'
                    },
                    {
                        text: 'Функциональные и лабораторные исследования 24/7',
                        img: 'ic3'
                    },
                    {
                        text: 'Уникальное отделение реанимации новорожденных и выхаживания недоношенных детей',
                        img: 'ic4'
                    },
                    {
                        text: 'Высокотехнологичные комфортабельные родильные боксы',
                        img: 'ic5'
                    },
                    {
                        text: 'Круглосуточная помощь будущим мамам',
                        img: 'ic6'
                    },
                    {
                        text: 'Отделение «Скорой помощи» с собственным парком реанимобилей',
                        img: 'ic7'
                    },
                    {
                        text: 'Шестиразовое питание с адаптацией блюд под особенности организма кормящей мамы',
                        img: 'ic8'
                    },
                ]
            }
        },
        methods: {
            getAgreement() {
                this.$emit('getAgreement');
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/constants.scss";

    .tablet {
        &.block-advantages-container {
        }

        .content-container {
            padding-left: 70px;
        }

        .advantages-wrapper {
            height: unset;
        }

        .advantage {
            width: unset;
        }
    }

    .mobile {
        &.block-advantages-container {
        }
        .content-container {
            padding: 0 10px 0 20px;
            height: calc(100% - 90px);
        }
        .header-text {
            margin: 35px auto 40px;
        }
        .advantages-wrapper {
            height: unset;
        }
        .advantage {
            margin-bottom: 30px;
            width: unset;
            font-size: 16px;
            padding-right: 0;
        }

        .advantage-img {
            width: 30px;
            height: 30px;
            min-height: 30px;
            min-width: 30px;
        }
        .colored-rectangles-container {
            height: 45px;
        }
        .cell {
            width: 20%;
        }
    }

    .block-advantages-container {
        width: 100%;
        max-width: 1920px;
        margin: auto;
    }

    .content-container {
        width: 100%;
        max-width: 1440px;
        padding: 0 40px;
        margin: auto;
        height: calc(100% - 180px);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .header-text {
        margin: 30px 0 100px;
    }

    .advantages-wrapper {
        height: 350px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .advantage {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 50%;
        padding-right: 20px;
        margin-bottom: 35px;
        font-size: 18px;
        cursor: pointer;
    }

    .advantage-img {
        width: 40px;
        height: 40px;
        margin-right: 20px;

        @each $advantage in ic1, ic2, ic3, ic4, ic5, ic6, ic7, ic8 {
            &.#{$advantage} {
                background: url("../images/icons/advantage/#{$advantage}.svg") no-repeat center;
                background-size: contain;
            }
        }
    }

    .colored-rectangles-container {
        height: 90px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .cell {
        height: 100%;
        width: 12.5%;
    }
</style>
