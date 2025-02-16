import PrayTimes from "../utils/PrayerTimes";
import { EPrayerNames, TPrayerTimePayload } from "../utils/PrayerTimesWidget";
import React, { useState, useEffect } from 'react';


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
    const prayerTimesTemp: PrayerTimeTypeOutput = prayerTimesObj.getTimes(new Date(), [47.6, -52.7], -3.5, "auto", "24h");
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

    const [timeNow, setTimeNow] = useState(new Date().getHours() * 100 + new Date().getMinutes());
    const [highlight, setHighlight] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeNow(new Date().getHours() * 100 + new Date().getMinutes());
        }, 60000); // Update timeNow every minute

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    useEffect(() => {
        if (timeNow >= parseInt(prayerTimesOriginal.fajr) && timeNow < parseInt(prayerTimesOriginal.shurooq)) {
            setHighlight(EPrayerNames.FAJR);
        }
        else if (timeNow >= parseInt(prayerTimesOriginal.shurooq) && timeNow < parseInt(prayerTimesOriginal.zuhr)) {
            setHighlight(EPrayerNames.SHUROOQ);
        }
        else if (timeNow >= parseInt(prayerTimesOriginal.zuhr) && timeNow < parseInt(prayerTimesOriginal.asr)) {
            setHighlight(EPrayerNames.ZUHR);
        }
        else if (timeNow >= parseInt(prayerTimesOriginal.asr) && timeNow < parseInt(prayerTimesOriginal.maghrib)) {
            setHighlight(EPrayerNames.ASR);
        }
        else if (timeNow >= parseInt(prayerTimesOriginal.maghrib) && timeNow < parseInt(prayerTimesOriginal.isha)) {
            setHighlight(EPrayerNames.MAGHRIB);
        }
        else if (timeNow >= parseInt(prayerTimesOriginal.isha)) {
            setHighlight(EPrayerNames.ISHA);
        }
    }, [timeNow, prayerTimesOriginal]);



    return (
        <>
            <div className="d-none d-lg-block">
                <PrayerTimeTableHorizontal prayerTimes={prayerTimes} prayerTimesOriginal={prayerTimesOriginal} highlight={highlight} />
            </div>
            <div className="d-lg-none">
                <PrayerTimeTableVertical prayerTimes={prayerTimes} prayerTimesOriginal={prayerTimesOriginal} highlight={highlight} />
            </div>
            <div className="fw-bold">
                Note: Iqama times are when the congregation starts. Please come at least 5 minutes before the iqama time.
            </div>
        </>
    );
}

type TableTileProps = {
    text: string;
    sm?: boolean;
    highlight: boolean;
}

function TableTileIqama(props: TableTileProps) {
    const [time, period] = convertTo12HourFormat(props.text);
    return (
        <th className="h1" scope="col">
            <div className={(props.highlight? "bg-warning text-dark" : "bg-primary") + " m-1 text-light rounded d-flex bg-opacity-75 justify-content-center align-items-center"} style={!props.sm ? { height: "160px" } : {}}>
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
        <th className="h5" scope="col">
            <div className=" m-1 rounded d-flex bg-primary bg-opacity-25 justify-content-center align-items-center py-1" >
                <div className={" d-flex justify-content-center align-items-center"}>
                    <span className="">
                        {time}
                        <span className="h6">
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
        <th className="h5" scope="col">
            <div className={(props.highlight? "bg-warning text-dark" : "bg-primary") + " m-1 rounded d-flex bg-primary bg-opacity-75 text-light justify-content-center align-items-center py-1"}>
                <div className={" d-flex justify-content-center align-items-center"}>
                    <span className="fw-bold">
                        {time}
                        <span className="h6">
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
        <th className="h5" scope="col" colSpan={2}>
            <div className="m-1 rounded d-flex bg-primary bg-opacity-25 text-dark justify-content-center align-items-center py-1" >
                <div className={" d-flex justify-content-center align-items-center"}>
                    <span className="">
                        {time}
                        <span className="h6">
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
    lg?: boolean;
    highlight: boolean;
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

function TableHeaderTileMobile(props: TableHeaderTileProps) {
    return (
        <th className="h6" scope="col">
            <div className="m-1 rounded d-flex bg-primary bg-opacity-25 justify-content-center align-items-center" style={{ height: "2rem" }}>
                {props.text}
            </div>
        </th>
    );
}

type PrayerTimeTableProps = {
    prayerTimes: prayerTimesType;
    prayerTimesOriginal: prayerTimesType;
    highlight: string; 
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
                            <TableHeaderTile text="Fajr" highlight={props.highlight === EPrayerNames.FAJR} />
                            <TableHeaderTile text="Shurooq" lg={true} highlight={props.highlight === EPrayerNames.SHUROOQ} />
                            <TableHeaderTile text="Zuhr" highlight={props.highlight === EPrayerNames.ZUHR} />
                            <TableHeaderTile text="Asr" highlight={props.highlight === EPrayerNames.ASR} />
                            <TableHeaderTile text="Magrib" highlight={props.highlight === EPrayerNames.MAGHRIB} />
                            <TableHeaderTile text="Isha" highlight={props.highlight === EPrayerNames.ISHA} />    
                            <TableHeaderTile text="Jumma" highlight={props.highlight === EPrayerNames.JUMMA} />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="h5" scope="col">
                                <div className="m-1 rounded px-2 d-flex bg-secondary bg-opacity-25 justify-content-center align-items-center" style={{ height: "100px" }}>
                                    Azzan
                                </div>
                            </th>
                            <TableTileAzan text={props.prayerTimesOriginal.fajr} highlight={props.highlight === EPrayerNames.FAJR} />
                            <TableTileShurooq text={props.prayerTimesOriginal.shurooq} highlight={props.highlight === EPrayerNames.SHUROOQ} />
                            <TableTileAzan text={props.prayerTimesOriginal.zuhr} highlight={props.highlight === EPrayerNames.ZUHR} />
                            <TableTileAzan text={props.prayerTimesOriginal.asr} highlight={props.highlight === EPrayerNames.ASR} />
                            <TableTileAzan text={props.prayerTimesOriginal.maghrib} highlight={props.highlight === EPrayerNames.MAGHRIB} />
                            <TableTileAzan text={props.prayerTimesOriginal.isha} highlight={props.highlight === EPrayerNames.ISHA} />
                            <TableTileAzan text={props.prayerTimesOriginal.zuhr} highlight={props.highlight === EPrayerNames.JUMMA} />
                        </tr>
                        <tr>
                            <th className="h5" scope="col">
                                <div className="m-1 rounded px-2 d-flex bg-secondary bg-opacity-25 justify-content-center align-items-center" style={{ height: "160px" }}>
                                    Iqama
                                </div>
                            </th>
                            <TableTileIqama text={props.prayerTimes.fajr} highlight={props.highlight === EPrayerNames.FAJR} />
                            {/* <TableTileIqama text={props.prayerTimes.shurooq} /> */}
                            <TableTileIqama text={props.prayerTimes.zuhr} highlight={props.highlight === EPrayerNames.ZUHR} />
                            <TableTileIqama text={props.prayerTimes.asr} highlight={props.highlight === EPrayerNames.ASR} />
                            <TableTileIqama text={props.prayerTimes.maghrib} highlight={props.highlight === EPrayerNames.MAGHRIB} />
                            <TableTileIqama text={props.prayerTimes.isha} highlight = {props.highlight === EPrayerNames.ISHA} />
                            <TableTileIqama text="1330" highlight={false}/>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    );
}


function PrayerTimeTableVertical(props: PrayerTimeTableProps) {
    const HEADER_HEIGHT = '35px';
    return (
        <>
            <div className="mb-1 mt-2 d-flex justify-content-center bg-secondary bg-opacity-25 rounded fw-bold py-1">
                Prayer Times for 10 Paton Street
            </div>
            <div className="row px-2 pb-4 d-flex flex-row justfy-content-center">
                <table className="table-borderless">
                    <thead>
                        <tr>
                            <th className="h2" scope="col">
                                <div className="m-1 rounded d-flex bg-secondary bg-opacity-25 justify-content-center align-items-center" style={{ height: HEADER_HEIGHT }}>

                                </div>
                            </th>

                            <th className="h6" scope="col">
                                <div className="m-1 rounded px-2 d-flex bg-secondary bg-opacity-25 justify-content-center align-items-center" style={{ height: HEADER_HEIGHT }}>
                                    Azzan
                                </div>
                            </th>
                            <th className="h6" scope="col">
                                <div className="m-1 rounded px-2 d-flex bg-secondary bg-opacity-25 justify-content-center align-items-center" style={{ height: HEADER_HEIGHT }}>
                                    Iqama
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <TableHeaderTileMobile text="Fajr" highlight={props.highlight === EPrayerNames.FAJR} />
                            <TableTileMobileAzan text={props.prayerTimesOriginal.fajr} highlight={props.highlight === EPrayerNames.FAJR} />
                            <TableTileMobileIqama text={props.prayerTimes.fajr} highlight={props.highlight === EPrayerNames.FAJR} />
                        </tr>
                        <tr>
                            <TableHeaderTileMobile text="Shurooq" highlight={props.highlight === EPrayerNames.SHUROOQ} />
                            <TableTileMobileShurooq text={props.prayerTimesOriginal.shurooq} highlight={props.highlight === EPrayerNames.SHUROOQ} />
                        </tr>
                        <tr>
                            <TableHeaderTileMobile text="Zuhr" highlight={props.highlight === EPrayerNames.ZUHR} />
                            <TableTileMobileAzan text={props.prayerTimesOriginal.zuhr} highlight={props.highlight === EPrayerNames.ZUHR} />
                            <TableTileMobileIqama text={props.prayerTimes.zuhr} highlight={props.highlight === EPrayerNames.ZUHR} />
                        </tr>
                        <tr>
                            <TableHeaderTileMobile text="Asr" highlight={props.highlight === EPrayerNames.ASR} />
                            <TableTileMobileAzan text={props.prayerTimesOriginal.asr} highlight={props.highlight === EPrayerNames.ASR} />
                            <TableTileMobileIqama text={props.prayerTimes.asr} highlight={props.highlight === EPrayerNames.ASR} />
                        </tr>
                        <tr>
                            <TableHeaderTileMobile text="Magrib" highlight={props.highlight === EPrayerNames.MAGHRIB} />
                            <TableTileMobileAzan text={props.prayerTimesOriginal.maghrib} highlight={props.highlight === EPrayerNames.MAGHRIB} />
                            <TableTileMobileIqama text={props.prayerTimes.maghrib} highlight={props.highlight === EPrayerNames.MAGHRIB} />
                        </tr>
                        <tr>
                            <TableHeaderTileMobile text="Isha" highlight={props.highlight === EPrayerNames.ISHA} />
                            <TableTileMobileAzan text={props.prayerTimesOriginal.isha} highlight={props.highlight === EPrayerNames.ISHA} />
                            <TableTileMobileIqama text={props.prayerTimes.isha} highlight={props.highlight === EPrayerNames.ISHA} />
                        </tr>
                        <tr>
                            <TableHeaderTileMobile text="Jumma" highlight={false} />
                            <TableTileMobileAzan text={props.prayerTimesOriginal.zuhr} highlight={false} />
                            <TableTileMobileIqama text="1315" highlight={false} />
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    );
}
