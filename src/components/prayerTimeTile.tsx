
type PrayerTimeTileProps = {
    prayerName: string;
    isActive: boolean;
}

export default function PrayerTimeTile(props: PrayerTimeTileProps) {
    return (
        <>
            <div className={(props.isActive ? "col-4" : "col-2") + " p-2"}>
                <div className={(props.isActive ? "text-bg-primary" : "text-bg-secondary") + " card"}>
                    <div className="card-header bg-gradient fw-bold display-6">{props.prayerName}</div>
                    <div className="card-body">
                        <table className="">
                            <tbody>
                                <tr>
                                    <td className="pe-3">Athan</td>
                                    <td>Iqama</td>
                                </tr>
                                <tr>
                                    <td>12:10</td>
                                    <td>1:10</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}