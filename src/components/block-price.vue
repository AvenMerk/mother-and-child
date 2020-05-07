<template>
    <div class="block-prices-container" :class="device_platform">
        <div class="content-container">
            <div class="header-text">Контракты с широким диапазоном<br v-if="device_platform === 'tablet'"> услуг и цен</div>
            <div class="prices-wrapper">
                <div class="price"
                     v-for="price in prices">
                    <div class="price-card"
                         @click="getCall({type: 'sale', form:'price', text: 'Узнать стоимость'})">
                        <div class="price-text-wrapper cocon-font">
                            <div class="text">Роды<br v-if="device_platform !== 'mobile'"> {{price.text}}</div>
                            <div class="cost">От {{price.price | finance}} руб.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-container">
                <div class="btn-orange"
                     @click="getCall({type: 'sale', form:'callback', text: 'Узнать стоимость'})"
                     v-if="device_platform !== 'mobile'">Получить стоимость всех видов родов</div>
                <div class="btn-orange"
                     @click="getCall({type: 'sale', form:'callback', text: 'Узнать стоимость'})"
                     v-else>Cтоимость всех видов родов</div>
                <div class="btn-purple"
                     @click="getCall({type: 'sale', form:'appointment', text: 'Записаться на прием'})">Записаться на прием</div>
            </div>
        </div>

    </div>
</template>

<script>
    import Mixin from '../common/mixin';
    import finance from '../common/finance';

    export default {
        name: "block-price",
        mixins: [Mixin, finance],
        data() {
            return {
                prices: [
                    {
                        text: 'СТАНДАРТ',
                        price: 355400
                    },
                    {
                        text: 'МАКСИМУМ',
                        price: 385400
                    },
                    {
                        text: 'ВСЁ ВКЛЮЧЕНО',
                        price: 493000
                    },
                    {
                        text: 'Домашние Максимум',
                        price: 384500
                    },
                    {
                        text: 'ЛЮКС',
                        price: 840000
                    },
                    {
                        text: 'VIP',
                        price: 1175000
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
        &.block-prices-container {
        }

        .content-container {
            padding-left: 70px;

        }

        .prices-wrapper {
            height: unset;
            max-width: 650px;
            flex-wrap: wrap;
            margin: 0 auto 100px;
            justify-content: space-between;
        }

        .price {
            width: unset;
            margin-bottom: 50px;
        }

        .btn-container {
            flex-direction: column;
            align-items: center;
        }

        .btn-orange {
            margin-bottom: 20px;
        }
    }

    .mobile {
        &.block-prices-container {
        }
        .content-container {
            padding: 0 20px 0 20px;
            justify-content: flex-start;
        }
        .header-text {
            margin: 60px auto 40px;
        }
        .prices-wrapper {
            height: unset;
            flex-direction: column;
            margin-bottom: 20px;
        }
        .price {
            margin-bottom: 30px;
            width: unset;
            font-size: 16px;
            line-height: 22px;
            padding-right: 0;
        }
        .price-card {
            width: 275px;
            height: 117px;
        }
        .price-text-wrapper {
            padding-top: 9px;
            padding-left: 13px;
        }
        .text {
            font-size: 22px;
            line-height: 30px;
            margin-bottom: 10px;
        }

        .btn-container {
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .btn-orange {
            margin-bottom: 20px;
        }

        .btn-orange, .btn-purple {
            width: 275px;
            &:hover {
                width: 275px;
            }
        }
    }

    .block-prices-container {
        width: 100%;
        max-width: 1920px;
        margin: auto;
        background-size: cover;
        background: #e5e5e5;
        padding-bottom: 60px;
    }

    .content-container {
        width: 100%;
        max-width: 1440px;
        padding: 0 40px;
        margin: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .header-text {
        margin: 30px 0 100px;
    }

    .prices-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin-bottom: 50px;
        flex-wrap: wrap;
    }

    .price {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        cursor: pointer;
        margin-bottom: 40px;
        min-width: 25%;
    }

    .price-card {
        width: 250px;
        height: 250px;
        background: url("../images/price-card.svg") no-repeat center bottom;
        background-size: cover;
    }

    .price-text-wrapper {
        padding-top: 20px;
        padding-left: 30px;
        font-weight: 500;
    }

    .text {
        color: $purple-5;
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 30px;
    }

    .btn-container {
        width: 720px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }

    .btn-orange {
        width: 400px;
        &:hover {
            width: 400px;
        }
    }
</style>
