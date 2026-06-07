"use client";

import { ActivityCalendar,ThemeInput } from "react-activity-calendar";
import { useEffect, useState } from 'react';

// The calendar fetches your data from a public proxy API on mount, so it has
// to run in the browser — hence "use client". The homepage stays a server
// component and just renders this inside it.
export default function ContributionGraph() {
    const [data, setData] = useState(null);
    const username = "jamesdovener";
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${currentYear}`)
            .then(res => res.json())
            .then(res => setData(res.contributions));
    }, [username, currentYear]);



    if(!data) return <p>Loading contributions...</p>;

    const githubColorTheme: ThemeInput = {
        light: ['#EFF2F5', '#ACEEBB', '#4AC26B', '#2DA44E', '#116329'],
        dark: ['#eff2f529', '#ACEEBB', '#4AC26B', '#2DA44E', '#116329'],


    }

    return(
        <ActivityCalendar
            data={data}
            theme={githubColorTheme}
            minLevel={0}
            maxLevel={4}
        />
    );
}
