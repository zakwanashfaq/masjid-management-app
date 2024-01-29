import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useState } from 'react';
import PrayerTimesManager from '../utils/PrayerTimesWidget';
import PrayTimes from '../utils/PrayerTimes';
import { PrayerTimeTypeOutput, prayerTimesType } from '../components/prayerBannerTimetable';


type TAdjustPrayerTimeWidgetProps = {
    prayer_name: string,
    prayerTimeManager: PrayerTimesManager,
}


function AdjustPrayerTimeWidget_input(props: TAdjustPrayerTimeWidgetProps) {
    const [noChange, setNoChange] = useState<boolean>(true);
    const [isSpecificTimeActive, setSpecificTimeActive] = useState<boolean>(false);
    const [isDelayInMinutesActive, setDelayInMinutesActive] = useState<boolean>(false);
    const [specificTimeValue, setSpecificTimeValue] = useState<string>("");
    const [delayInMinutesValue, setDelayInMinutesValue] = useState<number>(0);

    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 py-1">
                <div className="input-group mb-3">
                    <span className="input-group-text">{props.prayer_name}</span>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Specific time</a></li>
                        <li><a className="dropdown-item" href="#">Delay in minutes</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">No Change</a></li>
                    </ul>
                    <input type="text" disabled={noChange} className="form-control" aria-label="Text input with segmented dropdown button" />
                    <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="pe-2">No Change</span>
                    </button>
                </div>
            </div>
        </>
    );
}


function AdjustPrayerTimeWidget() {

    const prayerTimeManager = new PrayerTimesManager();
    prayerTimeManager.setFajrNoChange(true);
    console.log(prayerTimeManager.getPrayerTimes());

    return (
        <>
            <div className="my-4">
                <div className="row">
                    <AdjustPrayerTimeWidget_input prayer_name='Fajr' prayerTimeManager={prayerTimeManager} />
                    <AdjustPrayerTimeWidget_input prayer_name='Dhuhr' prayerTimeManager={prayerTimeManager} />
                    <AdjustPrayerTimeWidget_input prayer_name='Asr' prayerTimeManager={prayerTimeManager} />
                    <AdjustPrayerTimeWidget_input prayer_name='Magrib' prayerTimeManager={prayerTimeManager} />
                    <AdjustPrayerTimeWidget_input prayer_name='Isha' prayerTimeManager={prayerTimeManager} />
                </div>
                <div>
                    <button className='btn btn-primary mt-3'>Save Changes</button>
                </div>
            </div>
        </>
    );
}


export default function AdminPage() {
    return (
        <>
            <nav className="navbar pt-0 mt-0 bg-primary bg-opacity-75">
                <div className="container-lg py-3">
                    <span className="navbar-brand mb-0 fw-bold text-white fs-2">ICNL - Admin Dashboard</span>
                </div>
            </nav>
            <div className="container-lg mt-4">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <div className="fs-4 pt-4">
                            Adjust payer times
                        </div>
                    </div>
                    <div className="col-12 col-md-9">
                        <AdjustPrayerTimeWidget />
                    </div>
                </div>
            </div>
        </>
    );
}