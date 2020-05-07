<template>
    <div class="block-footer-container" :class="[device_platform]">
        <div class="content-container">
            <div class="question-container">
                <div class="question  cocon-font">Задать вопрос или записаться на прием</div>
                <div class="callback" @click="getCall({type: 'sale', form:'callback', text: 'Заказать звонок'})">Перезвоните мне</div>
                <div class="btn-container">
                    <div class="btn-purple" @click="getCall({type: 'sale', form:'question', text: 'Задать вопрос'})">Задать вопрос</div>
                    <div class="btn-purple" @click="getCall({type: 'sale', form:'appointment', text: 'Записаться на прием'})">Записаться на прием</div>
                </div>
            </div>
        </div>
        <div class="copyright-container">Мать и Дитя ©2020. Все права защищены. ООО «ХАВЕН»</div>
    </div>
</template>

<script>
    import Mixin from '../common/mixin';

    export default {
        name: "block-footer",
        mixins: [Mixin],
        data() {
            return {}
        },
        created() {

        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/constants.scss";

    .mobile {
        &.block-footer-container {
        }

        .question-container {
            flex-direction: column;
            width: 275px;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 80px 0 70px;
        }

        .question {
            margin-bottom: 50px;
        }

        .btn-container {
            flex-direction: column;
            width: 100%;
        }

        .btn-purple, .btn-purple:hover {
            width: 275px;
            margin-top: 30px;
        }

        .copyright-container {
            padding: 25px;
            font-size: 12px;
            line-height: 14px;
            text-align: left;
        }
    }

    .tablet {
        &.block-footer-container {
        }
        .question-container {
            flex-wrap: wrap;
            padding-left: 70px;
            justify-content: flex-start;
        }
        .btn-container {
            margin-top: 40px;
            width: 100%;
            justify-content: flex-start;
        }

        .question {
            font-size: 24px;
            width: unset;
            margin-right: 40px;
        }

        .callback {
            margin-bottom: -5px;
            height: 21px;
        }

        .copyright-container {
            padding: 50px;
            font-size: 16px;
            line-height: 18px;
            text-align: center;
        }
    }

    .block-footer-container {
        width: 100%;
    }
    .content-container {
        max-width: 1920px;
        width: 100%;
        margin: 0 auto;
        background: $purple-5;
    }

    .question-container {
        max-width: 1440px;
        width: 100%;
        padding: 50px 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        margin: auto;
    }

    .question {
        width: 250px;
        font-size: 24px;
        font-weight: 500;
    }

    .btn-purple {
        border: 1px solid #fff;
    }

    .callback {
        font-size: 18px;
        line-height: 21px;
        border-bottom: 1px dashed #fff;
        height: 25px;
        font-weight: normal;
        cursor: pointer;
        &:hover {
            color: $yellow-1;
        }
    }

    .btn-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .btn-purple {
        &:first-of-type {
            margin-right: 70px;
        }
    }
    .copyright-container {
        text-align: center;
        padding: 30px;
        font-size: 18px;
        line-height: 21px;
    }
</style>
