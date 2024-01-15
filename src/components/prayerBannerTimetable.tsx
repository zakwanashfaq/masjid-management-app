
export default function PrayerBannerTimetable() {
    return (
        <>
            <div className="col-sm-12 tmdv">
                <div className="tmcont">
                    <table className="timetable-horizontal tt" dir="ltr">
                        <tbody>
                            <tr className="tthd">
                                <td className="alrtd tplt">
                                    <div className="tmrw">
                                        <div className="switch switch1">
                                            <span className="l1 ng-binding" lang="en">Tomorrow</span>
                                            <span className="l2 nol2" lang="en">Tomorrow</span>
                                        </div>
                                        <div className="switch switch2">
                                            <span dir="ltr" lang="en" className="ng-binding">04 Rajab</span>
                                            <span className="l2 nol2" dir="ltr" lang="en"> </span>
                                            <span dir="ltr" lang="en" className="ng-binding">, 1445</span>
                                        </div>
                                    </div>
                                    <div className="alertwrap" dir="ltr">
                                        <div className="alert" style={{ display: "none;" }}>
                                            <span lang="en" dir="ltr" className="ng-binding">Tomorrow Iqama</span>
                                        </div>
                                        <div className="alert nol2" style={{ display: "none;" }}>
                                            <span lang="en" dir="ltr" className="ng-binding">Tomorrow Iqama</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="onlyl1">
                                    <span lang="en" className="l1 ng-binding">Fajr</span>
                                    <br />
                                    <span lang="en" className="l2 nol2">Fajr</span>
                                </td>
                                <td className="onlyl1">
                                    <span lang="en" className="l1 ng-binding">Shurooq</span>
                                    <br />
                                    <span lang="en" className="l2 nol2">Shurooq</span>
                                </td>
                                <td className="onlyl1">
                                    <span lang="en" className="l1 ng-binding">Zuhr</span>
                                    <br />
                                    <span lang="en" className="l2 nol2">Zuhr</span>
                                </td>
                                <td className="onlyl1">
                                    <span lang="en" className="l1 ng-binding">Asr</span>
                                    <br />
                                    <span lang="en" className="l2 nol2">Asr</span>
                                </td>
                                <td className="onlyl1">
                                    <span lang="en" className="l1 ng-binding">Maghrib</span>
                                    <br />
                                    <span lang="en" className="l2 nol2">Maghrib</span>
                                </td>
                                <td className="onlyl1">
                                    <span lang="en" className="l1 ng-binding">Isha</span>
                                    <br />
                                    <span lang="en" className="l2 nol2">Isha</span>
                                </td>
                                <td className="onlyl1 tprt brrt">
                                    <span lang="en" className="l1 ng-binding">Jum'ah</span>
                                    <br />
                                    <span lang="en" className="l2 nol2">Jum'ah</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="tthd onlyl1">
                                    <span className="l1 ng-scope" ng-if="nol2!=''">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span className="l1 ng-binding" lang="en">Azan</span>
                                    <span className="l2 nol2" lang="en">Azan</span>
                                    <span className="l1 ng-scope" ng-if="nol2!=''">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                </td>
                                <td className="">
                                    <div className="tdy ng-binding">6:13</div>
                                    <div className="tmrw ng-binding">6:13</div>
                                </td>
                                <td rowSpan={2} className="brbt">
                                    <div className="tdy ng-binding">7:45</div>
                                    <div className="tmrw ng-binding">7:44</div>
                                </td>
                                <td className="active">
                                    <div className="tdy ng-binding">12:10</div>
                                    <div className="tmrw ng-binding">12:11</div>
                                </td>
                                <td className="">
                                    <div className="tdy ng-binding">2:17</div>
                                    <div className="tmrw ng-binding">2:18</div>
                                </td>
                                <td className="">
                                    <div className="tdy ng-binding">4:36</div>
                                    <div className="tmrw ng-binding">4:38</div>
                                </td>
                                <td className="">
                                    <div className="tdy ng-binding">6:08</div>
                                    <div className="tmrw ng-binding">6:09</div>
                                </td>
                                <td rowSpan={2} className="btrt brrt brbt ">
                                    <div className="ktbh ktbh-l1">
                                        <span lang="en" className="ng-binding">Khutbah</span>
                                    </div>
                                    <div className="ktbh ktbh-l2 nol2">
                                        <span lang="en" className="ng-binding">Khutbah</span>
                                    </div>
                                    <div className="tdy ng-binding ng-scope">1:00</div>
                                    <div className="tdy"> salatToday.jumah </div>
                                    <div className="jmh2" dir="{{labelsPrimary.dir}}">
                                        <span lang="{{labelsPrimary.lang}}">labelsPrimary.jumah2</span>
                                        <span className="jmh2-l1">: salatToday.jumah2 </span>
                                    </div>
                                </td>
                            </tr>
                            <tr className="brbt">
                                <td className="tthd onlyl1 btlt">
                                    <span className="l1 ng-binding" lang="en">Iqama</span>
                                    <span className="l2 nol2" lang="en">Iqama</span>
                                </td>
                                <td className="">
                                    <div className="tdy ng-binding">6:18</div>
                                    <div className="tmrw ng-binding">6:18</div>
                                </td>
                                <td className="active">
                                    <div className="tdy ng-binding ng-scope" ng-if="(now|date:'EEE') != 'Fri'">12:15</div>
                                    <div className="tmrw ng-binding">12:16</div>
                                </td>
                                <td className="">
                                    <div className="tdy ng-binding">2:22</div>
                                    <div className="tmrw ng-binding">2:23</div>
                                </td>
                                <td className="">
                                    <div className="tdy ng-binding">4:41</div>
                                    <div className="tmrw ng-binding">4:43</div>
                                </td>
                                <td className="">
                                    <div className="tdy ng-binding">6:13</div>
                                    <div className="tmrw ng-binding">6:14</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="timetable-verticle tt" dir="ltr" style={{ display: "none;" }}>
                        <tbody>
                            <tr className="tthd">
                                <td className="alrtd tplt">
                                    <div className="tmrw">
                                        <div className="switch switch1">
                                            <span className="l1 ng-binding" lang="en">Tomorrow</span>
                                            <span className="l2 nol2" lang="en">Tomorrow</span>
                                        </div>
                                        <div className="switch switch2">
                                            <span dir="ltr" lang="en" className="ng-binding">04 Rajab</span>
                                            <span className="l2 nol2" dir="ltr" lang="en"> </span>
                                            <span dir="ltr" lang="en" className="ng-binding">, 1445</span>
                                        </div>
                                    </div>
                                    <div className="alertwrap" dir="ltr">
                                        <div className="alert" style={{ display: "none;" }}>
                                            <span lang="en" dir="ltr" className="ng-binding">Tomorrow Iqama</span>
                                        </div>
                                        <div className="alert nol2" style={{ display: "none;" }}>
                                            <span lang="en" dir="ltr" className="ng-binding">Tomorrow Iqama</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="onlyl1">
                                    <span className="l1 ng-binding" lang="en">Azan</span>
                                    <br />
                                    <span className="l2 nol2" lang="en">Azan</span>
                                </td>
                                <td className="onlyl1 tprt brrt">
                                    <span className="l1 ng-binding" lang="en">Iqama</span>
                                    <br />
                                    <span className="l2 nol2" lang="en">Iqama</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="tthd">
                                    <span className="l1 ng-binding" lang="en">Fajr</span>
                                    <span className="l2 nol2" lang="en">Fajr</span>
                                </td>
                                <td className="">
                                    <div className="tdy ng-binding">6:13</div>
                                    <div className="tmrw ng-binding">6:13</div>
                                </td>
                                <td className="brrt ">
                                    <div className="tdy ng-binding">6:18</div>
                                    <div className="tmrw ng-binding">6:18</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="tthd">
                                    <span className="l1 ng-binding" lang="en">Shurooq</span>
                                    <span className="l2 nol2" lang="en">Shurooq</span>
                                </td>
                                <td colSpan={2} className="brrt">
                                    <div className="tdy ng-binding">7:45</div>
                                    <div className="tmrw ng-binding">7:44</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="tthd">
                                    <span className="l1 ng-binding" lang="en">Zuhr</span>
                                    <span className="l2 nol2" lang="en">Zuhr</span>
                                </td>
                                <td className="active">
                                    <div className="tdy ng-binding">12:10</div>
                                    <div className="tmrw ng-binding">12:11</div>
                                </td>
                                <td className="brrt   active">
                                    <div className="tdy ng-binding ng-scope" ng-if="(now|date:'EEE') != 'Fri'">12:15</div>
                                    <div className="tmrw ng-binding">12:16</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="tthd">
                                    <span className="l1 ng-binding" lang="en">Asr</span>
                                    <span className="l2 nol2" lang="en">Asr</span>
                                </td>
                                <td className="">
                                    <div className="tdy ng-binding">2:17</div>
                                    <div className="tmrw ng-binding">2:18</div>
                                </td>
                                <td className="brrt ">
                                    <div className="tdy ng-binding">2:22</div>
                                    <div className="tmrw ng-binding">2:23</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="tthd">
                                    <span className="l1 ng-binding" lang="en">Maghrib</span>
                                    <span className="l2 nol2" lang="en">Maghrib</span>
                                </td>
                                <td className="">
                                    <div className="tdy ng-binding">4:36</div>
                                    <div className="tmrw ng-binding">4:38</div>
                                </td>
                                <td className="brrt ">
                                    <div className="tdy ng-binding">4:41</div>
                                    <div className="tmrw ng-binding">4:43</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="tthd">
                                    <span className="l1 ng-binding" lang="en">Isha</span>
                                    <span className="l2 nol2" lang="en">Isha</span>
                                </td>
                                <td className="">
                                    <div className="tdy ng-binding">6:08</div>
                                    <div className="tmrw ng-binding">6:09</div>
                                </td>
                                <td className="brrt ">
                                    <div className="tdy ng-binding">6:13</div>
                                    <div className="tmrw ng-binding">6:14</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="tthd btlt brbt">
                                    <span className="l1 ng-binding" lang="en">Jum'ah</span>
                                    <span className="l2 nol2" lang="en">Jum'ah</span>
                                </td>
                                <td colSpan={2} className="btrt brrt brbt ">
                                    <div className="ktbh ktbh-l1">
                                        <span lang="en" className="ng-binding">Khutbah</span>
                                    </div>
                                    <div className="ktbh ktbh-l2 nol2">
                                        <span lang="en" className="ng-binding">Khutbah</span>
                                    </div>
                                    <div className="tdy ng-binding ng-scope">1:00</div>
                                    <div className="tdy"> salatToday.jumah </div>
                                    <div className="jmh2" dir="{{labelsPrimary.dir}}">
                                        <span lang="{{labelsPrimary.lang}}">labelsPrimary.jumah2</span>
                                        <span className="jmh2-l1">: salatToday.jumah2 </span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-12 aldv">
                    <div style={{ "border": "0px solid blue;" }}>Alert</div>
                </div>
            </div>
        </>
    );
}