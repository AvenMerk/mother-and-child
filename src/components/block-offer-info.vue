<template>
    <div class="block block-offer-info-container" :class="device_platform">
        <div class="content-container">
            <div class="header-text">Что входит в стоимость родов </div>
            <div class="offers-wrapper">
                <div class="offer"
                     v-for="offer in offers"
                     @click="getCall({type: 'sale', form:'callback', text: 'Заказать звонок'})">
                    <div class="offer-img" :class="offer.img"></div>
                    <div class="offer-text cocon-font"
                             v-html="offer.text"></div>
                </div>
            </div>
        </div>
        <div class="rectangles-container">
            <div class="left-rectangles">
                <div class="rectangle purple-1"></div>
                <div class="row">
                    <div class="rectangle purple-2"></div>
                    <div class="rectangle purple-1"></div>
                </div>
                <div class="row">
                    <div class="rectangle purple-5"></div>
                    <div class="rectangle purple-4"></div>
                    <div class="rectangle purple-2"></div>
                    <div class="rectangle purple-1"></div>
                </div>
            </div>
            <div class="right-rectangles"
                 v-if="device_platform !== 'mobile'">
                <div class="rectangle orange-3"></div>
                <div class="rectangle orange-5"></div>
                <div class="row">
                    <div class="rectangle orange-3"></div>
                    <div class="rectangle orange-5"></div>
                    <div class="rectangle purple-4"></div>
                </div>
                <div class="row">
                    <div class="rectangle yellow-1"></div>
                    <div class="rectangle orange-3"></div>
                    <div class="rectangle orange-5"></div>
                    <div class="rectangle purple-4"></div>
                    <div class="rectangle purple-5"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Mixin from '../common/mixin';
    import finance from '../common/finance';

    export default {
        name: "block-offer-info",
        mixins: [Mixin, finance],
        data() {
            return {
                offers: [
                    {
                        text: 'Бригада врачей',
                        img: 'ic1'
                    },
                    {
                        text: 'Родоразрешение',
                        img: 'ic2'
                    },
                    {
                        text: 'Анестезия',
                        img: 'ic3'
                    },
                    {
                        text: 'Пребывание в палате от 3х дней',
                        img: 'ic4'
                    },
                    {
                        text: '6-ти разовое питание',
                        img: 'ic5'
                    },
                    {
                        text: 'Принадлежности для мамы и малыша',
                        img: 'ic6'
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
        &.block-offer-info-container {
            background: url("../images/backgrounds/bg-cost-tablet.png") no-repeat center;
        }

        .content-container {
            padding-left: 70px;
            justify-content: flex-start;
            height: calc(100% - 272px);
        }

        .header-text {
            margin-top: 140px;
        }

        .offers-wrapper {
            flex-direction: column;
            height: unset;
            max-width: 650px;
            margin: 0 auto;
        }

        .offer {
            width: unset;
            margin-bottom: 50px;
        }

        .rectangle {
            height: 68px;
            width: 68px;
        }
    }

    .mobile {
        &.block-offer-info-container {
            background: url("../images/backgrounds/bg-cost-mobile.png") no-repeat center;
            height: 800px;
            background-position-x: 20%;
        }
        .content-container {
            padding: 0 20px 0 20px;
            justify-content: flex-start;
            align-items: center;
            height: calc(100% - 129px);
        }
        .header-text {
            margin: 80px auto 40px;
        }
        .offers-wrapper {
            height: unset;
            justify-content: center;
            flex-direction: column;
        }
        .offer {
            margin-bottom: 30px;
            width: unset;
            font-size: 16px;
            line-height: 22px;
            padding-right: 0;
        }
        .rectangle {
            height: 43px;
            width: 43px;
        }
    }

    .block-offer-info-container {
        width: 100%;
        max-width: 1920px;
        margin: auto;
        background: url("../images/backgrounds/bg-cost-desktop.png") no-repeat center;
        background-size: cover;
    }

    .content-container {
        width: 100%;
        max-width: 1440px;
        padding: 0 40px;
        margin: auto;
        height: calc(100% - 308px);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .header-text {
        margin: 120px 0 100px;
        color: #fff;
    }

    .offers-wrapper {
        height: 400px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .offer {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 33%;
        padding-right: 20px;
        margin-bottom: 35px;
        font-size: 24px;
        cursor: pointer;
    }

    .offer-text {
        max-width: 270px;
        color: #fff;
    }

    .offer-img {
        width: 50px;
        height: 50px;
        margin-right: 20px;

        @each $offer in ic1, ic2, ic3, ic4, ic5, ic6 {
            &.#{$offer} {
                background: url("../images/icons/advantage/#{$offer}.svg") no-repeat center;
                background-size: contain;
            }
        }
    }

    .rectangles-container {
        align-self: flex-end;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .right-rectangles {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .left-rectangles {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
    }

    .rectangle {
        width: 77px;
        height: 77px;
    }

    .row {
        display: flex;
    }
</style>
