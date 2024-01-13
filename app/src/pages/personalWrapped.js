import React from "react";
import { PersonalStatsChart } from "../components/personalStatsChart";
import { PersonalStats } from "../components/personalStats";
import { PersonalTokenCollage } from "../components/personalTokenCollage";
export const PersonalWrapped = () =>{
    return (
        <>
            <PersonalStats />
            <div
                className="h-96"
            >
                <PersonalStatsChart />
                <PersonalTokenCollage />
            </div>
        </>
    )
}