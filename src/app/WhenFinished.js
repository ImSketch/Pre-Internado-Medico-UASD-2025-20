'use client';

import { useEffect } from "react";
import confetti from "./confetti";

export default function WhenFinished() {
    useEffect(() => {
        confetti();
    }, []);

    return (
        <div className='container mx-auto text-center px-5'>
            <h2 className='text-6xl sm:text-5xl font-script text-yellow-700'>Felicidades, colega. Estás más cerca de la meta.</h2>
            <p className='text-2xl text-yellow-500'>¡Próximamente subiremos las fotos y videos del evento!</p>
        </div>
    )
}