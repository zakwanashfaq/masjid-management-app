

type prayerTimesType = {
    fajr: string,
    shurooq: string,
    zuhr: string,
    asr: string,
    magrib: string,
    isha: string,
    jumma: string,
};

function convertTo12HourFormat(time: string): [string, string] {
    const hour = parseInt(time.substr(0, 2));
    const minute = time.substr(2, 3);
    let period = "AM";

    if (hour >= 12) {
        period = "PM";
    }

    let formattedHour = hour % 12 === 0 ? "12" : (hour % 12).toString();

    return [`${formattedHour}:${minute}`, period];
}



export default function PrayerBannerTimetable() {
    const prayerTimes: prayerTimesType = {
        fajr: "0600",
        shurooq: "0700",
        zuhr: "1210",
        asr: "1310",
        magrib: "1800",
        isha: "1830",
        jumma: "1300",
    };

    return (
        <>
            <div className="d-none d-lg-block">
                <PrayerTimeTableHorizontal prayerTimes={prayerTimes} />
            </div>
            <div className="d-lg-none">
                <PrayerTimeTableVertical prayerTimes={prayerTimes} />
            </div>
        </>
    );
}

type TableTileProps = {
    text: string;
    sm?: boolean
}

function TableTile(props: TableTileProps) {
    const [time, period] = convertTo12HourFormat(props.text);
    return (
        <th className="h1" scope="col">
            <div className="m-1 rounded d-flex bg-primary bg-opacity-75 justify-content-center align-items-center" style={!props.sm ? { height: "160px" } : {}}>
                <div className={(props.sm ? "flex-row p-1" : "flex-column p-3") + " d-flex justify-content-center align-items-center"}>
                    <span className="display-3">
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

function TableTileMobile(props: TableTileProps) {
    const [time, period] = convertTo12HourFormat(props.text);
    return (
        <th className="h1" scope="col">
            <div className="m-1 rounded d-flex bg-secondary justify-content-center align-items-center" style={!props.sm ? { height: "80px" } : {}}>
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

type TableHeaderTileProps = {
    text: string;
    lg?: boolean
}

function TableHeaderTile(props: TableHeaderTileProps) {
    return (
        <th className="h5" scope="col">
            <div className="m-1 rounded d-flex bg-primary justify-content-center align-items-center" style={{ height: "80px" }}>
                {props.text}
            </div>
        </th>
    );
}

type PrayerTimeTableProps = {
    prayerTimes: prayerTimesType;
}

function PrayerTimeTableHorizontal(props: PrayerTimeTableProps) {
    return (
        <>
            <div className="text-light mb-1  mt-4 d-flex justify-content-center bg-secondary rounded fw-bold py-3">
                Prayer Times for 10 Paton Street
            </div>
            <div className="row px-2 pb-4 d-flex flex-row justfy-content-center">
                <table className="table-dark table-borderless">
                    <thead>
                        <tr>
                            <th className="h2" scope="col">
                                <div className="m-1 rounded d-flex bg-secondary justify-content-center align-items-center" style={{ height: "80px" }}>

                                </div>
                            </th>
                            <TableHeaderTile text="Fajr" />
                            <TableHeaderTile text="Shurooq" lg={true} />
                            <TableHeaderTile text="Zuhr" />
                            <TableHeaderTile text="Asr" />
                            <TableHeaderTile text="Magrib" lg={true} />
                            <TableHeaderTile text="Isha" />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="h5" scope="col">
                                <div className="m-1 rounded px-2 d-flex bg-secondary justify-content-center align-items-center" style={{ height: "160px" }}>
                                    Iqama
                                </div>
                            </th>
                            <TableTile text={props.prayerTimes.fajr} />
                            <TableTile text={props.prayerTimes.shurooq} />
                            <TableTile text={props.prayerTimes.zuhr} />
                            <TableTile text={props.prayerTimes.asr} />
                            <TableTile text={props.prayerTimes.magrib} />
                            <TableTile text={props.prayerTimes.isha} />
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
            <div className="text-light mb-1  mt-4 d-flex justify-content-center bg-secondary rounded fw-bold py-3">
                Prayer Times for 10 Paton Street
            </div>
            <div className="row px-2 pb-4 d-flex flex-row justfy-content-center">
                <table className="table-dark table-borderless">
                    <thead>
                        <tr>
                            <th className="h2" scope="col">
                                <div className="m-1 rounded d-flex bg-secondary justify-content-center align-items-center" style={{ height: "50px" }}>

                                </div>
                            </th>
                            <th className="h5" scope="col">
                                <div className="m-1 rounded px-2 d-flex bg-secondary justify-content-center align-items-center" style={{ height: "50px" }}>
                                    Iqama
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <TableHeaderTile text="Fajr"/>
                            <TableTileMobile text={props.prayerTimes.fajr} />
                        </tr>
                        <tr>
                            <TableHeaderTile text="Shurooq" />
                            <TableTileMobile text={props.prayerTimes.shurooq} />
                        </tr>
                        <tr>
                            <TableHeaderTile text="Zuhr" />
                            <TableTileMobile text={props.prayerTimes.zuhr} />
                        </tr>
                        <tr>
                            <TableHeaderTile text="Asr" />
                            <TableTileMobile text={props.prayerTimes.asr} />
                        </tr>
                        <tr>
                            <TableHeaderTile text="Magrib" />
                            <TableTileMobile text={props.prayerTimes.magrib} />
                        </tr>
                        <tr>
                            <TableHeaderTile text="Isha" />
                            <TableTileMobile text={props.prayerTimes.isha} />
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    );
}