
type TPrayerTime = {
    no_change: boolean,
    delay_in_minutes_value: number,
    is_delay_in_minutes_active: boolean, 
    specific_time_value: string,
    is_specific_time_active: boolean
}

type TPrayerTimePayload = {
    fajr: TPrayerTime,
    zuhr: TPrayerTime,
    asr: TPrayerTime,
    maghrib: TPrayerTime,
    isha: TPrayerTime
}

class PrayerTime<T> {
    
}


class PrayerTimesManager{

    public static prayerTimeWidget: PrayerTimesManager;

    private fajr: TPrayerTime = {
        no_change: false,
        delay_in_minutes_value: 0,
        is_delay_in_minutes_active: false,
        specific_time_value: '',
        is_specific_time_active: false
    };

    private zuhr: TPrayerTime = {
        no_change: false,
        delay_in_minutes_value: 0,
        is_delay_in_minutes_active: false,
        specific_time_value: '',
        is_specific_time_active: false
    };

    private asr: TPrayerTime = {
        no_change: false,
        delay_in_minutes_value: 0,
        is_delay_in_minutes_active: false,
        specific_time_value: '',
        is_specific_time_active: false
    };

    private maghrib: TPrayerTime = {
        no_change: false,
        delay_in_minutes_value: 0,
        is_delay_in_minutes_active: false,
        specific_time_value: '',
        is_specific_time_active: false
    };

    private isha: TPrayerTime = {
        no_change: false,
        delay_in_minutes_value: 0,
        is_delay_in_minutes_active: false,
        specific_time_value: '',
        is_specific_time_active: false
    };

    setFajrNoChange(no_change: boolean) {
        this.fajr.is_delay_in_minutes_active = false;
        this.fajr.is_specific_time_active = false;
        this.fajr.specific_time_value = '';
        this.fajr.delay_in_minutes_value = 0;
        this.fajr.no_change = no_change;
    }

    setFajrDelayInMinutes(delay_in_minutes_value: number) {
        this.fajr.is_delay_in_minutes_active = true;
        this.fajr.is_specific_time_active = false;
        this.fajr.no_change = false;
        this.fajr.specific_time_value = '';
        this.fajr.delay_in_minutes_value = delay_in_minutes_value;
    }

    setFajrSpecificTime(specific_time_value: string) {
        this.fajr.is_delay_in_minutes_active = false;
        this.fajr.is_specific_time_active = true;
        this.fajr.no_change = false;
        this.fajr.delay_in_minutes_value = 0;
        this.fajr.specific_time_value = specific_time_value;
    }

    setZuhrNoChange(no_change: boolean) {
        this.zuhr.is_delay_in_minutes_active = false;
        this.zuhr.is_specific_time_active = false;
        this.zuhr.specific_time_value = '';
        this.zuhr.delay_in_minutes_value = 0;
        this.zuhr.no_change = no_change;
    }

    setZuhrDelayInMinutes(delay_in_minutes_value: number) {
        this.zuhr.is_delay_in_minutes_active = true;
        this.zuhr.is_specific_time_active = false;
        this.zuhr.no_change = false;
        this.zuhr.specific_time_value = '';
        this.zuhr.delay_in_minutes_value = delay_in_minutes_value;
    }

    setZuhrSpecificTime(specific_time_value: string) {
        this.zuhr.is_delay_in_minutes_active = false;
        this.zuhr.is_specific_time_active = true;
        this.zuhr.no_change = false;
        this.zuhr.delay_in_minutes_value = 0;
        this.zuhr.specific_time_value = specific_time_value;
    }

    setAsrNoChange(no_change: boolean) {
        this.asr.is_delay_in_minutes_active = false;
        this.asr.is_specific_time_active = false;
        this.asr.specific_time_value = '';
        this.asr.delay_in_minutes_value = 0;
        this.asr.no_change = no_change;
    }

    setAsrDelayInMinutes(delay_in_minutes_value: number) {
        this.asr.is_delay_in_minutes_active = true;
        this.asr.is_specific_time_active = false;
        this.asr.no_change = false;
        this.asr.specific_time_value = '';
        this.asr.delay_in_minutes_value = delay_in_minutes_value;
    }

    setAsrSpecificTime(specific_time_value: string) {
        this.asr.is_delay_in_minutes_active = false;
        this.asr.is_specific_time_active = true;
        this.asr.no_change = false;
        this.asr.delay_in_minutes_value = 0;
        this.asr.specific_time_value = specific_time_value;
    }

    setMaghribNoChange(no_change: boolean) {
        this.maghrib.is_delay_in_minutes_active = false;
        this.maghrib.is_specific_time_active = false;
        this.maghrib.specific_time_value = '';
        this.maghrib.delay_in_minutes_value = 0;
        this.maghrib.no_change = no_change;
    }

    setMaghribDelayInMinutes(delay_in_minutes_value: number) {
        this.maghrib.is_delay_in_minutes_active = true;
        this.maghrib.is_specific_time_active = false;
        this.maghrib.no_change = false;
        this.maghrib.specific_time_value = '';
        this.maghrib.delay_in_minutes_value = delay_in_minutes_value;
    }

    setMaghribSpecificTime(specific_time_value: string) {
        this.maghrib.is_delay_in_minutes_active = false;
        this.maghrib.is_specific_time_active = true;
        this.maghrib.no_change = false;
        this.maghrib.delay_in_minutes_value = 0;
        this.maghrib.specific_time_value = specific_time_value;
    }

    setIshaNoChange(no_change: boolean) {
        this.isha.is_delay_in_minutes_active = false;
        this.isha.is_specific_time_active = false;
        this.isha.specific_time_value = '';
        this.isha.delay_in_minutes_value = 0;
        this.isha.no_change = no_change;
    }

    setIshaDelayInMinutes(delay_in_minutes_value: number) {
        this.isha.is_delay_in_minutes_active = true;
        this.isha.is_specific_time_active = false;
        this.isha.no_change = false;
        this.isha.specific_time_value = '';
        this.isha.delay_in_minutes_value = delay_in_minutes_value;
    }

    setIshaSpecificTime(specific_time_value: string) {
        this.isha.is_delay_in_minutes_active = false;
        this.isha.is_specific_time_active = true;
        this.isha.no_change = false;
        this.isha.delay_in_minutes_value = 0;
        this.isha.specific_time_value = specific_time_value;
    }

    constructor() {
        if (PrayerTimesManager.prayerTimeWidget == null) {
            PrayerTimesManager.prayerTimeWidget = this;
        } else {
            return PrayerTimesManager.prayerTimeWidget;
        }
    }

    getPrayerTimes(): TPrayerTimePayload {
        return {
            fajr: this.fajr!,
            zuhr: this.zuhr!,
            asr: this.asr!,
            maghrib: this.maghrib!,
            isha: this.isha!
        };
    }
}


export default PrayerTimesManager;