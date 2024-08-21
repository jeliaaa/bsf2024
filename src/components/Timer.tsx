'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TimeUnitProps } from '@/types/timerTypes';
import { caveatFont, robotoFont } from '@/fonts/fonts';


const Time = () => {
    const specificDate = '2024-07-01T20:00:00Z';
    const [timeDifference, setTimeDifference] = useState<ReturnType<typeof calculateTimeDifference> | null>(null);

    function calculateTimeDifference(targetDate: string) {
        const targetDateTime: Date = new Date(targetDate);
        const currentDateTime: Date = new Date();
        const timeDifference = currentDateTime.getTime() - targetDateTime.getTime();

        const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
        const days = Math.floor((timeDifference % (365 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
        const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

        return { years, days, hours, minutes, seconds };
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeDifference(calculateTimeDifference(specificDate));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [specificDate]);

    if (!timeDifference) {
        // Return null or a loading state until the client has rendered
        return null;
    }

    return (
        <div className='flex flex-col items-center w-full gap-y-10'>
            <div className="w-full flex flex-wrap gap-y-5 justify-between items-center">
                <TimeUnit label="Years" value={timeDifference.years} />
                <TimeUnit label="Days" value={timeDifference.days} />
                <TimeUnit label="Hours" value={timeDifference.hours} />
                <TimeUnit label="Minutes" value={timeDifference.minutes} />
                <TimeUnit label="Seconds" value={timeDifference.seconds} />
            </div>
            <p className='text-2xl text-center'>Since 01.07.2024</p>
        </div>
    );
};

const TimeUnit = ({ label, value }: TimeUnitProps) => (
    <div className="flex flex-col items-center w-48 ">
        <h4 className='text-green-600 font-bold mb-2 '>{label}</h4>
        <div className="rounded-full w-4/5 aspect-square border-2 border-black flex justify-center items-center bg-green-300">
            <p className={`font-sans text-6xl text-white mr-2 ${caveatFont}`}>{value}</p>
        </div>
    </div>
);

export default Time;
