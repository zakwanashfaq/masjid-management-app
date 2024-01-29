
export type TPrayerTime = {
    no_change: boolean,
    delay_in_minutes_value: number,
    is_delay_in_minutes_active: boolean, 
    specific_time_value: string,
    is_specific_time_active: boolean
}

export type TPrayerTimePayload = {
    fajr: TPrayerTime,
    zuhr: TPrayerTime,
    asr: TPrayerTime,
    maghrib: TPrayerTime,
    isha: TPrayerTime
}

export enum EPrayerNames {
    FAJR = 'fajr',
    ZUHR = 'zuhr',
    ASR = 'asr',
    MAGHRIB = 'maghrib',
    ISHA = 'isha'
}

class PrayerTime {
    name: string = '';
    no_change: boolean;
    delay_in_minutes_value;
    is_delay_in_minutes_active: boolean;
    specific_time_value: string;
    is_specific_time_active: boolean;

    constructor(prayerName: string) {
        this.name = prayerName;
        this.no_change = true;
        this.delay_in_minutes_value = 0;
        this.is_delay_in_minutes_active = false;
        this.specific_time_value = '';
        this.is_specific_time_active = false;
    }

    setNoChange(no_change: boolean) {
        this.is_delay_in_minutes_active = false;
        this.is_specific_time_active = false;
        this.specific_time_value = '';
        this.delay_in_minutes_value = 0;
        this.no_change = no_change;
    }

    setDelayInMinutes(delay_in_minutes_value: number) {
        this.is_delay_in_minutes_active = true;
        this.is_specific_time_active = false;
        this.no_change = false;
        this.specific_time_value = '';
        this.delay_in_minutes_value = delay_in_minutes_value;
    }

    setSpecificTime(specific_time_value: string) {
        this.is_delay_in_minutes_active = false;
        this.is_specific_time_active = true;
        this.no_change = false;
        this.delay_in_minutes_value = 0;
        this.specific_time_value = specific_time_value;
    }

    getPrayerTime() : TPrayerTime {
        return {
            no_change: this.no_change,
            delay_in_minutes_value: this.delay_in_minutes_value,
            is_delay_in_minutes_active: this.is_delay_in_minutes_active,
            specific_time_value: this.specific_time_value,
            is_specific_time_active: this.is_specific_time_active
        };
    }
}


class PrayerTimesManager{

    public static prayerTimeWidget: PrayerTimesManager;

    private fajr!: PrayerTime;
    private zuhr!: PrayerTime;
    private asr!: PrayerTime;
    private maghrib!: PrayerTime;
    private isha!: PrayerTime;

    getMethod(prayerName: EPrayerNames): PrayerTime {
        switch (prayerName) {
            case EPrayerNames.FAJR:
                return this.fajr;
            case EPrayerNames.ZUHR:
                return this.zuhr;
            case EPrayerNames.ASR:
                return this.asr;
            case EPrayerNames.MAGHRIB:
                return this.maghrib;
            case EPrayerNames.ISHA:
                return this.isha;
            default:
                throw new Error(`Invalid prayer name: ${prayerName}`);
        }
    }

   
    constructor() {
        if (PrayerTimesManager.prayerTimeWidget == null) {
            PrayerTimesManager.prayerTimeWidget = this;
            this.fajr = new PrayerTime(EPrayerNames.FAJR);
            this.zuhr = new PrayerTime(EPrayerNames.ZUHR);
            this.asr = new PrayerTime(EPrayerNames.ASR);
            this.maghrib = new PrayerTime(EPrayerNames.MAGHRIB);
            this.isha = new PrayerTime(EPrayerNames.ISHA);
        } else {
            return PrayerTimesManager.prayerTimeWidget;
        }
    }

    getPrayerTimes(): TPrayerTimePayload {
        return {
            fajr: this.fajr.getPrayerTime(),
            zuhr: this.zuhr.getPrayerTime(),
            asr: this.asr.getPrayerTime(),
            maghrib: this.maghrib.getPrayerTime(),
            isha: this.isha.getPrayerTime()!
        };
    }
}


export default PrayerTimesManager;