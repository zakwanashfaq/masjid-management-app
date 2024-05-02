import PrayerBannerTimetable from "src/components/prayerBannerTimetable";
import { TPrayerTimePayload } from "src/utils/PrayerTimesWidget";
import { useState } from "react";

type TDisplayProps = {
    prayerTimes: TPrayerTimePayload
}

export default function Display(props: TDisplayProps) {
    return (
        <div className="vh-100 d-flex flex-column">
            <ClockWidget />
            <div className='mx-4'>
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
    let time = new Date().toLocaleTimeString()

    const [ctime, setTime] = useState(time)
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString()
        setTime(time)
    }
    setInterval(UpdateTime)
    return (
        <div className="bg-primary flex-grow-1 py-4 bg-opacity-75 d-flex align-items-center justify-content-center w-100">
            <div className="display-1 text-light fw-bolder">
                {ctime}
            </div>
        </div>
    );
}