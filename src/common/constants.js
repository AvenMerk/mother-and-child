import CF from './common-functions';

let date = CF.getNextDate();

const PHONE = '+7 (800) 700-70-01';
const PHONE_2 = '+7 (495) 526-60-60';

const PHONE_RAW = PHONE.replace(/\D+/g, "");
const PHONE_RAW_2 = PHONE_2.replace(/\D+/g, "");

export default {
    phone: PHONE,
    phone_raw: PHONE_RAW,
    phone_2: PHONE_2,
    phone_raw_2: PHONE_RAW_2,
    end_date: date,
    need_agreement: true,
    cKeeper: 'CTW',
    need_manager_phone: false,
}
