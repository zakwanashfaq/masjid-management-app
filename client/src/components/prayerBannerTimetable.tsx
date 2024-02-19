import PrayTimes from "../utils/PrayerTimes";
import { TPrayerTimePayload } from "../utils/PrayerTimesWidget";


export type prayerTimesType = {
    fajr: string,
    shurooq: string,
    zuhr: string,
    asr: string,
    maghrib: string,
    isha: string,
    jumma: string,
};

export type PrayerTimeTypeOutput = {
    imsak: string;
    fajr: string;
    sunrise: string;
    dhuhr: string;
    asr: string;
    sunset: string;
    maghrib: string;
    isha: string;
    midnight: string;
};

function convertTo12HourFormat(time: string): [string, string] {
    let hour = parseInt(time.substr(0, 2));
    const minute = time.substr(2, 3);
    let period = "AM";

    if (hour >= 12) {
        hour = hour % 12;
        period = "PM";
    }

    let formattedHour = hour === 0 ? "12" : hour.toString();

    return [`${formattedHour}:${minute}`, period];
}

type TPrayerBannerTimetableProps = {
    prayerTimes: TPrayerTimePayload
}

export default function PrayerBannerTimetable(props: TPrayerBannerTimetableProps) {

    // Todo: Make an adapter for this so it does not need to be copy pasted
    const prayerTimesObj: any = PrayTimes("ISNA");
    prayerTimesObj.adjust({ asr: 'Hanafi' });
    const prayerTimesTemp: PrayerTimeTypeOutput = prayerTimesObj.getTimes(new Date(), [47.6, -52.7], -3.5, 0, "24h");
    const prayerTimes: prayerTimesType = {
        fajr: prayerTimesTemp.fajr.replace(':', ''),
        shurooq: prayerTimesTemp.sunrise.replace(':', ''),
        zuhr: prayerTimesTemp.dhuhr.replace(':', ''),
        asr: prayerTimesTemp.asr.replace(':', ''),
        maghrib: prayerTimesTemp.maghrib.replace(':', ''),
        isha: prayerTimesTemp.isha.replace(':', ''),
        jumma: "1300",
    };

    const prayerTimesOriginal = { ...prayerTimes };

    Object.keys(prayerTimes).forEach((key) => {
        if (props.prayerTimes[key as keyof TPrayerTimePayload]?.is_specific_time_active) {
            prayerTimes[key as keyof prayerTimesType] = props.prayerTimes[key as keyof TPrayerTimePayload].specific_time_value;
        }
        else if (props.prayerTimes[key as keyof TPrayerTimePayload]?.is_delay_in_minutes_active) {
            const time = new Date();
            time.setHours(parseInt(prayerTimes[key as keyof prayerTimesType].substr(0, 2)));
            time.setMinutes(parseInt(prayerTimes[key as keyof prayerTimesType].substr(2, 2)) + props.prayerTimes[key as keyof TPrayerTimePayload].delay_in_minutes_value);
            let hours = time.getHours().toString().padStart(2, '0');
            let minutes = time.getMinutes().toString().padStart(2, '0');
            prayerTimes[key as keyof prayerTimesType] = hours + minutes;
        }
    });



    return (
        <>
            <div className="d-none d-lg-block">
                <PrayerTimeTableHorizontal prayerTimes={prayerTimes} prayerTimesOriginal={prayerTimesOriginal} />
            </div>
            <div className="d-lg-none">
                <PrayerTimeTableVertical prayerTimes={prayerTimes} prayerTimesOriginal={prayerTimesOriginal} />
            </div>
            <div className="fw-bold">
                Note: Iqama times are when the congregation starts. Please come 5 minutes before the iqama time.
            </div>
        </>
    );
}

type TableTileProps = {
    text: string;
    sm?: boolean
}

function TableTileIqama(props: TableTileProps) {
    const [time, period] = convertTo12HourFormat(props.text);
    return (
        <th className="h1" scope="col">
            <div className="m-1 text-light rounded d-flex bg-primary bg-opacity-75 justify-content-center align-items-center" style={!props.sm ? { height: "160px" } : {}}>
                <div className={(props.sm ? "flex-row p-1" : "flex-column p-3") + " d-flex justify-content-center align-items-center"}>
                    <span className="display-4 fw-bold">
                        {time}
                    </span>
                    <span className="h5">
                        {period}
                    </span>
                </div>
            </div>
        </th>
    );
}

function TableTileAzan(props: TableTileProps) {
    const [time, period] = convertTo12HourFormat(props.text);
    return (
        <th className="h1" scope="col">
            <div className="m-1 rounded d-flex bg-primary bg-opacity-25 justify-content-center align-items-center" style={!props.sm ? { height: "100px" } : {}}>
                <div className={(props.sm ? "flex-row p-1" : "flex-column p-3") + " d-flex justify-content-center align-items-center"}>
                    <span className="display-6">
                        {time}
                    </span>
                    <span className="h5">
                        {period}
                    </span>
                </div>
            </div>
        </th>
    );
}

function TableTileMobileAzan(props: TableTileProps) {
    const [time, period] = convertTo12HourFormat(props.text);
    return (
        <th className="h1" scope="col">
            <div className="m-1 rounded d-flex bg-primary bg-opacity-25 justify-content-center align-items-center" style={!props.sm ? { height: "80px" } : {}}>
                <div className={" d-flex justify-content-center align-items-center"}>
                    <span className="display-3">
                        {time}
                        <span className="h5">
                            {period}
                        </span>
                    </span>
                </div>
            </div>
        </th>
    );
}

function TableTileMobileIqama(props: TableTileProps) {
    const [time, period] = convertTo12HourFormat(props.text);
    return (
        <th className="h1" scope="col">
            <div className="m-1 rounded d-flex bg-primary bg-opacity-75 text-light justify-content-center align-items-center" style={!props.sm ? { height: "80px" } : {}}>
                <div className={" d-flex justify-content-center align-items-center"}>
                    <span className="display-3 fw-bold">
                        {time}
                        <span className="h5">
                            {period}
                        </span>
                    </span>
                </div>
            </div>
        </th>
    );
}

function TableTileMobileShurooq(props: TableTileProps) {
    const [time, period] = convertTo12HourFormat(props.text);
    return (
        <th className="h1" scope="col" colSpan={2}>
            <div className="m-1 rounded d-flex bg-primary bg-opacity-25 text-dark justify-content-center align-items-center" style={!props.sm ? { height: "80px" } : {}}>
                <div className={" d-flex justify-content-center align-items-center"}>
                    <span className="display-3 ">
                        {time}
                        <span className="h5">
                            {period}
                        </span>
                    </span>
                </div>
            </div>
        </th>
    );
}

function TableTileShurooq(props: TableTileProps) {
    const [time, period] = convertTo12HourFormat(props.text);
    return (
        <th className="h1" scope="col" rowSpan={2}>
            <div className="m-1 rounded h-100 d-flex bg-primary bg-opacity-25 justify-content-center align-items-center" style={!props.sm ? { height: "100px" } : {}}>
                <div className={(props.sm ? "flex-row p-1" : "flex-column p-3") + " d-flex justify-content-center align-items-center"} style={{height: "270px"}}>
                    <span className="display-6">
                        {time}
                    </span>
                    <span className="h5">
                        {period}
                    </span>
                </div>
            </div>
        </th>
    );
}

type TableHeaderTileProps = {
    text: string;
    lg?: boolean
}

function TableHeaderTile(props: TableHeaderTileProps) {
    return (
        <th className="h5" scope="col">
            <div className="m-1 rounded d-flex bg-primary bg-opacity-25 justify-content-center align-items-center" style={{ height: "80px" }}>
                {props.text}
            </div>
        </th>
    );
}

type PrayerTimeTableProps = {
    prayerTimes: prayerTimesType;
    prayerTimesOriginal: prayerTimesType;
}

function PrayerTimeTableHorizontal(props: PrayerTimeTableProps) {
    return (
        <>
            <div className="mb-1 bg-opacity-25 mt-4 d-flex justify-content-center bg-secondary rounded fw-bold py-3">
                Prayer Times for 10 Paton Street
            </div>
            <div className="row px-2 pb-4 d-flex flex-row justfy-content-center">
                <table className="table-borderless">
                    <thead>
                        <tr>
                            <th className="h2" scope="col">
                                <div className="m-1 rounded d-flex bg-secondary bg-opacity-25 justify-content-center align-items-center" style={{ height: "80px" }}>

                                </div>
                            </th>
                            <TableHeaderTile text="Fajr" />
                            <TableHeaderTile text="Shurooq" lg={true} />
                            <TableHeaderTile text="Zuhr" />
                            <TableHeaderTile text="Asr" />
                            <TableHeaderTile text="Magrib" lg={true} />
                            <TableHeaderTile text="Isha" />
                            <TableHeaderTile text="Jumma" />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="h5" scope="col">
                                <div className="m-1 rounded px-2 d-flex bg-secondary bg-opacity-25 justify-content-center align-items-center" style={{ height: "100px" }}>
                                    Azzan
                                </div>
                            </th>
                            <TableTileAzan text={props.prayerTimesOriginal.fajr} />
                            <TableTileShurooq text={props.prayerTimesOriginal.shurooq} />
                            <TableTileAzan text={props.prayerTimesOriginal.zuhr} />
                            <TableTileAzan text={props.prayerTimesOriginal.asr} />
                            <TableTileAzan text={props.prayerTimesOriginal.maghrib} />
                            <TableTileAzan text={props.prayerTimesOriginal.isha} />
                            <TableTileAzan text="1230" />
                        </tr>
                        <tr>
                            <th className="h5" scope="col">
                                <div className="m-1 rounded px-2 d-flex bg-secondary bg-opacity-25 justify-content-center align-items-center" style={{ height: "160px" }}>
                                    Iqama
                                </div>
                            </th>
                            <TableTileIqama text={props.prayerTimes.fajr} />
                            {/* <TableTileIqama text={props.prayerTimes.shurooq} /> */}
                            <TableTileIqama text={props.prayerTimes.zuhr} />
                            <TableTileIqama text={props.prayerTimes.asr} />
                            <TableTileIqama text={props.prayerTimes.maghrib} />
                            <TableTileIqama text={props.prayerTimes.isha} />
                            <TableTileIqama text="1245" />
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    );
}


function PrayerTimeTableVertical(props: PrayerTimeTableProps) {
    return (
        <>
            <div className="mb-1 mt-4 d-flex justify-content-center bg-secondary bg-opacity-25 rounded fw-bold py-3">
                Prayer Times for 10 Paton Street
            </div>
            <div className="row px-2 pb-4 d-flex flex-row justfy-content-center">
                <table className="table-borderless">
                    <thead>
                        <tr>
                            <th className="h2" scope="col">
                                <div className="m-1 rounded d-flex bg-secondary bg-opacity-25 justify-content-center align-items-center" style={{ height: "50px" }}>

                                </div>
                            </th>

                            <th className="h5" scope="col">
                                <div className="m-1 rounded px-2 d-flex bg-secondary bg-opacity-25 justify-content-center align-items-center" style={{ height: "50px" }}>
                                    Azzan
                                </div>
                            </th>
                            <th className="h5" scope="col">
                                <div className="m-1 rounded px-2 d-flex bg-secondary bg-opacity-25 justify-content-center align-items-center" style={{ height: "50px" }}>
                                    Iqama
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <TableHeaderTile text="Fajr" />
                            <TableTileMobileAzan text={props.prayerTimesOriginal.fajr} />
                            <TableTileMobileIqama text={props.prayerTimes.fajr} />
                        </tr>
                        <tr>
                            <TableHeaderTile text="Shurooq" />
                            <TableTileMobileShurooq text={props.prayerTimesOriginal.shurooq} />
                        </tr>
                        <tr>
                            <TableHeaderTile text="Zuhr" />
                            <TableTileMobileAzan text={props.prayerTimesOriginal.zuhr} />
                            <TableTileMobileIqama text={props.prayerTimes.zuhr} />
                        </tr>
                        <tr>
                            <TableHeaderTile text="Asr" />
                            <TableTileMobileAzan text={props.prayerTimesOriginal.asr} />
                            <TableTileMobileIqama text={props.prayerTimes.asr} />
                        </tr>
                        <tr>
                            <TableHeaderTile text="Magrib" />
                            <TableTileMobileAzan text={props.prayerTimesOriginal.maghrib} />
                            <TableTileMobileIqama text={props.prayerTimes.maghrib} />
                        </tr>
                        <tr>
                            <TableHeaderTile text="Isha" />
                            <TableTileMobileAzan text={props.prayerTimesOriginal.isha} />
                            <TableTileMobileIqama text={props.prayerTimes.isha} />
                        </tr>
                        <tr>
                            <TableHeaderTile text="Jumma" />
                            <TableTileMobileAzan text="1230" />
                            <TableTileMobileIqama text="1245" />
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    );
}