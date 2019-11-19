import { useEffect } from 'react';

const useEnterKeyPress = (cb: () => void) => {
    const onEnter = (e: KeyboardEvent) => {
        if (e.keyCode === 13) {
            cb();
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', onEnter);
        return () => {
            document.removeEventListener('keydown', onEnter);
        };
    });
};

export default useEnterKeyPress;
