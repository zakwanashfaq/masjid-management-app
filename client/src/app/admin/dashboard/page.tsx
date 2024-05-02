'use client';

import { useSelector } from "react-redux";
import PrayerTimesPage from "./prayerTimeContainer";
import HomeContainer from "./homeContainer";
import EventsContainer from "./eventsContainer";

type TAdminDashboardState = {
    adminDashState: {
        selected_nav: string;
    };
};

export default function Page() {
    const slectedNav = useSelector((state: TAdminDashboardState) => {
        return state.adminDashState.selected_nav
    });
    return (
        <>

            {slectedNav === 'home' && <HomeContainer />}
            {slectedNav === 'prayer_times' && <PrayerTimesPage />}
            {slectedNav === 'events' && <EventsContainer />}

        </>
    )
}


