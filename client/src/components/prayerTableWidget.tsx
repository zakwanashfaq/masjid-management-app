
export default function PrayerTimeTable() {
    return (
        <>
            <div className="card p-3" style={{width: '450px'}}>
                <table className="table-primary ">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col" className="mx-3">Athan</th>
                            <th scope="col">Iqama</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Fajr</th>
                            <td>6:30 am</td>
                            <td>7:00 am</td>
                        </tr>
                        <tr>
                            <th scope="row">Dohur</th>
                            <td>12:30 pm</td>
                            <td>1:00 pm</td>
                        </tr>
                        <tr>
                            <th scope="row">Asr</th>
                            <td>12:30 pm</td>
                            <td>1:00 pm</td>
                        </tr>
                        <tr>
                            <th scope="row">Magrib</th>
                            <td>12:30 pm</td>
                            <td>1:00 pm</td>
                        </tr>
                        <tr>
                            <th scope="row">Isha</th>
                            <td>12:30 pm</td>
                            <td>1:00 pm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}