import PrayerBannerTimetable from "src/components/prayerBannerTimetable";
import { TPrayerTimePayload } from "src/utils/PrayerTimesWidget";
import { useState } from "react";
import logo from '../../assets/icnl-logo-white-bg.jpg';

type TDisplayProps = {
    prayerTimes: TPrayerTimePayload
}

export default function Display(props: TDisplayProps) {
    console.log('Display', props);
    return (
        <div className="vh-100 d-flex flex-column">
            <div className="w-100 h-100">
                <ClockWidget />
            </div>
            <div className='mx-3'>
                <PrayerBannerTimetable prayerTimes={props.prayerTimes} />
            </div>
            <EventWidget />
        </div>
    );
}

function EventWidget() {
    return (
        <div className="w-100 py-4">
            <div className="display-1">
                {/* Event Widget */}
            </div>
        </div>
    );
}

function ClockWidget() {
    let time = new Date();
    const colorFilter = {
        'filter': 'invert(85%)',
        'height': '50px'
    };
    const [ctime, setTime] = useState(time)
    const UpdateTime = () => {
        time = new Date();
        setTime(time)
    }
    setInterval(UpdateTime)
    return (
        <div className="bg-dark d-flex flex-grow-1 align-items-center justify-content-center h-100 flex-column">
            <div className="fs-3 d-flex align-items-center text-light">
                <img src={logo.src} alt="Clock" className="pe-3" style={colorFilter} />
                Islamic Center of Newfoundland
            </div>
            <div className="display-1 text-light fw-bold">
                {ctime.toLocaleTimeString()}
            </div>
        </div>
    );
}