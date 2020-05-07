<template>
  <div class="block block-contract-container"
       :class="[device_platform]">
    <div class="header-text">Наши роддома</div>
    <div class="content-container purple-4">
      <div class="arrow-underlayer purple-2">
        <div class="arrow arrow-right-hospital" v-if="device_platform === 'desktop'"></div>
      </div>
      <div class="content-wrapper top">
        <div class="hospital-container">
          <div class="hospital-name">Клинический госпиталь MD GROUP</div>
          <div class="geo-container">
            <div class="geo-icon"></div>
            <div class="address">Москва, Севастопольский проспект, д. 24, к. 1.</div>
          </div>
          <div class="phone-container">
            <div class="phone-icon yellow"></div>
            <span class="rodi_call_phone_800_2">
              <a class="phone"
                 :href="'tel:+' + CONSTANTS.phone_raw">
                {{CONSTANTS.phone}}
              </a>
            </span>
          </div>
          <a href="https://www.instagram.com/aist_i_kapusta/" target="_blank" class="insta-container inst-link">
            <div class="icon-inst yellow"></div>
            <div>@aist_i_kapusta</div>
          </a>
        </div>
        <div class="swiper-container-wrapper">
          <div class="arrow arrow-right-hospital" v-if="device_platform !== 'desktop'"></div>
          <div class="rectangle purple-1" v-if="device_platform === 'desktop'"></div>
          <div class="rectangle purple-2">
            <div class="swiper-container-top">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="slide in swiper_array_top" :class="'_' + slide">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-container yellow-1">
      <div class="content-wrapper bottom">
        <div class="arrow-underlayer orange-5" v-if="device_platform !== 'desktop'">
        </div>
        <div class="hospital-container">
          <div class="hospital-name">Клинический госпиталь Лапино</div>
          <div class="geo-container">
            <div class="geo-icon"></div>
            <div class="address">МО, Одинцовский район, Лапино, 1-ое Успенское шоссе, д. 111</div>
          </div>
          <div class="phone-container">
            <div class="phone-icon black"></div>
            <span class="rodi_call_phone_495_1">
              <a class="phone"
                 :href="'tel:+' + CONSTANTS.phone_raw_2">
                {{CONSTANTS.phone_2}}
              </a>
            </span>
          </div>
          <a href="https://www.instagram.com/lapinomed/" target="_blank" class="inst-link insta-container">
            <div class="icon-inst black"></div>
            <div>@lapinomed</div>
          </a>
          <div class="address">КГ «Лапино» временно принимает только пациентов с подозрением <span style="white-space: nowrap"> на COVID-19,</span> ОРВИ и внебольничной пневмонией.</div>
          <div class="address additional">*Обращаем внимание, что врачи Клинического госпиталя Лапино временно принимают пациентов в Клиническом госпитале <span style="white-space: nowrap"> MD GROUP.</span>  Уточняйте информацию по телефону.</div>
        </div>
        <div class="swiper-container-wrapper">
          <div class="arrow-underlayer orange-5">
            <div class="arrow arrow-right-hospital-bottom"></div>
          </div>
          <div class="rectangle orange-2" v-if="device_platform === 'desktop'"></div>
          <div class="rectangle orange-5">
            <div class="swiper-container-bottom">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="slide in swiper_array_bottom" :class="'_' + slide"></div>
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
import Swiper from 'swiper';

export default {
    name: "block-hospitals",
    components: {},
    mixins: [Mixin, finance],
    data() {
        return {
            swiper_top: null,
            swiper_bottom: null,
            swiper_array_top: [1,2,3,4,5,6,7,8,9,10,11,12,13],
            swiper_array_bottom: [1,2,3,4,5,6,7,8,9,10,11,12]
        }
    },
    mounted() {
        this.initSwiperTop();
        this.initSwiperBottom();
    },
    watch: {
        device_platform() {
            if (this.swiper_top) {
                this.swiper_top.destroy();
                this.swiper_top = null;
                this.$nextTick(this.initSwiperTop);
            }
            if (this.swiper_bottom) {
                this.swiper_bottom.destroy();
                this.swiper_bottom = null;
                this.$nextTick(this.initSwiperBottom);
            }
        }
    },
    methods: {
        getAgreement() {
            this.$emit('getAgreement');
        },
        initSwiperTop() {
            if (this.swiper_top) return;
            this.swiper_top = new Swiper('.swiper-container-top', {
                loop: this.swiper_array_top.length > 2,
                simulateTouch: true,
                // autoplay: this.array_of_slides.length > 4 ? {
                //     delay: 5000,
                // } : false,

                slidesPerView: 'auto',
                navigation: {
                    nextEl: '.arrow-right-hospital',
                    // prevEl: '.arrow-left',
                },
            });
        },
        initSwiperBottom() {
            if (this.swiper_bottom) return;
            this.swiper_bottom = new Swiper('.swiper-container-bottom', {
                loop: this.swiper_array_bottom.length > 2,
                simulateTouch: true,
                // autoplay: this.array_of_slides.length > 4 ? {
                //     delay: 5000,
                // } : false,

                slidesPerView: 'auto',
                navigation: {
                    nextEl: '.arrow-right-hospital-bottom',
                },
            });
        },
    }
}
</script>


<style scoped
       lang="scss">
@import "../styles/constants.scss";

.mobile {
  &.block-contract-container {
    height: unset;
  }
  .header-text {
    margin-top: 80px;
    margin-bottom: 40px;
  }
  .content-container {
    height: 450px;
    &.yellow-1 {
      height: 680px;
    }
  }
  .hospital-container, .swiper-container-wrapper {
    width: 100%;
  }
  .hospital-container {
    padding-left: 20px;
    padding-right: 40px;
  }
  .hospital-name {
    font-size: 18px;
    line-height: 22px;
  }
  .address {
    font-size: 16px;
    line-height: 19px;
  }
  .rectangle {
    background-color: unset;
    &.purple-2, &.orange-5 {
      width: calc(100% - 40px);
    }
  }
  .top {
    padding-right: 0;
  }
  .bottom {
    .hospital-container {
      padding-left: 20px;
      position: relative;
      z-index: 2;
    }
  }
  .content-wrapper {
    flex-direction: column;
    justify-content: space-between;
    padding-left: 0;
  }
  .swiper-container-bottom {
    margin-left: 0;
  }
  .arrow-underlayer {
    /*background: none;*/
    width: 40px;
  }
}

.tablet {
  &.block-contract-container {
  }
  .content-container {
    height: 450px;
    &.yellow-1 {
      height: 550px;
    }
  }
  .hospital-container, .swiper-container-wrapper {
    width: 100%;
  }
  .hospital-container {
    padding-left: 40px;
  }
  .rectangle {
    background-color: unset;
  }
  .top {
    &.content-wrapper {
      padding-right: 0;
    }
  }
  .bottom {
    &.content-wrapper {
    }
    .hospital-container {
      padding-right: 100px;

    }
  }
  .content-wrapper {
    flex-direction: column;
    justify-content: space-between;
    padding-left: 0;
  }
  .swiper-container-bottom {
    margin-left: 0;
  }
  .arrow-underlayer {
    /*background: none;*/
  }
}

.header-text {
  margin: 120px auto 80px;
  padding-left: 40px;
  width: 100%;
  max-width: 1440px;
}

.block-contract-container {
  width: 100%;
  max-width: 1920px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.content-container {
  position: relative;
  width: 100%;
  height: 250px;
  display: flex;
}

.content-wrapper {
  width: 100%;
  max-width: 1440px;
  padding-left: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}

.hospital-container {
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 20px;
  width: 50%;
}

.hospital-name {
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
  margin-bottom: 10px;
}

.geo-container, .phone-container, .insta-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.address {
  font-size: 18px;
  line-height: 21px;
}
.geo-icon {
  background-size: contain;
  min-width: 10px;
  width: 10px;
  height: 14px;
  margin-right: 10px;
}

.phone-icon {
  background-size: contain;
  width: 14px;
  height: 14px;
  margin-right: 6px;
}

.phone {
  font-size: 18px;
  font-weight: 500;
}

.icon-inst {
  background-size: contain;
  width: 14px;
  height: 14px;
  margin-right: 6px;
}

.inst-link {
  font-size: 18px;
  line-height: 21px;
}

.top {
  padding-right: 90px;
  .hospital-name {
    color: $yellow-1;
  }
  .address {
    color: #fff;
  }
  .geo-icon {
    background: url("../images/utils/geo-yellow.svg") no-repeat center;
  }
  .phone-icon {
    background: url("../images/utils/phone-yellow.svg") no-repeat center;
  }
  .icon-inst {
    background: url("../images/utils/inst-yellow.svg") no-repeat center;
  }
  .inst-link {
    color: #fff;
  }
  .swiper-slide {
    width: 360px;
    height: 250px;
    @for $i from 1 through 13 {
      &._#{$i} {
        background: url("../images/hospitals/md/#{$i}.jpg") no-repeat center;
        background-size: auto 250px;
      }
    }
  }
  .phone {
    color: #fff;
  }
}

.bottom {
  flex-direction: row-reverse;
  padding-left: 0;
  .hospital-container {
    padding-left: 40px;
  }
  .address, .inst-link {
    color: $purple-5;
  }
  .geo-icon {
    background: url("../images/utils/geo-black.svg") no-repeat center;
  }
  .phone-icon {
    background: url("../images/utils/phone-black.svg") no-repeat center;
  }
  .icon-inst {
    background: url("../images/utils/inst-black.svg") no-repeat center;
  }
  .swiper-slide {
    width: 360px;
    height: 250px;
    @for $i from 1 through 12 {
      &._#{$i} {
        background: url("../images/hospitals/lapino/#{$i}.jpg") no-repeat center;
        background-size: auto 250px;
      }
    }
  }
  .phone {
    color: $purple-5;
  }
}

.swiper-container-wrapper {
  width: 50%;
  overflow: hidden;
  display: flex;
  position: relative;
}
.swiper-container-top, .swiper-container-bottom {
  overflow: hidden;
  width: 100%;
}

.swiper-container-bottom {
  margin-left: 30px;
}

.rectangle {
  height: 100%;
  position: relative;
  &.purple-1 {
    width: 60px;
    margin-right: 30px;
  }
  &.purple-2 {
    width: calc(100% - 90px);
  }
  &.orange-5 {
    width: calc(100% - 60px);
  }
  &.orange-2 {
    width: 60px;
  }
}

.arrow {
  position: absolute;
  top: 50%;
  width: 56px;
  height: 16px;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  outline: none;
  &:active {
    opacity: .5;
  }
}

.arrow-left {
  background: url("../images/utils/hospitals-arrow.svg") no-repeat center;
  background-size: contain;
  transform: rotate(-180deg);
  left: 0;
}

.arrow-right-hospital, .arrow-right-hospital-bottom {
  background: url("../images/utils/hospitals-arrow.svg") no-repeat center;
  background-size: contain;
  transform: translateY(0%);
  right: 20px;
}

.arrow-underlayer {
  height: 100%;
  width: 100px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
}
.additional {
  margin-top: 10px;
  font-size: 14px;
  font-style: italic;
  font-weight: 300;
}
</style>
