<template>
  <div class="block block-contract-container"
       :class="[device_platform]">
      <div class="top-container">
          <div class="row">
              <div class="rectangle orange-2"></div>
              <div class="rectangle orange-3"></div>
              <div class="rectangle orange-5"></div>
              <div class="rectangle orange-6"></div>
          </div>
          <div class="row">
              <div class="rectangle orange-1"></div>
              <div class="rectangle orange-4"></div>
          </div>
          <div class="rectangle orange-2"></div>
          <div class="rectangle yellow-1"></div>
      </div>
    <div class="content-container">
      <div class="text-container">
        <div class="main-text">Заключая контракт на роды в «Мать и дитя», вы можете быть уверены, что доверяете заботу о
          собственном здоровье и безопасности малыша ведущим специалистам в области акушерства в России
        </div>
        <div class="header cocon-font"> Мы поможем вам быть счастливыми родителями здоровых детей!</div>
        <div class="btn-purple" @click="getCall({type: 'sale', form:'appointment', text: 'Записаться на прием'})">Записаться на прием
        </div>
      </div>
    </div>
      <div class="row bottom">
          <div class="rectangle orange-6"></div>
          <div class="rectangle orange-5"></div>
          <div class="rectangle orange-4"></div>
      </div>
  </div>
</template>


<script>
import Mixin from '../common/mixin';
import finance from '../common/finance';
import $ from 'jquery';

export default {
    name: "block-contract",
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


<style scoped
       lang="scss">
@import "../styles/constants.scss";

.mobile {
  &.block-contract-container {
      height: 800px;
  }

  .content-container {
    background: url("../images/backgrounds/bg-contract-mobile.png") no-repeat center bottom;
    background-size: cover;
  }

  .text-container {
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    font-size: 18px;
  }

  .header {
    font-size: 24px;
  }

  .main-text {
    font-size: 16px;
    line-height: 19px;
    padding-right: 60px;
  }

  .btn-purple, .btn-purple:hover {
    width: 275px;
  }

    .rectangle {
        width: 60px;
        height: 60px;
    }
}

.tablet {
  &.block-contract-container {
  }

  .content-container {
    background: url("../images/backgrounds/bg-contract-tablet.png") no-repeat 80% bottom;
    background-size: cover;
  }

  .text-container {
    padding-left: 70px;
  }

  .main-text, .header {
    max-width: 550px;
  }
}

.block-contract-container {
  width: 100%;
  max-width: 1920px;
  position: relative;
}

.content-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: url("../images/backgrounds/bg-contract-desktop.png") no-repeat center bottom;
  background-size: cover;
}

.text-container {
  width: 100%;
  max-width: 1440px;
  margin: auto;
  color: #fff;
  padding: 0 40px;
}

.header {
  font-size: 30px;
  font-weight: 500;
  max-width: 850px;
  line-height: 33px;
}

.main-text {
  font-size: 22px;
  line-height: 126.8%;
  margin-top: 25px;
  margin-bottom: 50px;
  width: 100%;
  max-width: 895px;
}

.btn-purple {
    margin-top: 85px;
}

.top-container {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
}

.row {
    display: flex;
    flex-direction: row;
    &.bottom {
        position: absolute;
        bottom: 0;
        left: 0;
    }
}

.rectangle {
    height: 90px;
    width: 90px;
}
</style>
