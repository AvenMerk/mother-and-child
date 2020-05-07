<template>
    <div class="block block-video-container yellow-1" :class="device_platform">
        <div class="content-container">
            <div class="text-card">
                <div class="text-header cocon-font">
                    Дорогие пациенты!
                </div>
                <div class="text">
                    <div class="text-parts">Ежедневно мы получаем множество вопросов о работе наших госпиталей и поэтому решили
                    снять для вас этот ролик, чтобы вы были уверены, что, находясь в стенах Клинического Госпиталя MD
                        GROUP, вы – в безопасности.</div>
                    <div class="text-parts">Круглосуточно весь персонал трудится над постоянной санитарной
                    обработкой, а новейшие технологии в системе очистки воздуха и строение здания обеспечивают
                        обсервационные отделения и защищают вас, наших пациентов, от любых инфекций.</div>
                    <div class="text-parts">С заботой о наших пациентах мы приняли дополнительные меры безопасности и призываем вас быть осторожными и
                        использовать маски. Кроме этого, Клинический Госпиталь MD GROUP скорректировал расписание приемов.</div>
                    <div class="text-parts">Нам очень дорого ваше здоровье.</div>
                </div>
                <div class="text-ending">Всегда с вами,<br> Группа Компаний «Мать и дитя».</div>
                <div class="rectangles">
                    <div class="rectangle orange-2"></div>
                    <div class="row">
                        <div class="rectangle orange-1"></div>
                        <div class="rectangle orange-4"></div>
                    </div>
                    <div class="row">
                        <div class="rectangle orange-3"></div>
                        <div class="rectangle orange-5"></div>
                        <div class="rectangle orange-6"></div>
                    </div>
                </div>
            </div>
            <div class="video-container">
                <div class="video-placeholder"
                     v-show="!show_video"
                     @click="show_video = true">Посмотреть видео</div>
                <iframe class="video"
                        src="https://www.youtube.com/embed/N9Lx8fpsbPU"
                        frameborder="0"
                        v-show="show_video"
                        allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    import Mixin from '../common/mixin';
    import finance from '../common/finance';

    export default {
        name: "block-warning",
        mixins: [Mixin, finance],
        data() {
            return {
                show_video: false,
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
        &.block-video-container {
        }

        .content-container {
            flex-direction: column;
        }

        .text-card {
            width: 100%;
            max-width: 800px;
            margin-right: 0;
            height: 400px;
            margin-bottom: 40px;
        }
    }

    .mobile {
        &.block-video-container {
            height: unset;
            padding: 40px 0;
        }

        .content-container {
            flex-direction: column;
            padding: 0;
        }

        .text-card {
            width: 100%;
            margin-right: 0;
            height: unset;
            margin-bottom: 40px;
            padding: 20px 20px 20px 10px;
        }

        .text-header {
            margin-bottom: 20px;
            font-size: 24px;
        }
        .text-ending {
            margin-top: 20px;
        }
        .rectangle {
            width: 20px;
            height: 20px;
        }
    }

    .block-video-container {
        width: 100%;
        max-width: 1920px;
        margin: auto;
    }

    .content-container {
        width: 100%;
        height: 100%;
        max-width: 1440px;
        padding: 0 40px;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .text-card {
        background: #fff;
        position: relative;
        width: 535px;
        height: 670px;
        padding: 30px 50px 50px 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 16px;
        margin-right: 50px;
    }

    .text-header {
        font-size: 36px;
        font-weight: 500;
        color: $purple-5;
    }

    .text {
        font-style: italic;
        font-weight: 300;
    }

    .text-ending {
        font-style: italic;
    }

    .rectangles {
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
    }
    .rectangle {
        width: 50px;
        height: 50px;
    }
    .row {
        display: flex;
        flex-direction: row;
    }

    .video-container {
        width: 100%;
        max-width: 786px;
        max-height: 535px;
        height: calc(100vw*535/786);
        background: #000;
        position: relative;
    }

    .video {
        width: 100%;
        height: 100%;
    }

    .video-placeholder {
        background: url("../images/for-video.png") no-repeat center;
        background-size: contain;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        text-decoration: underline;
        color: #fff;
        padding-bottom: 20px;
        cursor: pointer;
    }

    .text-parts {
        text-indent: 20px;
        margin-top: 8px;
        &:last-of-type {
            text-indent: 0;
            margin-top: 10px;
        }
    }

    @media screen and (min-width: 1400px) {
        .text-card {
            font-size: 18px;
        }
    }
</style>
