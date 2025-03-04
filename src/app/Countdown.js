'use client';

import React, { useState, useEffect } from 'react';

/**
 * Calcula el tiempo restante para una fecha de expiración.
 * 
 * @param   {int} expiresTimestamp
 * @returns {Object} 
 */
const computeTimeLeft = (expiresTimestamp) => {
    const countDownDate = new Date(expiresTimestamp * 1000).getTime();
    const now = new Date().getTime();
    const timeDistance = countDownDate - now;
    if (timeDistance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);
    return {
        days,
        hours,
        minutes,
        seconds,
    };
};

/**
 * Muestra una unidad de tiempo.
 * 
 * @param   {int}     value 
 * @param   {string}  label
 * @returns {JSX.Element}
 */
function TimeUnit({ value, className, ...props }) {
    return (
        <div className={`animate-fade-up animate-once animate-duration-150 animate-ease-in-out tabular-nums w-[2ch] ${className}`} {...props}>
            {value.toString().padStart(2, '0')}
        </div>
    );
}

/**
 * Muestra un contador regresivo.
 * 
 * @prop    {int} expiredTimestamp
 * @returns {JSX.Element}
 */
export default function Countdown({ expiresTimestamp, onFinished, className, ...props }) {
    const [isMounted, setIsMounted] = useState(false);
    const timestamp = Number(expiresTimestamp);
    const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [hasFinished, setHasFinished] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        setTimer(computeTimeLeft(timestamp));

        const countDownDate = new Date(timestamp * 1000).getTime();

        const runningCounter = setInterval(() => {
            const now = new Date().getTime();
            const timeDistance = countDownDate - now;

            if (timeDistance < 0) {
                setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(runningCounter);
                setHasFinished(true);
                return;
            }

            const days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDistance % (1000 * 60)) / 1000);

            setTimer({
                days,
                hours,
                minutes,
                seconds
            });
        }, 1000);

        return () => clearInterval(runningCounter);
    }, [timestamp, isMounted]);

    if (hasFinished)
        return onFinished;

    return (
        <div className={`font-script grid grid-rows-3 sm:gap-y-10 gap-y-5 gap-x-10 transition-all ${className}`} {...props}>
            <div className='row-span-3 h-full place-content-center'>
                <span className='uppercase text-4xl sm:text-6xl text-yellow-100 bg-yellow-400 p-2 px-3 rounded-2xl inline-block'>Faltan</span>
                {' '}
                <TimeUnit className='text-8xl sm:text-9xl font-bold text-yellow-800 mb-1' key={`days-${timer.days}`} value={timer.days} />
                {' '}
                <span className='uppercase text-7xl sm:text-9xl text-yellow-600 w-[4ch]'>{timer.days === 1 ? 'día' : 'días'}</span>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <TimeUnit className='text-yellow-700 sm:text-6xl text-3xl font-bold' key={`hours-${timer.hours}`} value={timer.hours} />
                {' '}
                <span className='uppercase sm:text-6xl text-3xl text-yellow-500 w-[5ch]'>{timer.hours === 1 ? 'hora' : 'horas'}</span>
            </div>
            <div className='flex flex-row gap-4 items-center col-start-2 row-start-2'>
                <TimeUnit className='text-yellow-700 sm:text-6xl text-3xl font-bold' key={`minutes-${timer.minutes}`} value={timer.minutes} />
                {' '}
                <span className='uppercase sm:text-6xl text-3xl text-yellow-500 w-[7ch]'>{timer.minutes === 1 ? 'minuto' : 'minutos'}</span>
            </div>
            <div className='flex flex-row gap-4 items-center col-start-2 row-start-3'>
                <TimeUnit className='text-yellow-700 sm:text-6xl text-3xl font-bold' key={`seconds-${timer.seconds}`} value={timer.seconds} />
                {' '}
                <span className='uppercase sm:text-6xl text-3xl text-yellow-500 w-[8ch]'>{timer.seconds === 1 ? 'segundo' : 'segundos'}</span>
            </div>
        </div>
    );
}