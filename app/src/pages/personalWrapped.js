import React from "react";
import { PersonalStatsChart } from "../components/personalStatsChart";
import { PersonalStats } from "../components/personalStats";
import { PersonalTokenCollage } from "../components/personalTokenCollage";
import CardCarousel from "../components/CardCarousel";

export const PersonalWrapped = () =>{
    return (
        <>
                <CardCarousel />
                <PersonalStatsChart />
                <PersonalTokenCollage />
        </>
    )
}