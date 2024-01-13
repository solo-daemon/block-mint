import React from "react";
import Chart from "chart.js/auto";
import { Line } from 'react-chartjs-2';
import { Card, CardBody } from "@nextui-org/react";
export const PersonalStatsChart = () =>{
     const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'No of Tokens Owned',
        fill: false,
        borderColor: '#6272A4',
        data: [65, 59, 80, 81, 56],
      },
      {
        label: 'NFTs owned',
        fill: false,
        borderColor: '#FFB86C',
        data: [28, 48, 40, 19, 86],
      },
      {
        label: 'Account Balance',
        fill: false,
        borderColor: '#BD93F9',
        data: [278, 480, 840, 119, 86],
      },
      // Add more datasets as needed
    ],
  };
    

  return (
    <div className="flex justify-center my-4">
        <Card className="min-w-[700px] ">
            <CardBody>
                <div className="h-80">
                    <Line data={data}></Line>
                </div>
            </CardBody>
        </Card>
    </div>
  );
}