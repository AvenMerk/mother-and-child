const WEEK = 604800000;
const DAY = 86400000;
const MONTH_NAMES = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
];

export default {
    getNumericalName(number, variants) {
        const numerals = {
            days: ['день', 'дня', 'дней'],
            hours: ['час', 'часа', 'часов'],
            minutes: ['минута', 'минуты', 'минут'],
            seconds: ['секунда', 'секунды', 'секунд'],
            rubles: ['рубль', 'рубля', 'рублей'],
            bug: ['баг', 'бага', 'багов']
        };
        if (!Array.isArray(variants)) {
            variants = numerals[variants] || numerals.bug;
        }
        let temp = number;
        while (number >= 10) {
            number = number % 10;
        }
        while (temp >= 100) {
            temp = temp % 10;
        }
        if (number > 0 && number < 5) {
            if (temp > 10 && temp < 15) {
                return variants[2];
            }
            if (number == 1) return variants[0];
            return variants[1];
        }
        return variants[2];
    },
    getDateString() {

        return this.getNextDate().getDate() + ' ' + this.matchMonth(this.getNextDate().getMonth());
    },
    getNextDate() {
        let today = new Date();
        let next_1 = new Date(2019, 10, 26, 22, 0, 0);
        let next_2 = new Date(2019, 10, 28, 22, 0, 0);
        let next_3 = new Date(2019, 10, 30, 22, 0, 0);
        let next;

        if (today > next_2) next = next_3
        else if (today > next_1) next = next_2
        else next = next_1;
        while (today.valueOf() - next.valueOf() > 0) {
            next = new Date(next.valueOf() + WEEK);
        }
        return next;
    },
    matchMonth(month) {

        return MONTH_NAMES[month];
    }
}
