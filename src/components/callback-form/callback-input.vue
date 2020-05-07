<template>
    <form class="callback-form CKiForm"
          @submit.prevent="submitThis"
          name="my_form_call_back_1"
          :class="[device_platform, {'horizontal': horizontal}, form_class]">
        <div class="input-block">
            <input name=”name”
                   type="text"
                   placeholder="Имя"
                   :title="'Введите Ваше имя'"
                   v-model="name"
                   ref="name"
                   required>
            <input name=”tel”
                   type="tel"
                   placeholder="Телефон"
                   :title="'Введите номер телефона'"
                   v-model="phone"
                   ref="phone"
                   v-mask
                   :pattern="'.*[0-9]{1}.*[0-9]{3}.*[0-9]{3}.*[0-9]{4}'"
                   required>
            <input name=”email”
                   type="email"
                   placeholder="E-mail"
                   :title="'Введите адрес электронной почты'"
                   v-model="email"
                   ref="email"
                   v-if="data.form === 'question'"
                   required>
            <textarea name=”msg”
                      placeholder="Cообщение"
                      :title="'Введите сообщение'"
                      v-model="msg"
                      ref="msg"
                      v-if="data.form === 'question'"
                      required></textarea>
            <div class="agreement"
                 v-if="CONSTANTS.need_agreement">
                <checkbox v-model="acceptance"></checkbox>
                <div class="agreement-confirm">
                    <a href="https://mamadeti.ru/clinics/moscow/clinical-hospital-lapino/information/"
                       target="_blank">Отправляя заявку вы даете согласие на обработку персональных данных и
                        соглашаетесь с политикой конфеденциальности</a></div>
            </div>
            <button type="submit"
                    :disabled="!acceptance"
                    class="btn-purple CKFormTrigger"
                    :class="[{disabled: !acceptance}]"
                    ref="submitter">
                <slot></slot>
            </button>
        </div>
    </form>
</template>

<script>
    import Mixin from '@/common/mixin';
    import Mask from '@/common/mask';
    import Checkbox from '../checkbox';

    export default {
        name: "callback-input",
        components: {Checkbox},
        directives: {Mask},
        mixins: [Mixin],
        props: ['horizontal', 'data', 'form_class'],
        data() {
            return {
                acceptance: true,
                name: '',
                msg: '',
                email: '',
                phone: ''
            }
        },
        watch: {
            name: function() {
                if (this.name.trim().length >= 3) {
                    this.$refs.name.setCustomValidity('');
                }
            },
            email: function() {
                if (this.validEmail(this.email)) {
                    this.$refs.email.setCustomValidity('');
                }
            },
        },
        computed: {
            valid_email() {
                return this.validEmail(this.email);
            }
        },
        methods: {
            validEmail(email) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            submitThis(event) {
                if (this.$refs.phone.validity.valueMissing || !this.$refs.phone.validity.valid) {
                    this.$refs.phone.setCustomValidity('Введите номер телефона');
                }
                if (!this.$refs.phone.validity.valueMissing && !this.$refs.phone.validity.patternMismatch) {
                    this.$refs.phone.setCustomValidity('');
                }
                if (this.name.trim().length <= 3) {
                    this.$refs.name.setCustomValidity('Введите Ваше имя');
                }

                if (this.data.form === 'question') {
                    if (!this.validEmail(this.email)) {
                        this.$refs.email.setCustomValidity('Введите корректный адрес электронной почты');
                    }
                    if (this.acceptance && this.$el.reportValidity() && this.validEmail(this.email)) {
                        if (typeof ckForms !== 'undefined') {
                            ckForms.send(this.$el);
                        }

                        this.$emit('callBack', {
                            name: this.name,
                            phone: this.phone,
                            data: this.data,
                            email: this.email,
                            msg: this.msg || '',
                        });
                    }
                } else if (this.acceptance && this.$el.reportValidity() && this.name.trim().length) {
                    if (typeof ckForms !== 'undefined') {
                        ckForms.send(this.$el);
                    }

                    this.$emit('callBack', {
                        name: this.name,
                        phone: this.phone,
                        data: this.data,
                    });
                }
            },
            getAgreement() {
                this.$emit('getAgreement');
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../../styles/constants.scss";

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    .tablet {

    }

    .mobile {

    }

    .callback-form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        &.horizontal {
            .input-block {
                flex-direction: row;

                input, button {
                    width: 45%;
                }
            }
        }

        &:not(.horizontal) {
            .input-block {
                flex-direction: column;

                input, button {
                    width: 100%;
                }
            }
        }
    }

    .input-block {
        width: 100%;
        display: flex;
    }

    .agreement {
        display: flex;
        align-items: flex-start;
        margin-top: 10px;
        margin-bottom: 40px;
    }

    .agreement-confirm {
        font-size: 10px;
        line-height: 12px;
        a {
            text-decoration: none;
            color: #999;
        }
    }

    input {
        border: 1px solid #000;
        box-sizing: border-box;
        padding: 11px 16px;
        margin: 5px 0;
        font-size: 18px;
        &::placeholder {
            overflow: visible;
            font-family: 'HelveticaNeueCyr', sans-serif;
        }
    }

    textarea {
        width: 100%;
        max-height: 126px;
        height: 100px;
        border: 1px solid #000;
        text-align: left;
        color: black;
        cursor: text;
        background: transparent;
        outline: none;
        padding: 11px 16px;
        margin: 5px 0;
        font-size: 18px;

        &::placeholder {
            overflow: visible;
            font-family: 'HelveticaNeueCyr', sans-serif;
        }
    }


</style>
