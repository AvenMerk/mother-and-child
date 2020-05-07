<template>
    <div class="block-header-container"
         :class="device_platform">
        <div class="content-container">
            <div class="logo-name-container">
                <div class="logo"
                     @click="getCall({type: 'sale', form:'callback', text: 'Заказать звонок'})"></div>
            </div>
            <div class="navbar cocon-font" v-if="device_platform === 'desktop'">
                <div class="nav-item" @click="scrollTo('advantages')">Преимущества</div>
                <div class="nav-item" @click="scrollTo('price')">Стоимость</div>
                <div class="nav-item" @click="scrollTo('doctors')">Врачи</div>
                <div class="nav-item" @click="scrollTo('hospitals')">Роддома</div>
                <div class="nav-item" @click="scrollTo('reviews')">Отзывы</div>
            </div>
            <span class="rodi_call_phone_800_1"><a class="phone"
               v-if="device_platform === 'desktop'"
               :href="'tel:+' + CONSTANTS.phone_raw">
                {{CONSTANTS.phone}}
            </a></span>
            <div class="red-menu-btn"
                 :class="{'active': show_menu}"
                 v-if="device_platform !== 'desktop'"
                 @click="showMenu"></div>
        </div>
        <transition name="slide-down">
            <div class="navbar cocon-font"
                 v-if="show_menu && device_platform !== 'desktop'">
                <div class="nav-item" @click="scrollTo('advantages')">Преимущества</div>
                <div class="nav-item" @click="scrollTo('price')">Стоимость</div>
                <div class="nav-item" @click="scrollTo('doctors')">Врачи</div>
                <div class="nav-item" @click="scrollTo('hospitals')">Роддома</div>
                <div class="nav-item" @click="scrollTo('reviews')">Отзывы</div>
                <div class="nav-item"><span class="rodi_call_phone_800_1"><a class="phone"
                                         :href="'tel:+' + CONSTANTS.phone_raw">
                    {{CONSTANTS.phone}}
                </a></span></div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Mixin from '../common/mixin';

    export default {
        name: 'block-header',
        components: {},
        directives: {},
        mixins: [Mixin],
        data() {
            return {
                show_menu: false,
            }
        },
        methods: {
            scrollTo(where) {
                let newhash = '#' + where;
                history.replaceState(null, null, newhash);
                this.$emit('scrollTo', where);
            },
            getCall(data) {
                this.$emit('getCall', data);
            },
            showMenu() {
                this.show_menu = !this.show_menu;
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/constants.scss";

    .tablet {
        &.block-header-container {
            position: absolute;
            height: 80px;
        }
        .navbar {
            width: 100%;
            flex-direction: column;
            overflow: hidden;
            align-items: center;
            justify-content: center;
            margin-left: 0;
        }
        .nav-item {
            width: 100%;
            padding: 10px 0;
            margin-right: 0;
            text-align: center;
            border-bottom: 1px solid #ccc;
            &:first-of-type {
                border-top: 1px solid #ccc;
            }
        }
    }

    .mobile {
        &.block-header-container {
            position: absolute;
        }
        .content-container {
            justify-content: space-between;
            padding: 0 10px;
            height: 80px;
        }
        .logo {
            width: 200px;
            height: 47px;
        }
        .navbar {
            width: 100%;
            flex-direction: column;
            overflow: hidden;
            align-items: center;
            justify-content: center;
            margin-left: 0;
        }
        .nav-item {
            width: 100%;
            padding: 10px 0;
            margin-right: 0;
            text-align: center;
            border-bottom: 1px solid #ccc;
            &:first-of-type {
                border-top: 1px solid #ccc;
            }
        }
    }

    .block-header-container {
        width: 100%;
        height: 105px;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
    }

    .content-container {
        max-width: 1440px;
        width: 100%;
        margin: auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
    }

    .logo-name-container {
        display: flex;
        align-items: center;
    }

    .logo {
        background: url("../images/new_logo.jpg") no-repeat center;
        background-size: contain;
        width: 231px;
        height: 54px;
        cursor: pointer;
    }

    .navbar {
        display: flex;
        flex-direction: row;
        width: 600px;
        justify-content: space-between;
        margin: 0 50px;
        font-family: 'Cocon', sans-serif;
    }

    .nav-item {
        font-size: 18px;
        line-height: 25px;
        font-weight: 500;
        cursor: pointer;
        background: #fff;
    }

    .red-menu-btn {
        background: url("../images/utils/btn-hamburger.png") no-repeat center;
        background-size: contain;
        width: 26px;
        height: 15px;
        cursor: pointer;
        &.active {
            background: url("../images/utils/close.png") no-repeat center;
            height: 26px;
        }
    }

    .phone {
        color: $purple-5;
        font-size: 20px;
        font-weight: bold;
    }
</style>
