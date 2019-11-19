import { useEffect } from 'react';

const useEscapeKeyPress = (cb: () => void) => {
    const onEscape = (e: KeyboardEvent) => {
        if (e.keyCode === 27) {
            cb();
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', onEscape);
        return () => {
            document.removeEventListener('keydown', onEscape);
        };
    });
};

export default useEscapeKeyPress;
