<template>
    <div id="app">
        <block-header id="header"
                      v-on="block_handlers"></block-header>
        <block-main id="main"
                    v-on="block_handlers"></block-main>
        <block-warning></block-warning>
        <block-advantages id="advantages"
                          v-on="block_handlers"></block-advantages>
        <block-offer id="offer"
                          v-on="block_handlers"></block-offer>
        <block-price id="price"
                          v-on="block_handlers"></block-price>
        <block-offer-info id="info"
                          v-on="block_handlers"></block-offer-info>
        <block-doctors id="doctors"
                       v-on="block_handlers"></block-doctors>
        <block-hospitals id="hospitals"
                       v-on="block_handlers"></block-hospitals>
        <block-reviews id="reviews"
                       v-on="block_handlers"></block-reviews>
        <block-contract id="contract"
                        v-on="block_handlers"></block-contract>
        <block-footer v-on="block_handlers"></block-footer>
        <full-get v-if="show.get"
                  :data="data"
                  @close="closeThings"
                  v-on="block_handlers">{{data.text}}</full-get>
        <full-thanks v-if="show.thanks"
                     @close="closeThings">
        </full-thanks>
    </div>
</template>

<script>
    import BlockHeader from './components/block-header';
    import BlockMain from './components/block-main';
    import BlockAdvantages from './components/block-advantages';
    import BlockWarning from './components/block-warning'
    import BlockOffer from './components/block-offer';
    import BlockPrice from './components/block-price';
    import BlockOfferInfo from './components/block-offer-info';
    import BlockDoctors from './components/block-doctors';
    import BlockHospitals from './components/block-hospitals';
    import BlockReviews from './components/block-reviews';
    import BlockContract from './components/block-contract';
    import BlockFooter from './components/block-footer';
    import FullGet from './components/full-get';
    import FullThanks from './components/full-thanks';
    import Mixin from './common/mixin';

    import axios from 'axios';
    import Send from './common/send';
    import $ from 'jquery';
    import smoothScrollTo from "./common/smoothScrollTo";

    export default {
        name: 'app',
        components: {
            BlockHeader,
            BlockMain,
            BlockAdvantages,
            BlockWarning,
            BlockOffer,
            BlockPrice,
            BlockOfferInfo,
            BlockDoctors,
            BlockHospitals,
            BlockReviews,
            BlockContract,
            BlockFooter,
            FullGet,
            FullThanks
        },
        mixins: [Mixin],
        data: function () {
            return {
                show: {
                    agreement: false,
                    load: false,
                    get: false,
                    thanks: false,
                    coupon: false
                },
                data: {},
            };
        },
        mounted() {
            $('html').on('keyup', (event) => {
                if (event.keyCode === 27) {
                    this.closeThings();
                }
            });
            history.scrollRestoration = 'manual';
            let hash = window.location.hash.replace('#', '');
            if (hash) {
                this.scrollTo(hash);
            }
        },
        methods: {
            closeThings() {
                this.show.get = false;
                this.show.thanks = false;
                this.show.agreement = false;
                this.show.coupon = false;
                this.data = {};
                this.unblockScroll();
            },
            closeAgreement() {
                this.show.agreement = false;
                if (!this.show.get) {
                    this.unblockScroll();
                }
            },
            getAgreement() {
                this.show.agreement = true;
                this.blockScroll();
            },
            handleGetCall(data) {
                this.show.get = true;
                this.data = data;
                this.blockScroll();
            },
            handleGetCoupon(data) {
                this.show.coupon = true;
                this.data = data;
                this.blockScroll();
            },
            scrollTo(where) {
                let target = document.getElementById(where);
                if ($('#' + where).offset()) { // additional check (because of #ck_auto_lg)
                    smoothScrollTo($('#' + where).offset().top);
                }
            },
            sendEmail(event) {
                let tosend = {
                    email: event.email,
                };

                if (tosend.email.toString().length > 10) {
                    this.closeThings();
                    this.show.thanks = true;

                    return axios.post('/back/coupon/', {...tosend});
                }
            },
            callThere(event) {
                let cKeeper = this.CONSTANTS.cKeeper,
                    manager_phone = this.CONSTANTS.need_manager_phone ?
                        $('#phone').text().replace(/\s/g, '\u00A0').replace(/-/g, '\u2011').replace(/\D+/g, "") : '',
                    req = Send(event, this.data, cKeeper, manager_phone);

                this.show.load = true;
                if (this.data.form === 'appointment') {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'Запись на прием'
                    })
                } else if (this.data.form === 'callback') {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'Заказ звонка'
                    })
                } else if (this.data.form === 'question') {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'Задать вопрос'
                    })
                }

                if (cKeeper === 'actioncall') {
                    const finishCall = () => {
                        this.closeThings();
                        this.show.load = false;
                        this.show.thanks = true;
                        if (typeof window.dataLayer !== 'undefined') {
                            window.dataLayer.push({
                                event: "callkeeper-call_order-ckaction",
                                eventCategory: "callkeeper",
                                eventAction: "call_order",
                                eventLabel: "ckaction"
                            });
                        }
                        console.log('done');
                    };

                    if (!req) {
                        finishCall();
                    } else {
                        req.finally(finishCall);
                    }

                } else {
                    this.closeThings();
                    this.show.load = false;
                    this.show.thanks = true;
                }
            }
        },
        computed: {
            block_handlers() {
                return {
                    'getAgreement': this.getAgreement,
                    'scrollTo': this.scrollTo,
                    'callBack': this.callThere,
                    'sendEmail': this.sendEmail,
                    'getCall': this.handleGetCall,
                    'getCoupon': this.handleGetCoupon
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #app {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
