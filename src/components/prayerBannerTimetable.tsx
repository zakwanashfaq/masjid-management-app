
const prayerTimes = {
    fajr: "0600",
    shurooq: "0700",
    zuhr: "1210",
    asr: "1310",
    magrib: "1800",
    isha: "1830",
    jumma: "1300",
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
    return (
        <>
            <div className="">
                <PrayerTimeTableHorizontal />
            </div>
        </>
    );
}

type TableTileProps = {
    text: string;
    lg?: boolean
}

function TableTile(props: TableTileProps) {
    const [time, period] = convertTo12HourFormat(props.text);
    return (
        <th className="h1" scope="col">
            <div className="m-1 rounded d-flex bg-secondary justify-content-center align-items-center" style={{ height: "160px" }}>
                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                    <span>
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
        <th className="h2" scope="col">
            <div className="m-1 rounded d-flex bg-primary justify-content-center align-items-center" style={{ height: "80px" }}>
                {props.text}
            </div>
        </th>
    );
}


function PrayerTimeTableHorizontal() {
    return (
        <>
            <div className="row px-2 py-4">
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
                            <th className="h2" scope="col">
                                <div className="m-1 rounded d-flex bg-secondary justify-content-center align-items-center" style={{ height: "160px" }}>
                                    Azan
                                </div>
                            </th>
                            <TableTile text={prayerTimes.fajr} />
                            <TableTile text={prayerTimes.shurooq} />
                            <TableTile text={prayerTimes.zuhr} />
                            <TableTile text={prayerTimes.asr} />
                            <TableTile text={prayerTimes.magrib} />
                            <TableTile text={prayerTimes.isha} />
                        </tr>
                        <tr>
                            <th className="h2" scope="col">
                                <div className="m-1 rounded px-2 d-flex bg-secondary justify-content-center align-items-center" style={{ height: "160px" }}>
                                    Iqama
                                </div>
                            </th>
                            <TableTile text={prayerTimes.fajr} />
                            <TableTile text={prayerTimes.shurooq} />
                            <TableTile text={prayerTimes.zuhr} />
                            <TableTile text={prayerTimes.asr} />
                            <TableTile text={prayerTimes.magrib} />
                            <TableTile text={prayerTimes.isha} />
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    );
}