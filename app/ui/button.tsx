'use client'

import { useState } from 'react';
import clsx from 'clsx';

export function Button() {
    const [mastered, setMastered] = useState(false);

    function HandleMasteredClick() {
        setMastered(!mastered);
    }

    return (
        <button className={clsx('bg-gray-200 px-8 py-1 rounded-md my-4',
                        {
                            'bg-green-900 text-green-400': mastered
                        },
                    )} onClick={HandleMasteredClick}>
            Mastered
        </button>
    );
}