import PrayerTimeTile from "./prayerTimeTile";


export default function BottomWidget() {
    return (
        <div className="container-fluid p-2">
            <div className="row d-flex flex-row justify-content-center align-items-center text-light">
                <PrayerTimeTile prayerName="Fajr" isActive={false} />
                <PrayerTimeTile prayerName="Dohur" isActive={true} />
                <PrayerTimeTile prayerName="Asr" isActive={false} />
                <PrayerTimeTile prayerName="Magrib" isActive={false} />
                <PrayerTimeTile prayerName="Isha" isActive={false} />
            </div>
        </div>
    );
}