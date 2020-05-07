<template>
    <div class="block block-doctors-container"
         :class="[device_platform]">
        <div class="arrow arrow-left"></div>
        <div class="arrow arrow-right"></div>
        <div class="header-text">Наши врачи</div>
        <div class="main-text">Врачи первой и высшей категорий, кандидаты и доктора медицинских наук, профессора,<br v-if="device_platform === 'desktop'">
            члены-корреспонденты Российской Академии Наук (РАН) – ведущие специалисты в области<br v-if="device_platform === 'desktop'">
            акушерства и гинекологии в России.</div>
        <div class="swiper-container-doctors">
            <div class="swiper-wrapper">
                <div class="swiper-slide"
                     v-for="doctor in doctors"
                     :key="doctor.img">
                    <div class="content-container">
                        <div class="doctor-img">
                            <img :src="doctor.img" alt="">
                        </div>
                        <div class="doctor-panel">
                            <div class="name">{{doctor.name}}</div>
                        </div>
                        <div class="text" v-if="doctor.additional" v-html="doctor.additional"></div>
                        <div class="text" v-html="doctor.speciality"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-purple" @click="getCall({type: 'sale', form:'appointment', text: 'Записаться на прием'})">Записаться на прием</div>
    </div>
</template>


<script>
    import Mixin from '../common/mixin';
    import finance from '../common/finance';
    import Swiper from 'swiper';
    import $ from 'jquery';
    import Inputmask from 'inputmask';

    import data from '../common/doctors';

    export default {
        name: "block-main",
        components: {},
        mixins: [Mixin, finance],
        data() {
            return {
                swiper: null,
                array_of_slides: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            }
        },
        computed: {
            doctors() {
                return data.doctors.map(item => {
                    const nameArr = item.name.split(' ');
                    return {
                        ...item,
                        name: `${nameArr[0]} ${nameArr[1][0]}. ${nameArr[2][0]}.`,
                    }
                })
            }
        },
        mounted() {
            this.initSwiper();
            window.addEventListener('click', event => {
                if (!event.target || !event.target.id) {
                    return;
                }
                if (event.target.id === 'btn-common-1') {
                    this.getCall({type: 'sale', form: 'main'})
                }
            });

        },
        watch: {
            device_platform() {
                if (this.swiper) {
                    this.swiper.destroy();
                    this.swiper = null;
                    this.$nextTick(this.initSwiper);
                }
            }
        },
        methods: {
            getAgreement() {
                this.$emit('getAgreement');
            },
            initSwiper() {
                if (this.swiper) return;
                this.swiper = new Swiper('.swiper-container-doctors', {
                    // loop: this.array_of_slides.length > 4,
                    simulateTouch: false,
                    // autoplay: this.array_of_slides.length > 4 ? {
                    //     delay: 5000,
                    // } : false,

                    slidesPerView: 4,
                    navigation: {
                        nextEl: '.arrow-right',
                        prevEl: '.arrow-left',
                    },
                    breakpoints: {
                        800: {
                            slidesPerView: 1,
                            slidesPerColumn: 2,
                        },
                        1200: {
                          slidesPerView: 2,
                          slidesPerColumn: 2,
                        },
                    }
                });
            },
        }
    }
</script>


<style scoped lang="scss">
    @import "../styles/constants.scss";
    .mobile {
        &.block-doctors-container {
            padding-bottom: 40px;
            height: 1100px;
        }
        .header-text {
            margin-top: 60px;
        }
        .main-text {
            font-size: 14px;
            line-height: 17px;
            margin-bottom: 30px;
        }
        .header-text, .main-text {
            padding: 0 20px;
        }
        .swiper-slide {
            height: 325px;
            display: flex;
            justify-content: center;
        }
        .swiper-container-doctors {
            height: 750px;
            padding-left: 0;
        }
        .content-container {
            height: unset;
            width: 172px;
        }
        .doctor-img {
            height: 190px;
        }
        .doctor-panel {
            height: 29px;
        }
        .name {
            font-size: 16px;
        }
        .text {
            font-size: 14px;
            line-height: 17px;
        }
        .name,.text {
            padding: 5px 5px;
        }
        .btn-purple, .btn-purple:hover {
            width: 275px;
        }
        .arrow {
            width: 40px;
        }
    }

    .tablet {
        &.block-doctors-container {
            padding-bottom: 50px;
        }
        .header-text {
            margin-top: 50px;
        }
        .swiper-slide {
            height: 400px;
            display: flex;
            justify-content: center;
        }
        .content-container {
            height: 360px;
            width: unset;
        }

        .swiper-container-doctors {
            height: 800px;
            padding: 0;
        }
    }

    .block-doctors-container {
        width: 100%;
        max-width: 1920px;
        position: relative;
        background: #e5e5e5;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 100px;
    }

    .swiper-container-doctors {
        width: 100%;
        max-width: 1400px;
        overflow: hidden;
        margin: auto;
        padding: 0 0 0 40px;
        box-sizing: content-box;
    }

    .swiper-slide {
        width: 25%;
    }

    .header-text, .main-text {
        width: 100%;
        max-width: 1440px;
        margin: auto;
        padding: 0 40px;
    }

    .header-text {
        margin-top: 120px;
    }

    .main-text {
        margin-top: 16px;
        margin-bottom: 70px;
        font-size: 18px;
        line-height: 21px;
    }

    .content-container {
        position: relative;
        width: 200px;
        height: 400px;
        display: flex;
        flex-direction: column;
    }

    .doctor-img {
        width: 100%;
        height: 210px;
        margin-right: 20px;
        background: #fff;
        text-align: center;

        img {
            max-width: 100%;
            max-height: 100%;
        }
    }

    .doctor-panel {
        width: 100%;
        height: 32px;
        background: url('../images/doctor-rectangle.svg') no-repeat center;
        background-size: cover;
    }

    .name {
        color: #fff;
        padding: 5px 10px;
        font-size: 18px;
        line-height: 25px;
    }

    .text {
        padding: 5px 10px;
        font-size: 14px;
        line-height: 17px;
        max-width: 210px;
    }

    .arrow {
        position: absolute;
        top: 50%;
        width: 67px;
        height: 40px;
        transform: translateY(-50%);
        z-index: 5;
        cursor: pointer;
        outline: none;
        &:active {
            opacity: .5;
        }
    }

    .arrow-left {
        background: url("../images/utils/arrow-doctors.svg") no-repeat center;
        background-size: contain;
        transform: rotate(-180deg);
        left: 0;
    }

    .arrow-right {
        background: url("../images/utils/arrow-doctors.svg") no-repeat center;
        background-size: contain;
        transform: translateY(0%);
        right: 0;
    }

    .swiper-button-disabled {
        opacity: 0.5;
    }
</style>
