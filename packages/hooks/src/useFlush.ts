import { useState, useEffect } from 'react';

/**
 * 
 * useFlush can help you trigger updates to stale components, usually caused by third party libs
 * by totally flushing the component
 * @param toWatch - 1 or more variables to watch for changes to trigger a flush
 */
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
