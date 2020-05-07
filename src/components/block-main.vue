<template>
    <div class="block-main-container"
         :class="[device_platform]">
        <div class="swiper-container-main">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="content-container _1">
                        <div class="text-container">
                            <div class="header cocon-font">Роды любой сложности <br v-if="device_platform === 'tablet'">в
                                ГК <span style="white-space: nowrap"> «Мать и дитя»!</span></div>
                            <div class="main-text">
                                <div class="text">Группа компаний «Мать и дитя» – лидер в области частных акушерских
                                    услуг в России!</div>
                                <div class="text">Родовспоможение – профильное направление нашей работы с 2006 года.</div>
                                <div class="text">Мы обладаем уникальными ресурсами в области анестезиологии – применяем безопасные для матери и
                                    ребенка методы обезболивания, оптимальные для каждого периода родовой деятельности!</div>
                            </div>
                            <div class="btn-purple"
                                 @click="getCall({type: 'sale', form:'callback', text: 'Заказать звонок'})">Отправить
                                заявку
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import Mixin from '../common/mixin';
    import finance from '../common/finance';
    import $ from 'jquery';
    import Inputmask from 'inputmask';

    export default {
        name: "block-main",
        components: {},
        mixins: [Mixin, finance],
        data() {
            return {}
        },
        methods: {
            getAgreement() {
                this.$emit('getAgreement');
            },
        }
    }
</script>


<style scoped lang="scss">
    @import "../styles/constants.scss";

    .mobile {
        &.block-main-container {
            margin-top: 80px;
        }

        .content-container {
            height: 720px;

            &._1 {
                background: url("../images/backgrounds/bg-main-mobile.png") no-repeat center bottom;
                background-size: cover;
            }
        }

        .text-container {
            padding-left: 20px;
            padding-right: 20px;
            box-sizing: border-box;
        }

        .header {
            font-size: 36px;
        }

        .main-text {
            font-size: 16px;
            line-height: 19px;
            margin-bottom: 40px;
            text-align: justify;
        }

        .btn-purple {
            width: 275px;
        }

        .text {
            text-indent: 20px;
            margin-top: 5px;
        }
    }

    .tablet {
        &.block-main-container {
            margin-top: 80px;
        }

        .content-container {
            height: 1120px;

            &._1 {
                background: url("../images/backgrounds/bg-main-tablet.png") no-repeat center bottom;
                background-size: cover;
            }
        }

        .text-container {
            padding-left: 70px;
        }

        .main-text {
            margin-bottom: 230px;
            max-width: 600px;
        }

        .text {
            text-indent: 20px;
            margin-top: 5px;
        }
    }

    .block-main-container {
        width: 100%;
        max-width: 1920px;
        position: relative;
        margin-top: 105px;
    }

    .swiper-container-main {
        width: 100%;
        overflow: hidden;
    }

    .content-container {
        position: relative;
        width: 100%;
        height: 675px;
        display: flex;
        align-items: center;

        &._1 {
            background: url("../images/backgrounds/bg-main-desktop.png") no-repeat center bottom;
            background-size: cover;
        }
    }

    .text-container {
        width: 100%;
        max-width: 1440px;
        color: #fff;
        margin: auto;
        padding: 0 40px;
    }

    .header {
        font-size: 48px;
        font-weight: 500;
    }

    .main-text {
        font-size: 22px;
        line-height: 126.8%;
        margin-top: 25px;
        margin-bottom: 50px;
        width: 100%;
        max-width: 1000px;
    }
</style>
