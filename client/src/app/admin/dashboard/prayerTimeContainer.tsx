
import { AdjustPrayerTimeWidget } from "src/page_templates/adminPage";

export default function PrayerTimesPage() {
    return (
        <>
            <div className="h1 pt-4 ms-1 mb-4">
                Adjust payer times
            </div>
            <hr />
            <div className="row">
                <div className="col-12 col-md-3">
                    <div className="p-1">
                        Note: For specific time use military hours. For example "5:30 PM" is "1730".
                        For delay use a number. For example "30" is 30 minutes.
                    </div>
                </div>
                <div className="col-12 col-md-9">
                    <AdjustPrayerTimeWidget />
                </div>
            </div>
        </>
    );
}