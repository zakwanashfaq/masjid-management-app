import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from 'react';
import PrayerTimesManager, { EPrayerNames } from '../utils/PrayerTimesWidget';


type TAdjustPrayerTimeWidgetProps = {
    prayer_name: EPrayerNames,
    prayerTimeManager: PrayerTimesManager,
}

enum EDropDownStates {
    SPECIFIC_TIME = "Specific time",
    DELAY_IN_MINUTES = "Delay in minutes",
    NO_CHANGE = "No Change",
}

function AdjustPrayerTimeWidget_input(props: TAdjustPrayerTimeWidgetProps) {
    const prayerTimeOject = props.prayerTimeManager.getMethod(props.prayer_name);
    const [noChange, setNoChange] = useState<boolean>(prayerTimeOject.no_change);
    const [inputValue, setInputValue] = useState<string>("");
    const [selectedDropdown, setSelectedDropdown] = useState<string>("");

    useEffect(() => {
        if (prayerTimeOject.is_delay_in_minutes_active) {
            setSelectedDropdown(EDropDownStates.DELAY_IN_MINUTES);
        } else if (prayerTimeOject.is_specific_time_active) {
            setSelectedDropdown(EDropDownStates.SPECIFIC_TIME);
        } else if (prayerTimeOject.no_change) {
            setSelectedDropdown(EDropDownStates.NO_CHANGE);
        }
    }, []);

    const handleDropDownClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (e.currentTarget.innerHTML === EDropDownStates.NO_CHANGE) {
            // on triggers if no_change is set to false
            if (!prayerTimeOject.no_change) {
                prayerTimeOject.setNoChange(true);
                setNoChange(true);
            }
        } else {
            if (e.currentTarget.innerHTML === EDropDownStates.DELAY_IN_MINUTES) {
                prayerTimeOject.setDelayInMinutes(0);
                setNoChange(false);
            }
            if (e.currentTarget.innerHTML === EDropDownStates.SPECIFIC_TIME) {
                prayerTimeOject.setSpecificTime("");
                setNoChange(false);
            }
        }
        setSelectedDropdown(e.currentTarget.innerHTML);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (selectedDropdown === EDropDownStates.DELAY_IN_MINUTES) {
            prayerTimeOject.setDelayInMinutes(parseInt(e.target.value));
        } else if (selectedDropdown === EDropDownStates.SPECIFIC_TIME) {
            prayerTimeOject.setSpecificTime(e.target.value);
        }
        setInputValue(e.target.value); // Update to use e.target.value instead of e.target.innerHTML
    }

    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 py-1">
                <div className="input-group mb-3">
                    <span className="input-group-text">{props.prayer_name}</span>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={handleDropDownClick}>{EDropDownStates.SPECIFIC_TIME}</a></li>
                        <li><a className="dropdown-item" href="#" onClick={handleDropDownClick}>{EDropDownStates.DELAY_IN_MINUTES}</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#" onClick={handleDropDownClick}>{EDropDownStates.NO_CHANGE}</a></li>
                    </ul>
                    <input type="text" disabled={noChange} className="form-control" value={inputValue} onChange={handleInputChange} aria-label="Text input with segmented dropdown button" />
                    <button type="button" className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="pe-2">{selectedDropdown}</span>
                    </button>
                </div>
            </div>
        </>
    );
}


function AdjustPrayerTimeWidget() {

    const prayerTimeManager = new PrayerTimesManager();
    
    const handleSaveChanges = () => {  
        console.log(prayerTimeManager.getPrayerTimes());
    }

    return (
        <>
            <div className="my-4">
                <div className="row">
                    <AdjustPrayerTimeWidget_input prayer_name={EPrayerNames.FAJR} prayerTimeManager={prayerTimeManager} />
                    <AdjustPrayerTimeWidget_input prayer_name={EPrayerNames.ZUHR} prayerTimeManager={prayerTimeManager} />
                    <AdjustPrayerTimeWidget_input prayer_name={EPrayerNames.ASR} prayerTimeManager={prayerTimeManager} />
                    <AdjustPrayerTimeWidget_input prayer_name={EPrayerNames.MAGHRIB} prayerTimeManager={prayerTimeManager} />
                    <AdjustPrayerTimeWidget_input prayer_name={EPrayerNames.ISHA} prayerTimeManager={prayerTimeManager} />
                </div>
                <div>
                    <button className='btn btn-primary mt-3' onClick={handleSaveChanges}>Save Changes</button>
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
                        <div className="fs-4 pt-4 p-1">
                            Adjust payer times
                        </div>
                        <div className="p-1">
                            Note: For specific time use military hours. For example "5:30 PM" is "1730".
                            For delay use a number. For example "30" is 30 minutes.
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