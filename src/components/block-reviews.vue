<template>
    <div class="block-reviews-container" :class="device_platform">
        <div class="content-container">
            <div class="header-text">Отзывы</div>
            <div class="column-container">
                <div class="column">
                    <div class="column-header cocon-font">Отзывы</div>
                    <div class="reviews-container">
                        <div class="review-wrapper"
                             v-for="(review, index) in reviews">
                            <div class="review-header-wrapper">
                                <div class="name">{{review.name}}</div>
                                <div class="arrow"></div>
                                <div class="doctor-img" :class="review.id"></div>
                                <div class="doctor">{{review.doctor}}</div>
                            </div>
                            <div class="short-text"
                                 v-if="current.review !== index"
                                 @click="setCurrent('review', index)"
                                 v-html="review.short_text"></div>
                            <div class="review-text full-text"
                                 v-if="current.review === index"
                                 @click="setCurrent('review', index)"
                                 v-html="review.text"></div>
                        </div>
                    </div>
                    <a href="https://mamadeti.ru/reviews/" target="_blank">
                        <div class="redirect-btn">Все истории</div></a>
                </div>
                <div class="column">
                    <div class="column-header cocon-font">Счастливые истории</div>
                    <div class="reviews-container">
                        <div class="review-wrapper"
                             v-for="(story, index) in stories">
                            <div class="name">{{story.header}}</div>
                            <div class="review-header-wrapper">
                                <div class="doctor black">Врач:</div>
                                <div class="doctor-img" :class="story.id"></div>
                                <div class="doctor">{{story.doctor}}</div>
                            </div>
                            <div class="short-text"
                                 v-if="current.story !== index"
                                 @click="setCurrent('story', index)"
                                 v-html="story.short_text"></div>
                            <div class="review-text full-text"
                                 v-if="current.story === index"
                                 @click="setCurrent('story', index)"
                                 v-html="story.text"></div>
                        </div>
                    </div>
                    <a href="https://mamadeti.ru/story/" target="_blank">
                        <div class="redirect-btn">Все отзывы</div></a>
                </div>
                <div class="column">
                    <div class="column-header cocon-font">Вопросы-ответы</div>
                    <div class="reviews-container">
                        <div class="review-wrapper"
                             v-for="(question, index) in questions">
                            <div class="name question">{{question.name}}</div>
                            <div class="review-text"
                                 :class="{'full-text': current.question === index}"
                                 @click="setCurrent('question', index)"
                                 v-html="question.question"></div>
                            <div class="review-text answer"
                                 :class="{'full-text': current.answer === index}"
                                 @click="setCurrent('answer', index)"
                                 v-html="question.answer"></div>
                        </div>
                    </div>
                    <a href="https://mamadeti.ru/qa/" target="_blank">
                        <div class="redirect-btn">Все вопросы</div></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Mixin from '../common/mixin';
    import finance from '../common/finance';

    export default {
        name: "block-reviews",
        mixins: [Mixin, finance],
        data() {
            return {
                current: {
                  review: '',
                  story: '',
                  question: '',
                  answer: '',
                },
                reviews: [
                    {
                        id: 'klekovkina',
                        name: 'Анастасия',
                        doctor: 'Клековкина О. Ф.',
                        short_text: 'Очень рада, что мне посчастливилось рожать и вести последние недели Беременности у Ольги Фёдоровны! Она...',
                        text: 'Очень рада, что мне посчастливилось рожать и вести последние недели Беременности у Ольги Фёдоровны! Она располагает к себе , с ней комфортно , а самое главное - она профессионал в своём деле и доверие к ней возникло с первой встречи ! Спасибо Вам большое !!!!!!!!!!!!! За следующим только к Вам !!!!',
                    },
                    {
                        id: 'kosolapov',
                        name: 'Людмила',
                        short_text: 'Хотим выразить огромную благодарность за появление на свет 16.02.2020 нашей...',
                        doctor: 'Косолапов Г. С.',
                        text: 'Хотим выразить огромную благодарность за появление на свет 16.02.2020 нашей долгожданной доченьки Григорию Сергеевичу Косолапову. Спасибо Вам огромное за оперативность и внимательное отношение! Спасибо за Ваш труд, понимание, чуткое отношение, грамотный подход, профессионализм. Хочется пожелать Вам дальнейших успехов в работе, карьерного роста, только положительных эмоций, ну и конечно же побольше будущих счастливых родителей.',
                    },
                    {
                        id: 'ulanova',
                        name: 'Юлия',
                        doctor: 'Уланова О. Ю.',
                        short_text: 'Ольга Юрьевна, Вы врач от Бога! Внимательный и очень грамотный специалист. Вы...',
                        text: 'Ольга Юрьевна, Вы врач от Бога! Внимательный и очень грамотный специалист. Вы невероятная женщина. С Вами всегда легко и комфортно. Мои роды прошли просто незабываемо, спасибо Вам за лучшие роды и нашу принцессу! Это уже 3-я девочка в нашей большой семье, которая появилась на свет благодаря Вам! Спасибо огромное! Мы вас очень любим!',
                    },
                    {
                        id: 'larina',
                        name: 'Ирина',
                        doctor: 'Ларина Е. Б.',
                        short_text: 'Хочется выразить благодарность, признательность и просто сказать СПАСИБО, Екатерине Борисовне Лариной! За...',
                        text: 'Хочется выразить благодарность, признательность и просто сказать СПАСИБО, Екатерине Борисовне Лариной! За прекрасное время проведённое в ожидании нашего малыша и за чудесное рождение. Не смотря на достаточно сложные роды и на внеплановое кесарево сечение, тем не менее роды оставили только положительное впечатление. Екатерина Борисовна, спасибо Вам за ваше чуткое отношение, огромное терпение и профессионализм. Если Бог даст .... то только к Вам. Хочется пожелать Вам успехов в работе и человеческого счастья!!!\n' +
                                'Так же хочется сказать спасибо всему коллективу КГ «Лапино», спасибо что Вы есть.',
                    },
                    {
                        id: 'logunova',
                        name: 'Яна',
                        doctor: 'Логунова А. О.',
                        short_text: 'Финал нашей истории был исключительно положительным) Анна Олеговна положила нам под ёлку...',
                        text: 'Финал нашей истории был исключительно положительным) Анна Олеговна положила нам под ёлку самый лучший подарок!\n' +
                                'Я долго не могла выбрать роддом и врача. Поехала на день открытых дверей и там познакомилась со своей феей) Мужу она сразу понравилась, он у меня не любит, когда много «воды», а тут все по делу.\n' +
                                'В начале декабря мы заключили контракт с Логуновой Анной Олеговной, пдр 19/12.\n' +
                                'Пишу отзыв, потому как сама долго искала, но так и не нашла. Благодарить, к сожалению, в нашей стране не принято...(\n' +
                                '19 декабря нас миновало, как, впрочем и 20 ...и так до 24)\n' +
                                '24 утром отошли воды и мы с супругом поехали в госпиталь. Там встретили, в течение часа осмотрели и, к сожалению, родовой деятельности у меня не было совсем. Совершенно не готовая шейка, полностью закрыта, да ещё и 3см толщиной.\n' +
                                'Анна Олеговна пригласила зав.отделением Наталью Викторовну, она в свою очередь глав.врача Елену Игоревну и коллегиально они настоятельно рекомендовали мне сделать КС. Но при этом не лишали возможности попробовать родить самой, они готовы были дать мне шанс, так сказать.\n' +
                                'Я, конечно, расстроилась. Ведь очень хотелось родить максимально естественно. Но положилась на их опыт и знания.\n' +
                                'Пролила ведро слез и\n' +
                                'через пару часов я уже была в операционной. Отличный анастезиолог, с юмором))) Имени не помню к сожалению. Мужа привели после того, как сделали эпидуралку, он был рядом.\n' +
                                'Буквально 20 минут и мы встретились с новым человеком. Этот шок от радости несравним ни с чем. После КС Анна Олеговна подтвердила правильность принятого решения. И слава Богу что все так вышло! Я безумно благодарна всей команде. Это максимально слаженная работа и отличный результат в 4кг весом и 54см ростом)))) Говорю Вам спасибо и за роды, и за реабилитационный период, который в Лапино проходит, как в отеле. Я даже палату дважды номером называла',
                    },
                ],
                stories: [
                    {
                        id: 'yeroyan',
                        header: 'Роды через естественные родовые пути у женщин',
                        doctor: 'Ероян Л. Х.',
                        short_text: 'У врачей акушеров ХХ века существовало правило: «один раз кесарево сечение...',
                        text: 'У врачей акушеров ХХ века существовало правило: «один раз кесарево сечение — всегда кесарево сечение». Однако специалисты ПМЦ опровергают это правило и успешно ведут роды через естественные родовые пути у женщин с рубцом на матке. 28 января 2013 в ПМЦ произошли именно такие роды под чутким руководством Ероян Лианы Хачатуровны. При этом толщина нижнего маточного сегмента в области рубца на матке составляла 1,7 мм, а интервал между родами 1 год! Роды протекали на фоне эпидуральной анестезии под тщательным контролем за состоянием матери и плода. И через 8 часов на свет появился мальчик весом 3400 г., ростом 53 см. Через три дня после родов мама с малышом была выписана домой.',
                    },
                    {
                        id: 'tarasova',
                        header: 'У меня родился здоровый ребенок!',
                        doctor: 'Тарасова Ю. А.',
                        short_text: 'От всей души благодарю Тарасову Юлию Александровну, благодаря которой у меня родился здоровый...',
                        text: 'От всей души благодарю Тарасову Юлию Александровну, благодаря которой у меня родился здоровый ребенок! Я обратилась в клинику, имея тяжелый жизненный опыт - рождение тяжелобольного ребенка и несколько выкидышей. Юлия Александровна шаг за шагом обследовала меня и мужа, нашла причину моих проблем и способ ее устранения. Надо сказать, что доктор очень терпеливо отвечала на все мои вопросы, даже глупые, и у меня было полное ощущение доверия и уверенности в том, что все получится.',
                    },
                    {
                        id: 'yanochkina',
                        header: 'Девочка - просто чудо!',
                        doctor: 'Яночкина Т. Г.',
                        short_text: 'Татьяна Геннадьевна, здравствуйте! Спешу с вами поделиться - 2 августа...',
                        text: 'Татьяна Геннадьевна, здравствуйте!\n' +
                                'Спешу с вами поделиться - 2 августа родилась наша дочка!\n' +
                                '3470 г и 53 см, 9/10 баллов :)\n' +
                                'Все прошло прекрасно, девочка - просто чудо! Улыбается с самого рождения:) весь персонал роддома умиляется и хвалит:)\n' +
                                '\n' +
                                'Спасибо вам огромное за это чудо!!! Ваш позитив и мастерство точно внесли немалый вклад в её судьбу. Мы просто на седьмом небе от счастья!\n' +
                                'Как выпишемся и немного подрастем - обязательно заедем к вам познакомиться)\n' +
                                '\n' +
                                'Ещё раз спасибо от нас от всех! Вы просто волшебница:"',
                    },
                ],
                questions: [
                    {
                        name: 'Мария',
                        question: '- Здравствуйте! подскажите, пожалуйста, если 2ое родов были кс, возможно ли 3ие роды самой? и на сколько велики риски разрыва матки?',
                        answer: '- Мария, добрый день!<br> Роды с двумя рубцами на матке - это роды повышенного риска. Необходимо очень грамотно взвесить все показания и противопоказания - они всегда индивидуальные в каждом случае. Но оперативные роды путём операции кесарево сечения безопаснее для мамы и малыша.\n' +
                                'С уважением, Юлия Олеговна Шаповалова, врач акушер-гинеколог',
                    },
                    {
                        name: 'Катя',
                        question: '- Добрый день, подскажите сколько у вас стоят роды в воду.',
                        answer: '- Добрый день! Стоимость родов в воду<br> не отличается от обычных. Цена зависит лишь от врача, которого Вы выберете и от вида контракта.',
                    },
                    {
                        name: 'Диана',
                        question: '- Здравствуйте! Подскажите, если во время схваток приехать к вам в роддом, при этом не имея контракта, можно будет в день обращения его заключить и родить, по программе «Стандарт?» врач значения особо не имеет, просто по записям не успеваю к вам до нг приехать?',
                        answer: '- Добрый день! Можно, в таком случае<br> контракт заключается менеджерами в приемном отделении. Стоит учитывать, что врач, на которого будет заключён контракт может быть из 1-3 групп.',
                    },
                ]
            }
        },
        methods: {
            getAgreement() {
                this.$emit('getAgreement');
            },
            setCurrent(name, index) {
                if (this.current[name] === index) {
                    this.current[name] = '';
                } else {
                    this.current[name] = index;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "../styles/constants.scss";
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
        &.block-reviews-container {
        }
        .column-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .column {
            height: 480px;
            margin-bottom: 40px;
            width: 500px;
        }
    }

    .mobile {
        &.block-reviews-container {
        }
        .content-container {
            padding: 0 20px;
        }
        .header-text {
            margin: 80px 0 40px;
        }
        .column-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .column {
            height: 500px;
            margin-bottom: 40px;
            width: 100%;
        }
        .name, .review-text, .review-header-wrapper, .short-text {
            padding: 0 8px 0 10px;
        }
        .name {
            font-size: 16px;
        }
        .doctor {
            font-size: 12px;
        }
        .doctor-img {
            width: 32px;
            height: 30px;
        }
        .answer {
            &.review-text {
                padding: 14px 8px 14px 10px;
            }
        }
    }

    .block-reviews-container {
        width: 100%;
        max-width: 1920px;
        margin: auto;
        background: #e5e5e5;
        padding-bottom: 80px;
    }

    .content-container {
        width: 100%;
        max-width: 1440px;
        padding: 0 40px;
        margin: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .header-text {
        margin: 120px 0 70px;
    }

    .column-container {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .column {
        display: flex;
        flex-direction: column;
        width: 380px;
        margin: 0 10px;
        height: 500px;
        padding-top: 30px;
        padding-bottom: 50px;
        background: #fff;
        position: relative;
    }

    .name, .review-text, .review-header-wrapper, .short-text {
        padding: 0 30px;
    }

    .question {
        &.name {
            margin-bottom: 15px;
        }
    }

    .answer {
        background: #fdf5ec;
        margin-top: 5px;
        &.review-text {
            padding: 14px 50px 14px 65px;
        }
    }

    .column-header {
        text-align: center;
        font-size: 18px;
        line-height: 25px;
        margin-bottom: 25px;
    }

    .reviews-container {
        overflow-y: auto;
        /*&:hover {*/
        /*    overflow-y: scroll;*/
        /*}*/
    }

    .review-wrapper {
        margin-bottom: 25px;
    }

    .review-header-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 11px;
        height: 50px;
        .name {
            padding: 0;
        }
    }

    .name {
        font-size: 18px;
        line-height: 130%;
    }

    .arrow {
        margin: 0 4px;
        width: 15px;
        height: 8px;
        background: url("../images/utils/arrow-reviews.svg") no-repeat center;
        background-size: contain;
    }

    .doctor-img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-shadow: 0 0 2px #e5e5e5;
        margin-right: 4px;
        @each $doctor in klekovkina, kosolapov, larina, logunova, tarasova, ulanova, yanochkina, yeroyan {
            &.#{$doctor} {
                background: url("../images/doctors/reviews/#{$doctor}.jpg") no-repeat center;
                background-size: cover;
            }
        }
    }

    .doctor {
        color: $purple-5;
        font-size: 14px;
        line-height: 17px;
        font-weight: bold;
    }

    .review-text {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        cursor: pointer;
        font-size: 12px;
        line-height: 130%;
    }

    .short-text {
        cursor: pointer;
        font-size: 12px;
        line-height: 130%;
    }

    .full-text {
        white-space: normal;
    }

    .redirect-btn {
        width: 100%;
        text-align: center;
        color: $purple-5;
        padding-top: 40px;
        font-size: 14px;
        font-weight: bold;
        height: 80px;
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(transparent, #fff, #fff, #fff);
    }

    .black {
        color: #000;
        font-weight: normal;
        margin-right: 4px;
    }
</style>
