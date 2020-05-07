<template>
    <div class="block block-offers-container" :class="device_platform">
        <div class="content-container">
            <div class="header-text">Наши роддома предлагают все существующие в международном акушерском сообществе возможности родовспоможения:</div>
            <div class="offers-wrapper">
                <div class="offer"
                     v-for="offer in offers"
                     :class="{'hide': offer.no_bg}"
                     @click="getCall({type: 'sale', form:'callback', text: 'Заказать звонок'})">
                    <div class="offer-card"
                         :class="{'no-background': offer.no_bg}">
                        <div class="offer-text cocon-font"
                             v-html="offer.text"></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Mixin from '../common/mixin';
    import finance from '../common/finance';

    export default {
        name: "block-offer",
        mixins: [Mixin, finance],
        data() {
            return {
                offers: [
                    {
                        text: 'Физиологические или естественные роды',
                    },
                    {
                        text: '',
                        no_bg: true,
                    },
                    {
                        text: 'Вертикальные роды',
                    },
                    {
                        text: 'Роды в воде',
                    },
                    {
                        text: '“Домашние роды” в условиях стационара',
                    },
                    {
                        text: 'Оперативные роды',
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
        &.block-offers-container {
            background: url("../images/backgrounds/bg-offer-tablet.png") no-repeat center;
        }

        .content-container {
            padding-left: 70px;
        }

        .offers-wrapper {
            height: unset;
            max-width: 650px;
            margin: 0 auto;
        }

        .offer {
            width: unset;
            margin-bottom: 50px;
        }
        .hide {
            display: none;
        }
    }

    .mobile {
        &.block-offers-container {
            background: url("../images/backgrounds/bg-offer-tablet.png") no-repeat center;
            height: 1000px;
        }
        .content-container {
            padding: 0 10px 0 20px;
        }
        .header-text {
            margin: 20px auto 40px;
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
        .offer-card {
            width: 275px;
            height: 100px;
        }
        .offer-text {
            width: 190px;
            padding-left: 15px;
            padding-top: 15px;
        }
        .hide {
            display: none;
        }
    }

    .desktop, .tablet {
        .offer {
            &:nth-child(1), &:nth-child(4) {
                justify-content: flex-start;
            }
            &:nth-child(3), &:nth-child(6) {
                justify-content: flex-end;
            }
        }
    }

    .block-offers-container {
        width: 100%;
        max-width: 1920px;
        margin: auto;
        background: url("../images/backgrounds/bg-offer-desktop.png") no-repeat center;
        background-size: cover;
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
        justify-content: center;
        font-size: 18px;
        width: 33%;
    }

    .offer-card {
        width: 300px;
        height: 150px;
        background: url("../images/offer-card.svg") no-repeat center;
        background-size: cover;
        cursor: pointer;
        &.no-background {
            background: none;
        }
    }

    .offer-text {
        padding-top: 20px;
        padding-left: 30px;
        max-width: 206px;
        color: #fff;
    }
</style>
