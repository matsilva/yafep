import { useState, useEffect } from 'react';

const useFlush = (...toWatch: any) => {
    const [flush, setFlush] = useState(false);

    useEffect(() => {
        setFlush(true);

        const flushTO = setTimeout(() => {
            setFlush(false);
        }, 1);

        return () => {
            clearTimeout(flushTO);
        };
    }, [...toWatch]);

    return flush;
};
export default useFlush;
